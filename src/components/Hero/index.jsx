import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h1)`
  font-size: clamp(1.75rem, 5.6vw, 3.5rem);
  font-weight: 800;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const AnimatedText = styled(motion.div)`
  font-size: clamp(1.05rem, 2.8vw, 1.4rem);
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
  height: 2.5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(0.77rem, 1.4vw, 0.875rem);
  color: ${props => props.theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Button = styled(motion.a)`
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.gradient};
  color: white;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.gradient};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    &:before {
      opacity: 1;
    }
  }
`;

const GradientBlur = styled(motion.div)`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: ${props => props.theme.colors.gradient};
  filter: blur(100px);
  opacity: 0.15;
  z-index: 0;
`;

const HeroAnimation = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Transformamos ideas en soluciones digitales",
    "Desarrollo de software a medida",
    "Innovación tecnológica para tu negocio",
    "Expertos en desarrollo web y móvil"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSection>
      <HeroAnimation>
        <GradientBlur
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ top: '10%', right: '-20%' }}
        />
        <GradientBlur
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ bottom: '10%', left: '-20%' }}
        />
      </HeroAnimation>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Soluciones Tecnológicas
        </Title>
        <AnimatePresence mode="wait">
          <AnimatedText
            key={textIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {texts[textIndex]}
          </AnimatedText>
        </AnimatePresence>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Desarrollamos soluciones tecnológicas innovadoras para impulsar el crecimiento de tu empresa
        </Subtitle>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button href="#contacto">Contáctanos</Button>
          <Button href="#servicios">Nuestros Servicios</Button>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
