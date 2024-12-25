import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from '../../../components/ContactForm';
import ScheduleContactForm from '../../../components/ScheduleContactForm';

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

const Section = styled(motion.div)`
  margin-top: 4rem;
  text-align: center;
`;

const DesarrolloWeb = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Desarrollo Web Profesional
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desde 2007, hemos estado creando sitios web y aplicaciones web personalizadas 
            para PyMEs y microempresas, combinando diseño atractivo con funcionalidad robusta.
          </Description>
        </Header>

        <SolutionsGrid>
          <SolutionCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SolutionTitle>Diseño Responsivo</SolutionTitle>
            <SolutionDescription>
              Sitios web que se adaptan perfectamente a todos los dispositivos, 
              desde móviles hasta pantallas de escritorio.
            </SolutionDescription>
          </SolutionCard>

          <SolutionCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SolutionTitle>Optimización SEO</SolutionTitle>
            <SolutionDescription>
              Implementamos las mejores prácticas de SEO para mejorar la visibilidad 
              de tu sitio en los motores de búsqueda.
            </SolutionDescription>
          </SolutionCard>

          <SolutionCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SolutionTitle>Rendimiento Optimizado</SolutionTitle>
            <SolutionDescription>
              Sitios web rápidos y eficientes que proporcionan una experiencia 
              de usuario excepcional.
            </SolutionDescription>
          </SolutionCard>
        </SolutionsGrid>

        <ProcessSection>
          <ProcessTitle>Nuestro Proceso</ProcessTitle>
          <ProcessSteps>
            <ProcessStep
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StepNumber>1</StepNumber>
              <SolutionTitle>Análisis</SolutionTitle>
              <SolutionDescription>
                Entendemos tus necesidades y objetivos comerciales para crear 
                una solución personalizada.
              </SolutionDescription>
            </ProcessStep>

            <ProcessStep
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StepNumber>2</StepNumber>
              <SolutionTitle>Diseño</SolutionTitle>
              <SolutionDescription>
                Creamos mockups y prototipos interactivos para visualizar 
                el producto final.
              </SolutionDescription>
            </ProcessStep>

            <ProcessStep
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StepNumber>3</StepNumber>
              <SolutionTitle>Desarrollo</SolutionTitle>
              <SolutionDescription>
                Implementamos tu sitio web utilizando las últimas tecnologías 
                y mejores prácticas.
              </SolutionDescription>
            </ProcessStep>

            <ProcessStep
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StepNumber>4</StepNumber>
              <SolutionTitle>Lanzamiento</SolutionTitle>
              <SolutionDescription>
                Realizamos pruebas exhaustivas y desplegamos tu sitio web 
                en producción.
              </SolutionDescription>
            </ProcessStep>
          </ProcessSteps>
        </ProcessSection>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Title>Agenda una Consulta Gratuita</Title>
          <Description>
            ¿Interesado en desarrollar tu presencia web? Agenda una consulta gratuita con nuestros expertos para discutir tu proyecto.
          </Description>
          <ScheduleContactForm title="Agenda tu consulta gratuita" />
        </Section>

        <ContactSection>
          <ContactTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¿Listo para empezar tu proyecto?
          </ContactTitle>
          <ContactForm />
        </ContactSection>
      </Content>
    </Container>
  );
};

export default DesarrolloWeb;
