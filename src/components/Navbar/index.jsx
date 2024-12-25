import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Logo';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  padding: 0 2rem;
  background: ${({ theme, scrolled }) => scrolled ? theme.colors.card : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 1rem;
    grid-template-columns: auto auto;
  }
`;

const LogoWrapper = styled.div`
  grid-column: 1;
  display: flex;
  align-items: center;
`;

const NavLinks = styled(motion.div)`
  grid-column: 2;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const MenuButton = styled.button`
  grid-column: 3;
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  padding: 6rem 2rem;
  z-index: 999;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-weight: ${({ active }) => active ? '600' : '400'};
  transition: color 0.3s ease;
  position: relative;
  padding: 0.5rem;
  white-space: nowrap;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transform: scaleX(${({ active }) => active ? 1 : 0});
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { to: '/', text: 'Inicio' },
    { to: '/services', text: 'Servicios' },
    { to: '/projects', text: 'Proyectos' },
    { to: '/insights', text: 'Insights' },
    { to: '/blog', text: 'Blog' },
    { to: '/contact', text: 'Contacto' },
    { to: '/schedule', text: 'Agenda' },
  ];

  return (
    <Nav
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <NavLinks>
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            active={location.pathname === link.to}
          >
            {link.text}
          </NavLink>
        ))}
      </NavLinks>

      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                active={location.pathname === link.to}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </NavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
