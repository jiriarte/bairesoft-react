import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.background};
  padding: 5rem 2rem 2rem;
  color: ${props => props.theme.colors.text};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  background: ${props => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>
          <FooterText>
            Desarrollamos soluciones tecnológicas innovadoras para impulsar el crecimiento de tu empresa.
          </FooterText>
          <SocialLinks>
            <SocialIcon 
              href="https://linkedin.com" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </SocialIcon>
            <SocialIcon 
              href="https://twitter.com" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Twitter
            </SocialIcon>
            <SocialIcon 
              href="https://instagram.com" 
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Instagram
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Servicios</FooterTitle>
          <FooterLink to="/services/desarrollo-web">Desarrollo Web</FooterLink>
          <FooterLink to="/services/aplicaciones-web">Aplicaciones Web</FooterLink>
          <FooterLink to="/services/apps-moviles">Apps Móviles</FooterLink>
          <FooterLink to="/services/low-code">Soluciones Low-Code</FooterLink>
          <FooterLink to="/services/ia-machine-learning">IA y Machine Learning</FooterLink>
          <FooterLink to="/services/consultoria-it">Consultoría IT</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Empresa</FooterTitle>
          <FooterLink to="/">Inicio</FooterLink>
          <FooterLink to="/projects">Proyectos</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/contact">Contacto</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contacto</FooterTitle>
          <FooterText>Teléfono: +34 611 649 151</FooterText>
          <FooterText>Dirección: Almansa, 02640, Albacete, España</FooterText>
          <FooterText>WhatsApp: <ExternalLink href="https://wa.me/34611649151" target="_blank" rel="noopener noreferrer">Contactar por WhatsApp</ExternalLink></FooterText>
        </FooterColumn>
      </FooterContent>

      <BottomBar>
        <Copyright>
          {new Date().getFullYear()} Bairesoft. Todos los derechos reservados.
        </Copyright>
        <div>
          <FooterLink to="/politica-privacidad" style={{ marginRight: '1.5rem' }}>
            Política de Privacidad
          </FooterLink>
          <FooterLink to="/politica-cookies" style={{ marginRight: '1.5rem' }}>
            Política de Cookies
          </FooterLink>
          <FooterLink to="/terminos-servicio">
            Términos y Condiciones
          </FooterLink>
        </div>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
