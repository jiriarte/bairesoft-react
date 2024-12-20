import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ScheduleContainer = styled(motion.div)`
  min-height: calc(100vh - 80px);
  padding: calc(80px + 2rem) 2rem 4rem;
  background: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-top: calc(70px + 2rem);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    max-width: 800px;
  }
`;

const InfoSection = styled.div`
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled(motion.div)`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const BenefitsList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const BenefitItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;

  &:before {
    content: "✓";
    color: ${props => props.theme.colors.primary};
    margin-right: 1rem;
    font-weight: bold;
  }
`;

const CalendlyWrapper = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: ${props => props.theme.radii.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};
  height: 700px;
  width: 100%;
`;

const Schedule = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ScheduleContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ContentWrapper>
        <InfoSection>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Agenda tu Consulta Gratuita
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Reserva una sesión personalizada con nuestros expertos para discutir tu proyecto 
            y descubrir cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
          </Description>
          <BenefitsList
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BenefitItem>30 minutos de consultoría gratuita</BenefitItem>
            <BenefitItem>Análisis personalizado de tu proyecto</BenefitItem>
            <BenefitItem>Recomendaciones técnicas específicas</BenefitItem>
            <BenefitItem>Estimación de costos y plazos</BenefitItem>
            <BenefitItem>Sin compromiso</BenefitItem>
          </BenefitsList>
        </InfoSection>
        
        <CalendlyWrapper
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/bairesoft/30min"
            style={{ width: '100%', height: '100%' }}
          />
        </CalendlyWrapper>
      </ContentWrapper>
    </ScheduleContainer>
  );
};

export default Schedule;
