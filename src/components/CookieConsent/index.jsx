import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieContainer = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  color: white;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const CookieContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.primary ? `
    background: ${props.theme.colors.primary};
    color: white;
    
    &:hover {
      background: ${props.theme.colors.primaryDark};
    }
  ` : `
    background: transparent;
    color: white;
    border: 1px solid white;
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  `}
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  useEffect(() => {
    // Comprobar si ya se ha aceptado
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <CookieContainer
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CookieContent>
            <Text>
              Utilizamos cookies propias y de terceros para mejorar nuestros servicios, elaborar información estadística y analizar sus hábitos de navegación. Puede aceptar todas las cookies pulsando el botón "Aceptar todo". También puede configurar o rechazar las cookies pulsando "Configurar". Para más información, consulte nuestra{' '}
              <StyledLink to="/politica-cookies">Política de Cookies</StyledLink> y{' '}
              <StyledLink to="/politica-privacidad">Política de Privacidad</StyledLink>.
            </Text>
            <ButtonGroup>
              <Button onClick={handleAcceptNecessary}>
                Solo necesarias
              </Button>
              <Button primary onClick={handleAcceptAll}>
                Aceptar todo
              </Button>
            </ButtonGroup>
          </CookieContent>
        </CookieContainer>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
