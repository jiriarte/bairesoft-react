import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from '../../../components/ContactForm';

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

const ContactSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const IAMachineLearning = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            IA y Machine Learning
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Potenciamos las PyMEs con soluciones de Inteligencia Artificial y 
            Machine Learning accesibles y efectivas, adaptadas a las necesidades 
            específicas de cada negocio.
          </Description>
        </Header>

        <SolutionsGrid>
          <SolutionCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SolutionTitle>Análisis Predictivo</SolutionTitle>
            <SolutionDescription>
              Anticipa tendencias y comportamientos de clientes para tomar 
              decisiones informadas y estratégicas.
            </SolutionDescription>
          </SolutionCard>

          <SolutionCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SolutionTitle>Automatización Inteligente</SolutionTitle>
            <SolutionDescription>
              Optimiza procesos empresariales mediante la automatización 
              basada en IA y aprendizaje automático.
            </SolutionDescription>
          </SolutionCard>

          <SolutionCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SolutionTitle>Chatbots y Asistentes</SolutionTitle>
            <SolutionDescription>
              Mejora la atención al cliente con asistentes virtuales 
              inteligentes disponibles 24/7.
            </SolutionDescription>
          </SolutionCard>
        </SolutionsGrid>

        <ProcessSection>
          <ProcessTitle>Nuestro Enfoque</ProcessTitle>
          <ProcessSteps>
            <ProcessStep
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <StepNumber>1</StepNumber>
              <SolutionTitle>Evaluación</SolutionTitle>
              <SolutionDescription>
                Analizamos tus datos y procesos para identificar oportunidades 
                de mejora mediante IA.
              </SolutionDescription>
            </ProcessStep>

            <ProcessStep
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StepNumber>2</StepNumber>
              <SolutionTitle>Desarrollo</SolutionTitle>
              <SolutionDescription>
                Implementamos soluciones personalizadas utilizando las últimas 
                tecnologías en IA y ML.
              </SolutionDescription>
            </ProcessStep>

            <ProcessStep
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StepNumber>3</StepNumber>
              <SolutionTitle>Integración</SolutionTitle>
              <SolutionDescription>
                Integramos las soluciones de IA con tus sistemas existentes 
                para maximizar su impacto.
              </SolutionDescription>
            </ProcessStep>

            <ProcessStep
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StepNumber>4</StepNumber>
              <SolutionTitle>Optimización</SolutionTitle>
              <SolutionDescription>
                Monitoreamos y mejoramos continuamente el rendimiento de 
                las soluciones implementadas.
              </SolutionDescription>
            </ProcessStep>
          </ProcessSteps>
        </ProcessSection>

        <ContactSection>
          <ContactTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¿Listo para implementar IA en tu negocio?
          </ContactTitle>
          <ContactForm />
        </ContactSection>
      </Content>
    </Container>
  );
};

export default IAMachineLearning;
