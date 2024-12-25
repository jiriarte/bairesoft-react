import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = styled.section`
  padding: 8rem 2rem;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Subtitle = styled(motion.p)`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.lg};
  max-width: 600px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const BlogCard = styled(motion.article)`
  background: white;
  border-radius: ${props => props.theme.radii.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.base};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    
    ${props => props.ImageWrapper} img {
      transform: scale(1.05);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const Category = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.radii.full};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: 1.4;
`;

const BlogExcerpt = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ReadMore = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.medium};
  text-decoration: none;
  transition: gap 0.3s ease;

  &:hover {
    gap: 0.75rem;
  }
`;

const ViewAllButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.radii.full};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  margin: 0 auto;
  width: fit-content;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const blogPosts = [
  {
    id: 1,
    title: "El Futuro del Desarrollo Low Code en 2024",
    excerpt: "Descubre las últimas tendencias en desarrollo Low Code y cómo están transformando la industria del software empresarial.",
    image: "/images/blog/low-code.jpg",
    category: "Desarrollo",
    date: "2024-01-15",
    readTime: "5 min",
    author: "María García"
  },
  {
    id: 2,
    title: "Inteligencia Artificial en la Automatización de Procesos",
    excerpt: "Cómo la IA está revolucionando la automatización empresarial y mejorando la eficiencia operativa.",
    image: "/images/blog/ai-automation.jpg",
    category: "IA",
    date: "2024-01-10",
    readTime: "7 min",
    author: "Carlos López"
  },
  {
    id: 3,
    title: "Guía de Migración a la Nube para Empresas",
    excerpt: "Estrategias y mejores prácticas para una migración exitosa a la nube, minimizando riesgos y maximizando beneficios.",
    image: "/images/blog/cloud-migration.jpg",
    category: "Cloud",
    date: "2024-01-05",
    readTime: "6 min",
    author: "Ana Martínez"
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <BlogSection id="blog" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Blog & Noticias
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Mantente al día con las últimas tendencias en tecnología y desarrollo de software
          </Subtitle>
        </Header>

        <BlogGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              variants={itemVariants}
              ImageWrapper={ImageWrapper}
            >
              <ImageWrapper>
                <img src={post.image} alt={post.title} />
                <Category>{post.category}</Category>
              </ImageWrapper>
              <Content>
                <MetaInfo>
                  <MetaItem>
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString()}
                  </MetaItem>
                  <MetaItem>
                    <Clock size={16} />
                    {post.readTime}
                  </MetaItem>
                  <MetaItem>
                    <User size={16} />
                    {post.author}
                  </MetaItem>
                </MetaInfo>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <ReadMore to={`/blog/${post.id}`}>
                  Leer más
                  <ArrowRight size={16} />
                </ReadMore>
              </Content>
            </BlogCard>
          ))}
        </BlogGrid>

        <ViewAllButton to="/blog">
          Ver Todos los Artículos
          <ArrowRight size={16} />
        </ViewAllButton>
      </Container>
    </BlogSection>
  );
};

export default Blog;
