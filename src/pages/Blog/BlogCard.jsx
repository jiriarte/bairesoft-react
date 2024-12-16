import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShare, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Card = styled(motion.article)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    &:hover {
      transform: none;
    }
  }
`;

const BlogImage = styled(Link)`
  position: relative;
  width: 100%;
  padding-top: 66.67%; /* Aspect ratio 3:2 */
  overflow: hidden;
  display: block;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${BlogImage}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    ${BlogImage}:hover & {
      transform: none;
    }
  }
`;

const BlogContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0.875rem;
  }
`;

const BlogTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  line-height: 1.4;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.1rem;
    margin-bottom: 0.375rem;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 0.8rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.textLight};
  
  svg {
    cursor: pointer;
    transition: color 0.2s ease;
    font-size: 1rem;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    gap: 0.5rem;
    
    svg {
      font-size: 0.9rem;
    }
  }
`;

const BlogCard = React.memo(({ post, onImageError, style }) => {
  const handleImageError = (e) => {
    e.target.src = '/images/default-blog.jpg';
    if (onImageError) onImageError(post.id);
  };

  return (
    <Card
      style={style}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BlogImage to={`/blog/${post.id}`}>
        <Image 
          src={post.imageUrl} 
          alt={post.title}
          onError={handleImageError}
          loading="lazy"
        />
      </BlogImage>
      <BlogContent>
        <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <BlogTitle>{post.title}</BlogTitle>
        </Link>
        <BlogMeta>
          <span>{post.date}</span>
          <SocialIcons>
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
            <FaShare />
          </SocialIcons>
        </BlogMeta>
      </BlogContent>
    </Card>
  );
});

BlogCard.displayName = 'BlogCard';

export default BlogCard;
