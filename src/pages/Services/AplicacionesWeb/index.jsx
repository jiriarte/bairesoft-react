import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SolutionCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SolutionTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const SolutionDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const ProcessSection = styled.section`
  text-align: center;
`;

const ProcessTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProcessStep = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 auto 1rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.theme.colors.card};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const TechnologiesSection = styled.div`
  margin: 4rem 0;
`;

const TechnologiesTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
`;

const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const TechnologyCard = styled(motion.div)`
  padding: 2rem;
  background: ${props => props.theme.colors.card};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AplicacionesWeb = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aplicaciones Web Empresariales
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Con más de 15 años de experiencia desarrollando aplicaciones web para PyMEs, 
            creamos soluciones que automatizan y optimizan los procesos de tu negocio.
          </Description>
        </Header>

        <FeaturesGrid>
          <FeatureCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FeatureTitle>Aplicaciones a Medida</FeatureTitle>
            <FeatureDescription>
              Desarrollamos aplicaciones web personalizadas que se adaptan 
              perfectamente a tus procesos de negocio.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FeatureTitle>Integración con Sistemas</FeatureTitle>
            <FeatureDescription>
              Conectamos tu aplicación con otros sistemas y servicios para 
              crear un ecosistema digital eficiente.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeatureTitle>Escalabilidad</FeatureTitle>
            <FeatureDescription>
              Diseñamos aplicaciones que crecen con tu negocio, asegurando 
              un rendimiento óptimo en todo momento.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>

        <TechnologiesSection>
          <TechnologiesTitle>Tecnologías que Utilizamos</TechnologiesTitle>
          <TechnologiesGrid>
            <TechnologyCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FeatureTitle>Frontend</FeatureTitle>
              <FeatureDescription>
                React, Vue.js, Angular
              </FeatureDescription>
            </TechnologyCard>

            <TechnologyCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureTitle>Backend</FeatureTitle>
              <FeatureDescription>
                Node.js, Python, .NET
              </FeatureDescription>
            </TechnologyCard>

            <TechnologyCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureTitle>Base de Datos</FeatureTitle>
              <FeatureDescription>
                PostgreSQL, MongoDB, SQL Server
              </FeatureDescription>
            </TechnologyCard>

            <TechnologyCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FeatureTitle>Cloud</FeatureTitle>
              <FeatureDescription>
                AWS, Azure, Google Cloud
              </FeatureDescription>
            </TechnologyCard>
          </TechnologiesGrid>
        </TechnologiesSection>
      </Content>
    </Container>
  );
};

export default AplicacionesWeb;
