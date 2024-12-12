import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const Nav = styled(motion.nav)`
  width: 100%;
  padding: 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  position: relative;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.gradient};
    transition: width 0.3s ease;
  }
  
  &:hover {
    &:after {
      width: 100%;
    }
  }
`;

const ContactButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background: ${props => props.theme.colors.gradient};
  color: white;
  border-radius: 9999px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  text-decoration: none;

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

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.95);
  padding: 6rem 2rem;
  z-index: 1000;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/about', label: 'Nosotros' },
    { path: '/services', label: 'Servicios' },
    { path: '/custom-software', label: 'Software a Medida' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      isScrolled={isScrolled}
    >
      <NavContainer>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo />
        </Link>
        <NavLinks>
          {menuItems.map((item, index) => (
            <NavLink key={index} to={item.path}>{item.label}</NavLink>
          ))}
        </NavLinks>
        <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </MenuButton>
      </NavContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {menuItems.map((item, index) => (
              <NavLink key={index} to={item.path} onClick={() => setIsMobileMenuOpen(false)}>{item.label}</NavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
