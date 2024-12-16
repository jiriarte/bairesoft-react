import React, { useState, useMemo, useCallback, Suspense, lazy } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FixedSizeGrid } from 'react-window';
import { blogPosts, categories, tags } from '../../data/blogPosts';
import { FaShare, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Constantes
const POSTS_PER_PAGE = 6;
const ANIMATION_DURATION = 0.5;
const ANIMATION_DELAY = 0.2;
const GRID_COLUMN_COUNT = 3;
const CARD_HEIGHT = 400;

// Estilos base
const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// Componentes de cabecera
const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 2.5rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
`;

// Componentes de búsqueda y filtros
const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  min-width: 200px;
  appearance: auto;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  option {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: inherit;
    padding: 0.5rem;
  }
`;

// Componentes de etiquetas
const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  justify-content: center;
`;

const Tag = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.card};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.border};
  }
`;

// Componente de carga
const LoadingSpinner = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: 5px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  margin: 2rem auto;
`;

// Componentes de blog
const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

// Lazy loading de componentes pesados
const BlogCard = lazy(() => import('./BlogCard'));

const Blog = () => {
  // Estados
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Filtrado de posts memoizado con debounce
  const filteredPosts = useMemo(() => {
    setIsLoading(true);
    const result = blogPosts.filter(post => {
      const categoryMatch = selectedCategory === 'all' || post.category === selectedCategory;
      const tagsMatch = selectedTags.length === 0 || selectedTags.some(tag => post.tags.includes(tag));
      const searchMatch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return categoryMatch && tagsMatch && searchMatch;
    });
    setIsLoading(false);
    return result;
  }, [selectedCategory, selectedTags, searchQuery]);

  // Paginación memoizada
  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [filteredPosts, currentPage]);

  // Grid renderer para virtualización
  const GridCell = useCallback(({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * GRID_COLUMN_COUNT + columnIndex;
    if (index >= currentPosts.length) return null;
    
    const post = currentPosts[index];
    
    return (
      <div style={style}>
        <Suspense fallback={<LoadingSpinner animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} />}>
          <BlogCard
            post={post}
            onImageError={handleImageError}
            style={{ margin: '1rem' }}
          />
        </Suspense>
      </div>
    );
  }, [currentPosts]);

  // Manejadores de eventos
  const handleCategoryChange = useCallback((e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  }, []);

  const handleSearchChange = useCallback((e) => {
    const { value } = e.target;
    // Debounce la búsqueda para evitar demasiadas actualizaciones
    const timeoutId = setTimeout(() => {
      setSearchQuery(value);
      setCurrentPage(1);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  const toggleTag = useCallback((tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  }, []);

  const handleImageError = useCallback((e) => {
    e.target.src = '/images/placeholder.jpg';
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION }}
          >
            Blog
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY }}
          >
            Descubre las últimas tendencias y novedades en tecnología y desarrollo de software
          </Description>
        </Header>

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Buscar artículos..."
            onChange={handleSearchChange}
          />
        </SearchContainer>

        <FiltersContainer>
          <FilterSelect
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="all">Todas las categorías</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </FilterSelect>
        </FiltersContainer>

        <TagsContainer>
          {tags.map(tag => (
            <Tag
              key={tag}
              active={selectedTags.includes(tag)}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Tag>
          ))}
        </TagsContainer>

        <AnimatePresence>
          {isLoading ? (
            <LoadingSpinner
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, rotate: { duration: 1, repeat: Infinity } }}
            />
          ) : (
            <BlogGrid>
              <FixedSizeGrid
                columnCount={GRID_COLUMN_COUNT}
                columnWidth={300}
                height={Math.ceil(currentPosts.length / GRID_COLUMN_COUNT) * CARD_HEIGHT}
                rowCount={Math.ceil(currentPosts.length / GRID_COLUMN_COUNT)}
                rowHeight={CARD_HEIGHT}
                width={1200}
              >
                {GridCell}
              </FixedSizeGrid>
            </BlogGrid>
          )}
        </AnimatePresence>

        {filteredPosts.length > POSTS_PER_PAGE && (
          <Pagination>
            {Array.from({ length: Math.ceil(filteredPosts.length / POSTS_PER_PAGE) }).map((_, index) => (
              <PageButton
                key={index + 1}
                active={currentPage === index + 1}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PageButton>
            ))}
          </Pagination>
        )}
      </Content>
    </Container>
  );
};

export default React.memo(Blog);
