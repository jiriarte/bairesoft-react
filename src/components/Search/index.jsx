import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search as SearchLucideIcon,
  File,
  Book,
  MessageCircle,
  ArrowRight,
  X,
  Command
} from 'lucide-react';

const SearchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 10vh;
  z-index: 1000;
`;

const SearchModal = styled(motion.div)`
  background: white;
  width: 100%;
  max-width: 600px;
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  overflow: hidden;
  margin: 0 1rem;
`;

const SearchHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.text};
  background: transparent;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.colors.textLight};
  }
`;

const SearchIconWrapper = styled.div`
  color: ${props => props.theme.colors.textLight};
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.theme.colors.backgroundLight};
  border: none;
  border-radius: ${props => props.theme.radii.md};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.sm};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.backgroundDark};
  }
`;

const ResultsContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: 1rem;
`;

const ResultSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
  padding: 0 0.5rem;
`;

const ResultItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: ${props => props.theme.radii.lg};
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.backgroundLight};

    .arrow {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ResultIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${props => props.theme.radii.md};
  background: ${props => props.theme.colors.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
`;

const ResultInfo = styled.div`
  flex: 1;
`;

const ResultTitle = styled.div`
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: 0.25rem;
`;

const ResultDescription = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
`;

const ResultArrow = styled(ArrowRight)`
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  class-name: arrow;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.colors.textLight};
`;

const Shortcut = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const KeyboardKey = styled.span`
  padding: 0.25rem 0.5rem;
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: ${props => props.theme.radii.sm};
  font-size: ${props => props.theme.fontSizes.sm};
`;

// Datos de ejemplo - En una aplicación real, esto vendría de una API o base de datos
const searchData = {
  pages: [
    {
      id: 1,
      title: "Inicio",
      description: "Página principal de Bairesoft",
      url: "/",
      icon: <File size={16} />
    },
    {
      id: 2,
      title: "Servicios",
      description: "Nuestros servicios de desarrollo",
      url: "/services",
      icon: <File size={16} />
    }
  ],
  docs: [
    {
      id: 1,
      title: "Guía de Inicio",
      description: "Cómo empezar con nuestros servicios",
      url: "/docs/getting-started",
      icon: <Book size={16} />
    },
    {
      id: 2,
      title: "API Reference",
      description: "Documentación técnica de nuestra API",
      url: "/docs/api",
      icon: <Book size={16} />
    }
  ],
  support: [
    {
      id: 1,
      title: "FAQ",
      description: "Preguntas frecuentes",
      url: "/support/faq",
      icon: <MessageCircle size={16} />
    },
    {
      id: 2,
      title: "Contacto",
      description: "Ponte en contacto con nosotros",
      url: "/support/contact",
      icon: <MessageCircle size={16} />
    }
  ]
};

const Search = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchData);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Abrir búsqueda con Cmd/Ctrl + K
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) {
          onClose(true);
        }
      }
      // Cerrar con Esc
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    
    if (!searchQuery.trim()) {
      setResults(searchData);
      return;
    }

    // Filtrar resultados basados en la búsqueda
    const filteredResults = {
      pages: searchData.pages.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
      docs: searchData.docs.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      ),
      support: searchData.support.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    };

    setResults(filteredResults);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <SearchContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <SearchModal
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <SearchHeader>
              <SearchIconWrapper>
                <SearchLucideIcon size={20} />
              </SearchIconWrapper>
              <SearchInput
                ref={inputRef}
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {query && (
                <CloseButton onClick={() => handleSearch('')}>
                  <X size={16} />
                  Limpiar
                </CloseButton>
              )}
              {!query && (
                <Shortcut>
                  <Command size={16} />
                  <KeyboardKey>K</KeyboardKey>
                </Shortcut>
              )}
            </SearchHeader>

            <ResultsContainer>
              {Object.keys(results).some(key => results[key].length > 0) ? (
                <>
                  {results.pages.length > 0 && (
                    <ResultSection>
                      <SectionTitle>Páginas</SectionTitle>
                      {results.pages.map(result => (
                        <ResultItem key={result.id} href={result.url}>
                          <ResultIcon>{result.icon}</ResultIcon>
                          <ResultInfo>
                            <ResultTitle>{result.title}</ResultTitle>
                            <ResultDescription>{result.description}</ResultDescription>
                          </ResultInfo>
                          <ResultArrow size={16} />
                        </ResultItem>
                      ))}
                    </ResultSection>
                  )}

                  {results.docs.length > 0 && (
                    <ResultSection>
                      <SectionTitle>Documentación</SectionTitle>
                      {results.docs.map(result => (
                        <ResultItem key={result.id} href={result.url}>
                          <ResultIcon>{result.icon}</ResultIcon>
                          <ResultInfo>
                            <ResultTitle>{result.title}</ResultTitle>
                            <ResultDescription>{result.description}</ResultDescription>
                          </ResultInfo>
                          <ResultArrow size={16} />
                        </ResultItem>
                      ))}
                    </ResultSection>
                  )}

                  {results.support.length > 0 && (
                    <ResultSection>
                      <SectionTitle>Soporte</SectionTitle>
                      {results.support.map(result => (
                        <ResultItem key={result.id} href={result.url}>
                          <ResultIcon>{result.icon}</ResultIcon>
                          <ResultInfo>
                            <ResultTitle>{result.title}</ResultTitle>
                            <ResultDescription>{result.description}</ResultDescription>
                          </ResultInfo>
                          <ResultArrow size={16} />
                        </ResultItem>
                      ))}
                    </ResultSection>
                  )}
                </>
              ) : (
                <NoResults>
                  No se encontraron resultados para "{query}"
                </NoResults>
              )}
            </ResultsContainer>
          </SearchModal>
        </SearchContainer>
      )}
    </AnimatePresence>
  );
};

export default Search;
