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
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: ${props => props.theme.radii.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: ${props => props.theme.transitions.base};
  text-align: center;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    color: white;
    text-decoration: none;
  }
`;

const services = [
  {
    icon: <Code size={24} />,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y responsivos que destacan tu marca y mejoran la experiencia del usuario.",
    link: "/services/desarrollo-web"
  },
  {
    icon: <Smartphone size={24} />,
    title: "Apps Móviles",
    description: "Desarrollamos aplicaciones móviles nativas y multiplataforma con las últimas tecnologías.",
    link: "/services/apps-moviles"
  },
  {
    icon: <Brain size={24} />,
    title: "IA y Machine Learning",
    description: "Implementamos soluciones inteligentes que automatizan procesos y mejoran la toma de decisiones.",
    link: "/services/ia-machine-learning"
  },
  {
    icon: <Cloud size={24} />,
    title: "Cloud Solutions",
    description: "Optimizamos tu infraestructura con soluciones cloud escalables y seguras.",
    link: "/services/cloud-solutions"
  },
  {
    icon: <Cog size={24} />,
    title: "Low-Code",
    description: "Aceleramos el desarrollo con plataformas low-code manteniendo la calidad y flexibilidad.",
    link: "/services/low-code"
  },
  {
    icon: <LineChart size={24} />,
    title: "Consultoría IT",
    description: "Asesoramiento experto para optimizar tus procesos tecnológicos y potenciar tu negocio.",
    link: "/services/consultoria-it"
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
            >
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceButton to={service.link}>
                Ver más
              </ServiceButton>
            </ServiceCard>
          ))}
        </Grid>
      </Container>
    </ServicesSection>
  );
};

export default Services;
