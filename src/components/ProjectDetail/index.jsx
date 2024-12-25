import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectContainer = styled.div`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ProjectTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 4rem;
`;

const ContentSection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 1.5rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureItem = styled(motion.li)`
  padding: 1.5rem;
  background: ${props => props.theme.colors.card};
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme.colors.textLight};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const TechItem = styled.span`
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ProjectDetail = ({ project }) => {
  return (
    <ProjectContainer>
      <ProjectHeader>
        <ProjectTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </ProjectTitle>
      </ProjectHeader>

      <ProjectImage src={project.image} alt={project.title} />

      <ContentSection>
        <SectionTitle>Descripción General</SectionTitle>
        <Description>{project.description}</Description>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Características Principales</SectionTitle>
        <FeaturesList>
          {project.features.map((feature, index) => (
            <FeatureItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureItem>
          ))}
        </FeaturesList>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Tecnologías Utilizadas</SectionTitle>
        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechStack>
      </ContentSection>
    </ProjectContainer>
  );
};

export default ProjectDetail;
