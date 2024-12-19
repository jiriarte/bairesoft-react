import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ScheduleContainer = styled(motion.div)`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled.p`
  color: #4a5568;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.6;
`;

const CalendlyContainer = styled.div`
  width: 100%;
  min-height: 700px;
  border-radius: 8px;
  overflow: hidden;
`;

const Schedule = () => {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script cuando el componente se desmonte
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
      <Title>Agenda una Consulta Gratuita</Title>
      <Description>
        Selecciona un horario conveniente para discutir tu proyecto con nuestro equipo. 
        La consulta inicial es gratuita y dura aproximadamente 30 minutos. 
        Durante la llamada, analizaremos tus necesidades y te proporcionaremos 
        recomendaciones específicas para tu proyecto.
      </Description>

      <CalendlyContainer>
        <div 
          className="calendly-inline-widget"
          data-url="https://calendly.com/bairesoft/30min"
          style={{ 
            minWidth: '320px', 
            height: '700px' 
          }}
        />
      </CalendlyContainer>
    </ScheduleContainer>
  );
};

export default Schedule;
