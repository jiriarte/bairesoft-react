import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsSection = styled.section`
  padding: 8rem 2rem;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }

  .swiper {
    padding: 2rem 0 4rem;
  }

  .swiper-pagination-bullet {
    background: ${props => props.theme.colors.primary};
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${props => props.theme.colors.primary};
    
    &:after {
      font-size: 1.5rem;
    }
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

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.base};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: ${props => `${props.theme.colors.primary}10`};
  color: ${props => props.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: ${props => props.theme.radii.full};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const ProjectLink = styled.a`
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

const projects = [
  {
    title: "Sistema de Gestión Empresarial",
    description: "Desarrollo de un sistema integral de gestión empresarial con módulos de recursos humanos, finanzas y operaciones.",
    image: "/images/projects/project1.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#"
  },
  {
    title: "App de Análisis de Datos",
    description: "Aplicación de análisis de datos en tiempo real con visualizaciones interactivas y reportes personalizados.",
    image: "/images/projects/project2.jpg",
    tags: ["Python", "TensorFlow", "AWS"],
    link: "#"
  },
  {
    title: "Plataforma E-learning",
    description: "Plataforma educativa con funcionalidades de videoconferencia, gestión de cursos y seguimiento de progreso.",
    image: "/images/projects/project3.jpg",
    tags: ["Vue.js", "Firebase", "WebRTC"],
    link: "#"
  },
  {
    title: "Sistema IoT Industrial",
    description: "Sistema de monitoreo industrial basado en IoT para control de procesos y mantenimiento predictivo.",
    image: "/images/projects/project4.jpg",
    tags: ["IoT", "Azure", "Machine Learning"],
    link: "#"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ProjectsSection id="proyectos" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Nuestros Proyectos
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Descubre cómo hemos ayudado a empresas a alcanzar sus objetivos a través de soluciones tecnológicas innovadoras
          </Subtitle>
        </Header>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TagsContainer>
                    {project.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                  </TagsContainer>
                  <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver Proyecto
                    <ArrowRight size={16} />
                  </ProjectLink>
                </ProjectContent>
              </ProjectCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
