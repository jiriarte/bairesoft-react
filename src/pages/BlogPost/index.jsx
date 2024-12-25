import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaShare, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { blogPosts } from '../../data/blogPosts';

const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 1rem 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 5rem 1rem 2rem;
  }
`;

const Content = styled(motion.article)`
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 300px;
  }
`;

const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackButton = styled(motion.button)`
  position: fixed;
  top: 100px;
  left: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    top: 80px;
    width: 36px;
    height: 36px;
  }
`;

const PostContent = styled.div`
  padding: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
`;

const SocialShare = styled.div`
  display: flex;
  gap: 1rem;
  
  svg {
    cursor: pointer;
    transition: color 0.2s ease;
    font-size: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ContentBody = styled.div`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  font-size: 1.1rem;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1rem;

    h2 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1.3rem;
    }
  }
`;

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate('/blog');
    }
  }, [id, navigate]);

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post?.title || '');
    
    let shareUrl;
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
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
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  if (!post) return null;

  return (
    <Container>
      <BackButton
        onClick={() => navigate('/blog')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowLeft />
      </BackButton>
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <Header>
          <HeaderImage src={post.imageUrl} alt={post.title} />
        </Header>
        <PostContent>
          <Title>{post.title}</Title>
          <Meta>
            <Tags>
              {post.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
            <SocialShare>
              <FaTwitter onClick={() => handleShare('twitter')} />
              <FaLinkedin onClick={() => handleShare('linkedin')} />
              <FaFacebook onClick={() => handleShare('facebook')} />
            </SocialShare>
          </Meta>
          <ContentBody dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostContent>
      </Content>
    </Container>
  );
};

export default BlogPost;
