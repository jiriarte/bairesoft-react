import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from '../../../components/ContactForm';
import ScheduleContactForm from '../../../components/ScheduleContactForm';

const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const BenefitCard = styled(motion.div)`
  background: ${props => props.theme.colors.card};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const BenefitDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SolutionCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SolutionTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const SolutionDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const PlatformsSection = styled.div`
  margin: 4rem 0;
`;

const PlatformsTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
`;

const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const PlatformCard = styled(motion.div)`
  padding: 2rem;
  background: ${props => props.theme.colors.card};
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProcessSection = styled.section`
  text-align: center;
`;

const ProcessTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProcessStep = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 auto 1rem;
`;

const StatsSection = styled.div`
  margin: 4rem 0;
  padding: 4rem 0;
  background: ${props => props.theme.colors.card};
  border-radius: 1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const StatCard = styled(motion.div)`
  padding: 1rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.textLight};
`;

const ContactSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const Section = styled.div`
  margin: 4rem 0;
`;

const LowCode = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Soluciones Low Code
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desde 2007, hemos estado ayudando a PyMEs y microempresas a digitalizar 
            sus procesos de manera rápida y eficiente mediante plataformas Low Code, 
            reduciendo tiempos y costos de desarrollo.
          </Description>
        </Header>

        <BenefitsGrid>
          <BenefitCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BenefitTitle>Desarrollo Rápido</BenefitTitle>
            <BenefitDescription>
              Reduce el tiempo de desarrollo hasta en un 80% comparado con 
              la programación tradicional.
            </BenefitDescription>
          </BenefitCard>

          <BenefitCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BenefitTitle>Costos Reducidos</BenefitTitle>
            <BenefitDescription>
              Optimiza tu inversión con soluciones que requieren menos recursos 
              y mantenimiento.
            </BenefitDescription>
          </BenefitCard>

          <BenefitCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BenefitTitle>Alta Flexibilidad</BenefitTitle>
            <BenefitDescription>
              Adapta y modifica tus aplicaciones fácilmente según evolucionen 
              las necesidades de tu negocio.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>

        <PlatformsSection>
          <PlatformsTitle>Plataformas que Utilizamos</PlatformsTitle>
          <PlatformsGrid>
            <PlatformCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BenefitTitle>Microsoft Power Platform</BenefitTitle>
              <BenefitDescription>
                Power Apps, Power Automate y Power BI para crear soluciones 
                empresariales completas.
              </BenefitDescription>
            </PlatformCard>

            <PlatformCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <BenefitTitle>OutSystems</BenefitTitle>
              <BenefitDescription>
                Desarrollo rápido de aplicaciones empresariales escalables 
                y seguras.
              </BenefitDescription>
            </PlatformCard>

            <PlatformCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BenefitTitle>Mendix</BenefitTitle>
              <BenefitDescription>
                Plataforma líder para el desarrollo de aplicaciones empresariales 
                de alta calidad.
              </BenefitDescription>
            </PlatformCard>
          </PlatformsGrid>
        </PlatformsSection>

        <StatsSection>
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StatNumber>70%</StatNumber>
              <StatLabel>Reducción en Tiempo de Desarrollo</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StatNumber>60%</StatNumber>
              <StatLabel>Ahorro en Costos</StatLabel>
            </StatCard>

            <StatCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StatNumber>100+</StatNumber>
              <StatLabel>Proyectos Entregados</StatLabel>
            </StatCard>
          </StatsGrid>
        </StatsSection>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Title>Agenda una Consulta Gratuita</Title>
          <Description>
            ¿Interesado en desarrollar aplicaciones con plataformas Low-Code? Agenda una consulta gratuita con nuestros expertos.
          </Description>
          <ScheduleContactForm title="Agenda tu consulta gratuita" />
        </Section>

        <ContactSection>
          <ContactTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¿Listo para acelerar tu desarrollo con Low-Code?
          </ContactTitle>
          <ContactForm />
        </ContactSection>
      </Content>
    </Container>
  );
};

export default LowCode;
