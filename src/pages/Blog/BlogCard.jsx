import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShare, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Card = styled(motion.article)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
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
`;

const BlogImage = styled(Link)`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: block;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${BlogImage}:hover & {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const BlogCard = React.memo(({ post, onImageError, style }) => {
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
          onError={onImageError}
          loading="lazy"
        />
      </BlogImage>
      <BlogContent>
        <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <BlogTitle>{post.title}</BlogTitle>
          <BlogExcerpt>{post.excerpt}</BlogExcerpt>
        </Link>
        <div style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
            <span>{post.date}</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <FaTwitter />
              <FaLinkedin />
              <FaFacebook />
              <FaShare />
            </div>
          </div>
        </div>
      </BlogContent>
    </Card>
  );
});

BlogCard.displayName = 'BlogCard';

export default BlogCard;
