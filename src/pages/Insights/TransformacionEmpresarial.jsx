import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaRocket, FaCogs, FaUsers, FaChartLine } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 1rem 2rem;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 5rem 1rem 2rem;
  }
`;

const Content = styled(motion.article)`
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.header`
  position: relative;
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
`;

const BackButton = styled(motion.button)`
  position: fixed;
  top: 100px;
  left: 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;

  svg {
    font-size: 2.5rem;
    color: white;
  }
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const MainContent = styled.div`
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const TransformacionEmpresarial = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton
        onClick={() => navigate('/insights')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowLeft />
      </BackButton>

      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <Header>
          <Icon>
            <FaRocket />
          </Icon>
          <Title>Transformación Empresarial</Title>
          <Subtitle>
            Guía estratégica para la evolución digital de tu organización
          </Subtitle>
        </Header>

        <MainContent>
          <Section>
            <h2>El Camino hacia la Transformación Digital</h2>
            <p>
              La transformación empresarial en la era digital va más allá de la simple
              adopción de tecnología. Es un proceso holístico que implica repensar
              modelos de negocio, procesos y cultura organizacional para crear valor
              en un mundo digital.
            </p>
          </Section>

          <Section>
            <h2>Pilares de la Transformación Empresarial</h2>
            
            <h3>1. Cultura y Personas</h3>
            <p>
              La transformación comienza con las personas. Es fundamental crear una
              cultura que:
            </p>
            <ul>
              <li>Fomente la innovación y el aprendizaje continuo</li>
              <li>Promueva la colaboración interdepartamental</li>
              <li>Desarrolle habilidades digitales en todos los niveles</li>
              <li>Impulse el liderazgo transformacional</li>
            </ul>

            <h3>2. Procesos y Operaciones</h3>
            <p>
              La optimización y digitalización de procesos es clave para:
            </p>
            <ul>
              <li>Aumentar la eficiencia operativa</li>
              <li>Reducir costos y tiempos de ciclo</li>
              <li>Mejorar la calidad y consistencia</li>
              <li>Facilitar la toma de decisiones basada en datos</li>
            </ul>

            <h3>3. Tecnología e Infraestructura</h3>
            <p>
              La base tecnológica debe ser:
            </p>
            <ul>
              <li>Escalable y flexible</li>
              <li>Segura y confiable</li>
              <li>Integrada y conectada</li>
              <li>Orientada a la nube</li>
            </ul>
          </Section>

          <Section>
            <h2>Metodología de Transformación</h2>
            <p>
              Un enfoque estructurado para la transformación incluye:
            </p>
            <ul>
              <li>Evaluación de madurez digital</li>
              <li>Definición de visión y estrategia</li>
              <li>Diseño de hoja de ruta</li>
              <li>Implementación por fases</li>
              <li>Medición y optimización continua</li>
            </ul>
          </Section>

          <Section>
            <h2>Factores Críticos de Éxito</h2>
            <ul>
              <li>Compromiso del liderazgo ejecutivo</li>
              <li>Comunicación clara y constante</li>
              <li>Gestión del cambio efectiva</li>
              <li>Enfoque en resultados medibles</li>
              <li>Agilidad y adaptabilidad</li>
            </ul>
          </Section>

          <Section>
            <h2>Beneficios de la Transformación</h2>
            <ul>
              <li>Mayor competitividad en el mercado</li>
              <li>Mejora en la experiencia del cliente</li>
              <li>Aumento de la productividad</li>
              <li>Reducción de costos operativos</li>
              <li>Nuevas oportunidades de negocio</li>
              <li>Mayor capacidad de innovación</li>
            </ul>
          </Section>
        </MainContent>
      </Content>
    </Container>
  );
};

export default TransformacionEmpresarial;
