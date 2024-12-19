import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Code, Brain, Cog, Cloud, LineChart, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: white;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.base};
  transition: ${props => props.theme.transitions.base};
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.theme.colors.primary};
    opacity: 0;
    z-index: -1;
    transition: ${props => props.theme.transitions.base};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
    color: white;

    &:before {
      opacity: 1;
    }

    ${props => props.IconWrapper} {
      background: white;
      color: ${props => props.theme.colors.primary};
    }

    ${props => props.ServiceTitle}, ${props => props.ServiceDescription} {
      color: white;
    }
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.radii.lg};
  background: ${props => `${props.theme.colors.primary}10`};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: ${props => props.theme.transitions.base};
`;

const ServiceTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  transition: ${props => props.theme.transitions.base};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  transition: ${props => props.theme.transitions.base};
`;

const ServiceButton = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: ${props => props.theme.radii.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: ${props => props.theme.transitions.base};

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const services = [
  {
    icon: <Code size={24} />,
    title: "Desarrollo Low Code",
    description: "Creamos soluciones empresariales eficientes utilizando plataformas Low Code para acelerar el desarrollo y reducir costos."
  },
  {
    icon: <Brain size={24} />,
    title: "Inteligencia Artificial",
    description: "Implementamos soluciones de IA para automatizar procesos y obtener insights valiosos de tus datos empresariales."
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Computing",
    description: "Diseñamos e implementamos arquitecturas cloud escalables y seguras para tu negocio."
  },
  {
    icon: <Cog size={24} />,
    title: "Automatización",
    description: "Optimizamos tus procesos empresariales mediante la automatización inteligente de tareas repetitivas."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Desarrollo Móvil",
    description: "Desarrollamos aplicaciones móviles nativas y multiplataforma con las últimas tecnologías."
  },
  {
    icon: <LineChart size={24} />,
    title: "Analítica de Datos",
    description: "Transformamos tus datos en información accionable para la toma de decisiones estratégicas."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ServicesSection id="servicios" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Nuestros Servicios
          </Title>
        </Header>

        <Grid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              variants={cardVariants}
              IconWrapper={IconWrapper}
              ServiceTitle={ServiceTitle}
              ServiceDescription={ServiceDescription}
            >
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceButton to="/schedule">Contactar Ahora</ServiceButton>
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
