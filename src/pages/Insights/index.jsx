import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';

const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 1rem 2rem;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 5rem 1rem 2rem;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const InsightCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CardLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const insights = [
  {
    id: 1,
    icon: <FaLightbulb />,
    title: "Innovación Digital",
    description: "Descubre cómo la innovación digital está transformando los negocios y creando nuevas oportunidades de crecimiento.",
    link: "/insights/innovacion-digital"
  },
  {
    id: 2,
    icon: <FaRocket />,
    title: "Transformación Empresarial",
    description: "Estrategias y metodologías para impulsar la transformación digital en tu organización.",
    link: "/insights/transformacion-empresarial"
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "Tendencias Tecnológicas",
    description: "Análisis de las últimas tendencias en tecnología y su impacto en el mundo empresarial.",
    link: "/insights/tendencias-tecnologicas"
  }
];

const Insights = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Container>
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Insights & Perspectivas
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Exploramos las últimas tendencias en tecnología y negocios para ayudarte
            a tomar decisiones informadas en tu viaje de transformación digital.
          </Description>
        </Header>

        <Grid>
          {insights.map((insight, index) => (
            <InsightCard
              key={insight.id}
              onClick={() => navigate(insight.link)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(insight.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <CardIcon>{insight.icon}</CardIcon>
              <CardTitle>{insight.title}</CardTitle>
              <CardDescription>{insight.description}</CardDescription>
              <CardLink>
                <span>Leer más</span>
                <FaArrowRight />
              </CardLink>
            </InsightCard>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default Insights;
