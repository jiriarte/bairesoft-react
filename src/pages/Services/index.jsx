import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const ServicesContainer = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion(Link))`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  text-decoration: none;
  display: block;

  &:hover {
    transform: translateY(-5px);
  }

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
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      color: ${props => props.theme.colors.textLight};
      font-size: 0.9rem;

      &:before {
        content: "•";
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text};
  }

  p {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textLight};
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

const Services = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos y responsivos que destacan tu marca.",
      features: [
        "Diseño personalizado",
        "Optimización SEO",
        "Integración con CMS",
        "Responsive Design"
      ],
      path: "/services/desarrollo-web"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Aplicaciones Web",
      description: "Desarrollamos aplicaciones web robustas y escalables.",
      features: [
        "Arquitectura moderna",
        "APIs RESTful",
        "Base de datos optimizada",
        "Seguridad avanzada"
      ],
      path: "/services/aplicaciones-web"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Apps Móviles",
      description: "Creamos aplicaciones móviles nativas y multiplataforma.",
      features: [
        "iOS y Android",
        "UI/UX intuitivo",
        "Rendimiento optimizado",
        "Integración con APIs"
      ],
      path: "/services/apps-moviles"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Soluciones Low-Code",
      description: "Desarrollamos soluciones empresariales eficientes con plataformas low-code.",
      features: [
        "Desarrollo rápido",
        "Costos reducidos",
        "Fácil mantenimiento",
        "Escalabilidad"
      ],
      path: "/services/low-code"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "IA y Machine Learning",
      description: "Implementamos soluciones inteligentes para tu negocio.",
      features: [
        "Análisis predictivo",
        "Procesamiento de datos",
        "Automatización",
        "Chatbots IA"
      ],
      path: "/services/ia-machine-learning"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Consultoría IT",
      description: "Asesoramiento experto para optimizar tus procesos tecnológicos.",
      features: [
        "Análisis de sistemas",
        "Optimización de procesos",
        "Estrategia digital",
        "Seguridad IT"
      ],
      path: "/services/consultoria-it"
    }
  ];

  const navigate = useNavigate();

  return (
    <ServicesContainer>
      <ContentWrapper>
        <Header>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio
            hacia el futuro digital.
          </motion.p>
        </Header>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              to={service.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <CTASection>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¿Listo para empezar tu proyecto?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Agenda una consulta gratuita con nuestros expertos para discutir tu proyecto y encontrar la mejor solución.
          </motion.p>
          <CTAButton
            as={Link}
            to="/schedule"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Consulta Gratuita
          </CTAButton>
        </CTASection>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default Services;
