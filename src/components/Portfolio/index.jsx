import { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';

const PortfolioSection = styled.section`
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

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: ${props => props.theme.radii.full};
  border: none;
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.backgroundLight};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.theme.fontWeights.medium};

  &:hover {
    background: ${props => props.active ? props.theme.colors.primaryDark : props.theme.colors.backgroundDark};
    transform: translateY(-2px);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.base};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};

    img {
      transform: scale(1.05);
    }
  }
`;

const ProjectImage = styled.div`
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

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.md};
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: ${props => props.theme.colors.backgroundLight};
  color: ${props => props.theme.colors.text};
  border-radius: ${props => props.theme.radii.full};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.sm};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primaryDark};
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.lg};
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  padding: 0.5rem;
  z-index: 1;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico moderna con carrito de compras y pasarela de pago",
    image: "/images/portfolio/ecommerce.jpg",
    category: "web",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    longDescription: "Una plataforma de comercio electrónico completa con gestión de productos, carrito de compras, pasarela de pago segura y panel de administración. Implementada con las últimas tecnologías web.",
  },
  {
    id: 2,
    title: "CRM Sistema",
    description: "Sistema de gestión de relaciones con clientes con análisis avanzado",
    image: "/images/portfolio/crm.jpg",
    category: "enterprise",
    tech: ["Vue.js", "Laravel", "MySQL", "Docker"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    longDescription: "Sistema CRM empresarial con seguimiento de clientes, gestión de ventas, informes analíticos y automatización de marketing.",
  },
  {
    id: 3,
    title: "App de Fitness",
    description: "Aplicación móvil para seguimiento de ejercicios y nutrición",
    image: "/images/portfolio/fitness.jpg",
    category: "mobile",
    tech: ["React Native", "Firebase", "Redux", "Node.js"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    longDescription: "Aplicación móvil multiplataforma para seguimiento de ejercicios, planes de nutrición personalizados y análisis de progreso.",
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Panel de control en tiempo real para análisis de datos",
    image: "/images/portfolio/dashboard.jpg",
    category: "enterprise",
    tech: ["Angular", "Python", "PostgreSQL", "WebSocket"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    longDescription: "Dashboard interactivo en tiempo real con visualizaciones de datos avanzadas, informes personalizables y alertas automáticas.",
  },
  {
    id: 5,
    title: "Social Media App",
    description: "Red social con funciones de mensajería y contenido multimedia",
    image: "/images/portfolio/social.jpg",
    category: "web",
    tech: ["Next.js", "GraphQL", "AWS", "Redis"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    longDescription: "Plataforma social con características avanzadas de mensajería, compartición de contenido multimedia y algoritmo de recomendaciones.",
  },
  {
    id: 6,
    title: "IoT Platform",
    description: "Plataforma para gestión y monitoreo de dispositivos IoT",
    image: "/images/portfolio/iot.jpg",
    category: "enterprise",
    tech: ["React", "Golang", "MQTT", "InfluxDB"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example",
    longDescription: "Sistema de gestión IoT empresarial con monitoreo en tiempo real, análisis de datos y automatización de dispositivos.",
  }
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'enterprise', label: 'Enterprise' }
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <PortfolioSection id="portfolio" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Nuestro Portfolio
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Descubre algunos de nuestros proyectos más destacados
          </Subtitle>
        </Header>

        <FilterContainer
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Demo
                  </ProjectLink>
                  <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Código
                  </ProjectLink>
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>

        <AnimatePresence>
          {selectedProject && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <ModalContent
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedProject(null)}>
                  <X size={24} />
                </CloseButton>
                <ModalImage src={selectedProject.image} alt={selectedProject.title} />
                <ModalBody>
                  <ProjectTitle>{selectedProject.title}</ProjectTitle>
                  <ProjectDescription>{selectedProject.longDescription}</ProjectDescription>
                  <TechStack>
                    {selectedProject.tech.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    <ProjectLink href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Ver Demo
                    </ProjectLink>
                    <ProjectLink href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Ver Código
                    </ProjectLink>
                  </ProjectLinks>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;
