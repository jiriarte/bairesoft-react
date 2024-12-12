import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts, categories, tags } from '../../data/blogPosts';
import { FaShare, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
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
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const BlogCard = styled(motion.article)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImageContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: ${({ theme }) => theme.colors.border};
`;

const BlogImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${BlogCard}:hover & {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const BlogExcerpt = styled.div`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  margin-top: auto;
`;

const PostDate = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
`;

const BlogCategory = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const ShareContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const ShareButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const ExternalLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.border};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.card};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.text};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [sortBy, setSortBy] = useState('date');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let filtered = [...blogPosts];

    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => 
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }

    filtered.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, selectedTags, sortBy]);

  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleShare = (platform, post) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <Container>
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog de Tecnología y Tendencias
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Mantente al día con las últimas novedades en IA, desarrollo de software y transformación digital
          </Description>
        </Header>

        <FiltersContainer>
          <FilterSelect
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </FilterSelect>

          <FilterSelect
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Más recientes</option>
            <option value="popular">Más populares</option>
          </FilterSelect>
        </FiltersContainer>

        <TagsContainer>
          {tags.map(tag => (
            <Tag
              key={tag}
              active={selectedTags.includes(tag)}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Tag>
          ))}
        </TagsContainer>

        <BlogGrid>
          {currentPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogImageContainer>
                <BlogImage 
                  src={post.imageUrl} 
                  alt={post.title}
                  onError={(e) => {
                    e.target.src = '/blog/placeholder.jpg';
                  }}
                />
              </BlogImageContainer>
              <BlogContent>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <BlogMeta>
                  <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
                  <BlogCategory>{post.category}</BlogCategory>
                </BlogMeta>
                <TagsContainer>
                  {post.tags.map((tag, idx) => (
                    <Tag
                      key={idx}
                      active={selectedTags.includes(tag)}
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </Tag>
                  ))}
                </TagsContainer>
                <ButtonContainer>
                  <ReadMoreButton to={`/blog/${post.id}`}>
                    Leer artículo completo
                  </ReadMoreButton>
                  <ExternalLink 
                    href={post.externalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver fuente original
                  </ExternalLink>
                </ButtonContainer>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>

        {totalPages > 1 && (
          <Pagination>
            <PageButton
              onClick={() => setCurrentPage(prev => prev - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </PageButton>
            {[...Array(totalPages)].map((_, i) => (
              <PageButton
                key={i + 1}
                active={currentPage === i + 1}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </PageButton>
            ))}
            <PageButton
              onClick={() => setCurrentPage(prev => prev + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </PageButton>
          </Pagination>
        )}
      </Content>
    </Container>
  );
};

export default Blog;
