import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const ExperienceSection = styled.div`
  margin: 4rem 0;
  padding: 4rem 0;
  background: ${props => props.theme.colors.card};
  border-radius: 1rem;
`;

const ExperienceTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
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

const BenefitsSection = styled.div`
  margin: 4rem 0;
`;

const BenefitsTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BenefitCard = styled(motion.div)`
  padding: 2rem;
  background: ${props => props.theme.colors.card};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ConsultoriaIT = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Consultoría IT
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desde 2007, hemos estado ayudando a PyMEs y microempresas a optimizar 
            sus procesos tecnológicos y tomar decisiones estratégicas basadas en 
            nuestra amplia experiencia en el sector IT.
          </Description>
        </Header>

        <SolutionsGrid>
          <SolutionCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SolutionTitle>Auditoría Tecnológica</SolutionTitle>
            <SolutionDescription>
              Evaluamos tu infraestructura IT actual para identificar áreas de 
              mejora y optimización de recursos.
            </SolutionDescription>
          </SolutionCard>

          <SolutionCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SolutionTitle>Transformación Digital</SolutionTitle>
            <SolutionDescription>
              Diseñamos e implementamos estrategias de digitalización adaptadas 
              a tu modelo de negocio.
            </SolutionDescription>
          </SolutionCard>

          <SolutionCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SolutionTitle>Seguridad Informática</SolutionTitle>
            <SolutionDescription>
              Protegemos tu negocio con soluciones de ciberseguridad adaptadas 
              a tus necesidades y presupuesto.
            </SolutionDescription>
          </SolutionCard>
        </SolutionsGrid>

        <ExperienceSection>
          <ExperienceTitle>Nuestra Experiencia en Números</ExperienceTitle>
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StatNumber>16+</StatNumber>
              <StatLabel>Años de Experiencia</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StatNumber>500+</StatNumber>
              <StatLabel>Proyectos Completados</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StatNumber>98%</StatNumber>
              <StatLabel>Clientes Satisfechos</StatLabel>
            </StatCard>
          </StatsGrid>
        </ExperienceSection>

        <BenefitsSection>
          <BenefitsTitle>¿Por qué elegirnos?</BenefitsTitle>
          <BenefitsList>
            <BenefitCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SolutionTitle>Experiencia Comprobada</SolutionTitle>
              <SolutionDescription>
                Más de 16 años trabajando con PyMEs nos han dado un profundo 
                entendimiento de sus necesidades y desafíos específicos.
              </SolutionDescription>
            </BenefitCard>

            <BenefitCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SolutionTitle>Soluciones a Medida</SolutionTitle>
              <SolutionDescription>
                Desarrollamos estrategias personalizadas que se adaptan a tu 
                presupuesto y objetivos empresariales.
              </SolutionDescription>
            </BenefitCard>

            <BenefitCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SolutionTitle>Soporte Continuo</SolutionTitle>
              <SolutionDescription>
                Ofrecemos acompañamiento constante y soporte técnico para 
                asegurar el éxito de tu transformación digital.
              </SolutionDescription>
            </BenefitCard>
          </BenefitsList>
        </BenefitsSection>
      </Content>
    </Container>
  );
};

export default ConsultoriaIT;
