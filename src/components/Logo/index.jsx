import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 50px;
  font-weight: bold;
  font-size: 24px;
  color: ${props => props.theme.colors.text};
  position: relative;
  top: 40px;
  z-index: 1001;
`;

const LogoMotion = styled(motion.div)`
  display: contents;
`;

const BracketText = styled.span`
  background: white;
  color: black;
  padding: 2px 8px;
  margin: 0 4px;
`;

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoMotion
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        b<BracketText>[ai]</BracketText>resoft
      </LogoMotion>
    </LogoLink>
  );
};

export default Logo;
