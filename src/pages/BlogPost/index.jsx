import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blogPosts';
import { FaArrowLeft, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const BlogPostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem;
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const PostHeader = styled.header`
  margin-bottom: 2rem;
`;

const PostTitle = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 2rem;
`;

const PostDate = styled.span`
  font-size: 0.9rem;
`;

const PostCategory = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PostContent = styled.div`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;

  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
    margin: 2rem 0 1rem;
  }

  h3 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
    margin: 1.5rem 0 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const Tag = styled.span`
  padding: 0.3rem 0.8rem;
  background: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 20px;
  font-size: 0.9rem;
`;

const ShareContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ShareButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ExternalLink = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 2rem;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id, 10));

  if (!post) {
    return (
      <BlogPostContainer>
        <BackButton to="/blog">
          <FaArrowLeft /> Volver al Blog
        </BackButton>
        <PostHeader>
          <PostTitle>Post no encontrado</PostTitle>
        </PostHeader>
      </BlogPostContainer>
    );
  }

  const handleShare = (platform) => {
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

  return (
    <BlogPostContainer>
      <BackButton to="/blog">
        <FaArrowLeft /> Volver al Blog
      </BackButton>

      <PostHeader>
        <PostTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </PostTitle>
        <PostMeta>
          <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
          <PostCategory>{post.category}</PostCategory>
        </PostMeta>
      </PostHeader>

      <PostImage 
        src={post.imageUrl} 
        alt={post.title}
        onError={(e) => {
          e.target.src = '/blog/placeholder.jpg';
        }}
      />

      <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />

      <TagsContainer>
        {post.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagsContainer>

      <ExternalLink 
        href={post.externalUrl} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Leer más en la fuente original
      </ExternalLink>

      <ShareContainer>
        <ShareButton onClick={() => handleShare('twitter')}>
          <FaTwitter size={20} />
        </ShareButton>
        <ShareButton onClick={() => handleShare('linkedin')}>
          <FaLinkedin size={20} />
        </ShareButton>
        <ShareButton onClick={() => handleShare('facebook')}>
          <FaFacebook size={20} />
        </ShareButton>
      </ShareContainer>
    </BlogPostContainer>
  );
};

export default BlogPost;
