import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ScheduleContactForm from '../../../components/ScheduleContactForm';

const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const FeatureCard = styled(motion.div)`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;

const features = [
  {
    title: "Soluciones Personalizadas",
    description: "Desarrollamos software adaptado específicamente a tus necesidades y procesos de negocio."
  },
  {
    title: "Tecnología Moderna",
    description: "Utilizamos las últimas tecnologías y mejores prácticas para crear soluciones robustas y escalables."
  },
  {
    title: "Integración Perfecta",
    description: "Aseguramos una integración sin problemas con tus sistemas y herramientas existentes."
  },
  {
    title: "Soporte Continuo",
    description: "Ofrecemos soporte técnico continuo y mantenimiento para garantizar el funcionamiento óptimo."
  },
  {
    title: "Seguridad Garantizada",
    description: "Implementamos las mejores prácticas de seguridad para proteger tus datos y operaciones."
  },
  {
    title: "Escalabilidad",
    description: "Diseñamos soluciones que crecen con tu negocio, adaptándose a tus necesidades futuras."
  }
];

const SoftwareAMedida = () => {
  return (
    <Container>
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Software a Medida</Title>
        <Description>
          Desarrollamos soluciones de software personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.
          Nuestro equipo de expertos trabaja contigo para crear aplicaciones que optimicen tus procesos y mejoren la eficiencia operativa.
        </Description>

        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeatureGrid>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Title>Agenda una Consulta Gratuita</Title>
        <Description>
          ¿Interesado en desarrollar un software a medida para tu negocio? Agenda una consulta gratuita con nuestros expertos para discutir tu proyecto.
        </Description>
        <ScheduleContactForm title="Agenda tu consulta gratuita" />
      </Section>
    </Container>
  );
};

export default SoftwareAMedida;
