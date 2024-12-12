import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroAnimation from '../../components/HeroAnimation';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  padding-top: calc(80px + 4rem); 
  padding-bottom: 4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background: ${props => props.theme.colors.background};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-top: calc(70px + 3rem);
    padding-bottom: 3rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding-top: calc(60px + 2rem);
    padding-bottom: 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 900px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 3.2rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.textLight};
  max-width: 800px;
  margin-bottom: 0.5rem;
  line-height: 1.6;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transformando Ideas en Soluciones Digitales
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Combinamos la potencia de la Inteligencia Artificial y el desarrollo Low Code
          para crear soluciones innovadoras que impulsan el futuro de tu negocio.
        </Subtitle>
        <HeroAnimation />
      </HeroSection>
    </HomeContainer>
  );
};

export default Home;
