import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { 
  Rocket, 
  Shield, 
  Code2, 
  Smartphone, 
  Users, 
  BarChart, 
  Cloud,
  Zap,
  Globe,
  Clock,
  Award,
  HeartHandshake
} from 'lucide-react';

const FeaturesSection = styled.section`
  padding: 8rem 2rem;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Subtitle = styled(motion.p)`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.lg};
  max-width: 600px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.lg};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.base};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.theme.colors.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};

    &::before {
      transform: scaleX(1);
    }

    .icon-wrapper {
      background: ${props => props.theme.colors.primary};
      color: white;
      transform: rotate(360deg);
    }
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.radii.lg};
  background: ${props => props.theme.colors.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  transition: all 0.5s ease;
  class-name: icon-wrapper;
`;

const FeatureTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 1.6;
`;

const features = [
  {
    icon: <Rocket size={24} />,
    title: "Desarrollo Rápido",
    description: "Metodologías ágiles y herramientas modernas para entregar proyectos en tiempo récord."
  },
  {
    icon: <Shield size={24} />,
    title: "Máxima Seguridad",
    description: "Implementación de las últimas prácticas de seguridad y protección de datos."
  },
  {
    icon: <Code2 size={24} />,
    title: "Código Limpio",
    description: "Desarrollo con los más altos estándares de calidad y mejores prácticas."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Diseño Responsive",
    description: "Interfaces adaptables que funcionan perfectamente en todos los dispositivos."
  },
  {
    icon: <Users size={24} />,
    title: "Soporte Dedicado",
    description: "Equipo de soporte disponible para resolver cualquier incidencia o consulta."
  },
  {
    icon: <BarChart size={24} />,
    title: "Análisis Avanzado",
    description: "Herramientas de análisis y reportes detallados para tomar mejores decisiones."
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Native",
    description: "Aplicaciones diseñadas y optimizadas para la nube desde el primer día."
  },
  {
    icon: <Zap size={24} />,
    title: "Alto Rendimiento",
    description: "Optimización continua para garantizar la máxima velocidad y eficiencia."
  },
  {
    icon: <Globe size={24} />,
    title: "Alcance Global",
    description: "Soluciones preparadas para operar a escala internacional."
  },
  {
    icon: <Clock size={24} />,
    title: "Entrega Puntual",
    description: "Compromiso con los plazos y la calidad en cada proyecto."
  },
  {
    icon: <Award size={24} />,
    title: "Calidad Premium",
    description: "Productos que superan las expectativas y establecen nuevos estándares."
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Satisfacción Total",
    description: "Compromiso con la excelencia y la satisfacción del cliente."
  }
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <FeaturesSection id="features" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Nuestras Características
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Descubre por qué somos la mejor opción para tu próximo proyecto
          </Subtitle>
        </Header>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper className="icon-wrapper">
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
