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
  padding: 6rem 1rem 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 5rem 1rem 2rem;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

// Componentes de cabecera
const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 1.5rem;
  }
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
  padding: 0 1rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

// Componentes de búsqueda y filtros
const SearchContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto 2rem;
  padding: 0 1rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 1.5rem;
  }
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

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0.875rem;
    font-size: 0.9rem;
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
  margin: 2rem auto;
  padding: 0 1rem;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin: 1.5rem auto;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

// Lazy loading de componentes pesados
const BlogCard = lazy(() => import('./BlogCard'));

const Blog = () => {
  // Estados
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Filtrado de posts memoizado
  const filteredPosts = useMemo(() => {
    setIsLoading(true);
    const result = blogPosts.filter(post => {
      const searchMatch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return searchMatch;
    });
    setIsLoading(false);
    return result;
  }, [searchQuery]);

  return (
    <Container>
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATION }}
          >
            Blog
          </Title>
          <Description
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: ANIMATION_DURATION, delay: ANIMATION_DELAY }}
          >
            Últimas noticias y artículos sobre tecnología, desarrollo y tendencias
          </Description>
        </Header>

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Buscar artículos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingSpinner
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ) : (
            <BlogGrid>
              {filteredPosts.map((post) => (
                <Suspense
                  key={post.id}
                  fallback={
                    <LoadingSpinner
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  }
                >
                  <BlogCard post={post} />
                </Suspense>
              ))}
            </BlogGrid>
          )}
        </AnimatePresence>
      </Content>
    </Container>
  );
};

export default React.memo(Blog);
