import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaChartLine, FaBrain, FaCloud, FaShieldAlt } from 'react-icons/fa';
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

const TendenciasTecnologicas = () => {
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
            <FaChartLine />
          </Icon>
          <Title>Tendencias Tecnológicas</Title>
          <Subtitle>
            Las tecnologías que están definiendo el futuro empresarial
          </Subtitle>
        </Header>

        <MainContent>
          <Section>
            <h2>Tendencias Tecnológicas 2024</h2>
            <p>
              El panorama tecnológico está en constante evolución, con innovaciones
              que están transformando la manera en que las empresas operan y compiten.
              Aquí analizamos las tendencias más significativas que están moldeando
              el futuro empresarial.
            </p>
          </Section>

          <Section>
            <h2>Inteligencia Artificial y Machine Learning</h2>
            <h3>1. IA Generativa</h3>
            <p>
              La IA generativa está revolucionando múltiples sectores:
            </p>
            <ul>
              <li>Creación de contenido automatizado</li>
              <li>Diseño y desarrollo de productos</li>
              <li>Optimización de procesos creativos</li>
              <li>Personalización a escala</li>
            </ul>

            <h3>2. Machine Learning Avanzado</h3>
            <ul>
              <li>Automatización inteligente de procesos</li>
              <li>Análisis predictivo mejorado</li>
              <li>Sistemas de recomendación personalizados</li>
              <li>Mantenimiento predictivo</li>
            </ul>
          </Section>

          <Section>
            <h2>Cloud Computing y Edge Computing</h2>
            <p>
              La evolución de la computación en la nube continúa:
            </p>
            <ul>
              <li>Multi-cloud y cloud híbrido</li>
              <li>Serverless computing</li>
              <li>Edge computing para IoT</li>
              <li>Optimización de costos en la nube</li>
            </ul>
          </Section>

          <Section>
            <h2>Ciberseguridad y Privacidad</h2>
            <p>
              Prioridades en seguridad digital:
            </p>
            <ul>
              <li>Zero Trust Security</li>
              <li>Seguridad en la nube</li>
              <li>Protección contra ransomware</li>
              <li>Privacidad por diseño</li>
              <li>Autenticación biométrica</li>
            </ul>
          </Section>

          <Section>
            <h2>Internet de las Cosas (IoT)</h2>
            <p>
              El IoT sigue expandiéndose con:
            </p>
            <ul>
              <li>IoT industrial (IIoT)</li>
              <li>Ciudades inteligentes</li>
              <li>Wearables empresariales</li>
              <li>Gestión de activos conectados</li>
            </ul>
          </Section>

          <Section>
            <h2>Blockchain y Web3</h2>
            <p>
              Aplicaciones empresariales de blockchain:
            </p>
            <ul>
              <li>Contratos inteligentes</li>
              <li>Trazabilidad en cadena de suministro</li>
              <li>Tokenización de activos</li>
              <li>Identidad digital descentralizada</li>
            </ul>
          </Section>

          <Section>
            <h2>Impacto en los Negocios</h2>
            <p>
              Estas tendencias están generando:
            </p>
            <ul>
              <li>Nuevos modelos de negocio</li>
              <li>Mayor eficiencia operativa</li>
              <li>Mejora en la experiencia del cliente</li>
              <li>Ventajas competitivas sostenibles</li>
              <li>Oportunidades de innovación</li>
            </ul>
          </Section>
        </MainContent>
      </Content>
    </Container>
  );
};

export default TendenciasTecnologicas;
