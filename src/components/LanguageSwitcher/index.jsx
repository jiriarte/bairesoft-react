import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SwitcherContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const LanguageButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.textLight};
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Separator = styled.span`
  color: ${props => props.theme.colors.textLight};
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SwitcherContainer>
      <LanguageButton
        isActive={i18n.language === 'en'}
        onClick={() => changeLanguage('en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </LanguageButton>
      <Separator>|</Separator>
      <LanguageButton
        isActive={i18n.language === 'es'}
        onClick={() => changeLanguage('es')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ES
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
