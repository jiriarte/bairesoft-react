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
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.base};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2.5rem;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.6;
  font-size: 1.1rem;
`;

const CalendlyContainer = styled.div`
  width: 100%;
  min-height: 700px;
  border-radius: ${props => props.theme.radii.md};
  overflow: hidden;
`;

const Schedule = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <ScheduleContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContentWrapper>
        <Title>Agenda una Consulta</Title>
        <Description>
          Selecciona el horario que mejor te convenga para discutir tu proyecto.
          Nuestro equipo estará encantado de ayudarte a encontrar la mejor solución para tus necesidades.
        </Description>
        <CalendlyContainer>
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/bairesoft/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </CalendlyContainer>
      </ContentWrapper>
    </ScheduleContainer>
  );
};

export default Schedule;
