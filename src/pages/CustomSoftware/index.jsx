import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ConsultaForm from '../../components/ConsultaForm';

const CustomSoftwareContainer = styled.div`
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

const Section = styled.section`
  margin-bottom: 6rem;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled(motion.div)`
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

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 112, 243, 0.2),
      rgba(121, 40, 202, 0.2)
    );
  }
`;

const TextContent = styled.div`
  h2 {
    font-size: 2.5rem;
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

const FeatureGrid = styled.div`
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

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);

  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 1.5rem;
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

const ProcessSection = styled.div`
  margin-top: 4rem;
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);

  .number {
    font-size: 3rem;
    font-weight: bold;
    margin-right: 2rem;
    background: ${props => props.theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .content {
    h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: ${props => props.theme.colors.text};
    }

    p {
      font-size: 1rem;
      color: ${props => props.theme.colors.textLight};
      line-height: 1.6;
    }
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 6rem;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.textLight};
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background: ${props => props.theme.colors.gradient};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: center;
`;

const CustomSoftware = () => {
  return (
    <CustomSoftwareContainer>
      <ContentWrapper>
        <Header>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Software a Medida con Low Code e IA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Combinamos el poder del desarrollo Low Code y la Inteligencia Artificial
            para crear soluciones empresariales innovadoras y eficientes.
          </motion.p>
        </Header>

        <Section>
          <TwoColumnGrid>
            <TextContent>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                La Revolución del Low Code + IA
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Nuestro enfoque único combina la velocidad y eficiencia del desarrollo
                Low Code con el poder de la Inteligencia Artificial, permitiéndonos
                crear soluciones personalizadas que se adaptan perfectamente a las
                necesidades específicas de tu negocio.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Esta sinergia nos permite reducir significativamente los tiempos de
                desarrollo mientras mantenemos la máxima calidad y flexibilidad en
                nuestras soluciones.
              </motion.p>
            </TextContent>
            <ImageContainer
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800"
                alt="Low Code Development"
              />
            </ImageContainer>
          </TwoColumnGrid>

          <FeatureGrid>
            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3>Desarrollo Rápido</h3>
              <p>Reducimos el tiempo de desarrollo hasta en un 70% mediante plataformas Low Code, permitiendo una implementación más rápida.</p>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3>IA Integrada</h3>
              <p>Incorporamos capacidades de IA para automatización, análisis predictivo y procesamiento inteligente de datos.</p>
            </FeatureCard>

            <FeatureCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" />
              </svg>
              <h3>Personalización Total</h3>
              <p>Adaptamos cada solución a tus necesidades específicas, combinando componentes Low Code con desarrollo personalizado.</p>
            </FeatureCard>
          </FeatureGrid>
        </Section>

        <Section>
          <ProcessSection>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
              Nuestro Proceso
            </h2>

            <ProcessStep
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="number">01</div>
              <div className="content">
                <h4>Análisis y Diseño</h4>
                <p>Estudiamos tus necesidades y diseñamos una solución que combine
                   perfectamente Low Code e IA para maximizar la eficiencia.</p>
              </div>
            </ProcessStep>

            <ProcessStep
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="number">02</div>
              <div className="content">
                <h4>Desarrollo Ágil</h4>
                <p>Utilizamos plataformas Low Code para un desarrollo rápido,
                   integrando módulos de IA para funcionalidades avanzadas.</p>
              </div>
            </ProcessStep>

            <ProcessStep
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="number">03</div>
              <div className="content">
                <h4>Implementación y Optimización</h4>
                <p>Desplegamos la solución y optimizamos su rendimiento,
                   asegurando una integración perfecta con tus sistemas existentes.</p>
              </div>
            </ProcessStep>
          </ProcessSection>
        </Section>

        <Section>
          <SectionTitle>Solicita tu Consulta Gratuita</SectionTitle>
          <SectionDescription>
            Agenda una reunión con nuestros expertos para discutir cómo podemos ayudarte a transformar tu negocio con soluciones de software personalizadas.
          </SectionDescription>
          <ConsultaForm />
        </Section>

        <CTASection>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            ¿Listo para Transformar tu Negocio?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            Descubre cómo nuestra combinación de Low Code e IA puede acelerar
            la transformación digital de tu empresa.
          </motion.p>
          <CTAButton
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Solicitar Consulta Gratuita
          </CTAButton>
        </CTASection>
      </ContentWrapper>
    </CustomSoftwareContainer>
  );
};

export default CustomSoftware;
