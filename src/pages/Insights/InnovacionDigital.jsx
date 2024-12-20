import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaLightbulb, FaRocket, FaCode, FaChartLine } from 'react-icons/fa';
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

const InnovacionDigital = () => {
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
            <FaLightbulb />
          </Icon>
          <Title>Innovación Digital</Title>
          <Subtitle>
            Transformando el futuro de los negocios a través de la tecnología
          </Subtitle>
        </Header>

        <MainContent>
          <Section>
            <h2>El Poder de la Innovación Digital</h2>
            <p>
              La innovación digital está redefiniendo la forma en que las empresas operan,
              compiten y crean valor. En un mundo cada vez más conectado, la capacidad de
              adaptarse y evolucionar digitalmente no es solo una ventaja competitiva,
              sino una necesidad para la supervivencia empresarial.
            </p>
          </Section>

          <Section>
            <h2>Pilares de la Transformación Digital</h2>
            <h3>1. Cultura de Innovación</h3>
            <p>
              Crear una cultura que fomente la experimentación, el aprendizaje continuo
              y la adaptación al cambio es fundamental para el éxito de cualquier
              iniciativa de transformación digital.
            </p>

            <h3>2. Tecnologías Emergentes</h3>
            <p>
              La adopción estratégica de tecnologías como la IA, blockchain, y cloud
              computing puede impulsar la eficiencia operativa y crear nuevas
              oportunidades de negocio.
            </p>

            <h3>3. Experiencia del Cliente</h3>
            <p>
              La digitalización permite crear experiencias personalizadas y sin
              fricciones que mejoran la satisfacción del cliente y fomentan la
              lealtad a la marca.
            </p>
          </Section>

          <Section>
            <h2>Beneficios Clave</h2>
            <ul>
              <li>Mayor eficiencia operativa y reducción de costos</li>
              <li>Mejora en la toma de decisiones basada en datos</li>
              <li>Aumento de la agilidad empresarial</li>
              <li>Mejor experiencia del cliente</li>
              <li>Nuevas fuentes de ingresos</li>
            </ul>
          </Section>

          <Section>
            <h2>Implementando la Innovación Digital</h2>
            <p>
              La implementación exitosa de la innovación digital requiere un enfoque
              estratégico que considere:
            </p>
            <ul>
              <li>Evaluación de la madurez digital actual</li>
              <li>Identificación de oportunidades de mejora</li>
              <li>Desarrollo de una hoja de ruta clara</li>
              <li>Inversión en capacitación y desarrollo de talento</li>
              <li>Medición y optimización continua</li>
            </ul>
          </Section>
        </MainContent>
      </Content>
    </Container>
  );
};

export default InnovacionDigital;
