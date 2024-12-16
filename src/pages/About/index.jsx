import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: calc(80px + 2rem) 2rem 4rem;
  background: ${props => props.theme.colors.background};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-top: calc(70px + 2rem);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    background: ${props => props.theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.textLight};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageSection = styled(motion.div)`
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textLight};
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);

  h3 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    background: ${props => props.theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme.colors.textLight};
  }
`;

const Values = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled(motion.div)`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  text-align: center;

  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <Header>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre Nosotros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            En Bairesoft, combinamos innovación tecnológica con experiencia práctica para
            transformar ideas en soluciones digitales excepcionales.
          </motion.p>
        </Header>

        <Grid>
          <ImageSection
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" alt="Equipo Bairesoft" />
          </ImageSection>

          <TextSection>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Nuestra Historia
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Fundada con la visión de hacer la tecnología más accesible y eficiente,
              Bairesoft ha estado a la vanguardia de la innovación digital desde sus inicios.
              Nuestro compromiso con la excelencia y la satisfacción del cliente nos ha
              permitido crecer y evolucionar constantemente.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hoy, somos un equipo diverso de expertos apasionados por crear soluciones
              que impulsan el éxito de nuestros clientes en la era digital.
            </motion.p>
          </TextSection>
        </Grid>

        <Stats>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>100+</h3>
            <p>Proyectos Completados</p>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3>50+</h3>
            <p>Clientes Satisfechos</p>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3>17+</h3>
            <p>Años de Experiencia</p>
          </StatItem>
        </Stats>

        <Values>
          <ValueCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <h3>Innovación</h3>
            <p>Constantemente exploramos nuevas tecnologías y metodologías para ofrecer las mejores soluciones.</p>
          </ValueCard>
          <ValueCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3>Colaboración</h3>
            <p>Trabajamos estrechamente con nuestros clientes para entender y superar sus expectativas.</p>
          </ValueCard>
          <ValueCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3>Calidad</h3>
            <p>Nos comprometemos con los más altos estándares de calidad en cada proyecto que realizamos.</p>
          </ValueCard>
        </Values>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
