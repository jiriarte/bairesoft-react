import { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Search,
  Book,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  ChevronRight,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const SupportSection = styled.section`
  padding: 8rem 2rem;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Subtitle = styled(motion.p)`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.lg};
  max-width: 600px;
  margin: 0 auto;
`;

const SearchContainer = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto 4rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.25rem 1.25rem 1.25rem 3.5rem;
  border: 2px solid transparent;
  border-radius: ${props => props.theme.radii.full};
  font-size: ${props => props.theme.fontSizes.md};
  box-shadow: ${props => props.theme.shadows.lg};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.textLight};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const CategoryCard = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.lg};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.base};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};

    .icon-wrapper {
      background: ${props => props.theme.colors.primary};
      color: white;
    }

    .arrow {
      transform: translateX(5px);
    }
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.radii.lg};
  background: ${props => props.theme.colors.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  transition: all 0.3s ease;
  class-name: icon-wrapper;
`;

const CategoryTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .arrow {
    transition: transform 0.3s ease;
    class-name: arrow;
  }
`;

const CategoryDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 1.6;
`;

const ResourcesSection = styled.div`
  background: ${props => props.theme.colors.backgroundLight};
  border-radius: ${props => props.theme.radii.xl};
  padding: 3rem;
  margin-bottom: 4rem;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ResourceCard = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: ${props => props.theme.radii.lg};
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.md};

    .external-link {
      opacity: 1;
    }
  }
`;

const ResourceIcon = styled.div`
  color: ${props => props.theme.colors.primary};
`;

const ResourceInfo = styled.div`
  flex: 1;
`;

const ResourceTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin-bottom: 0.25rem;
`;

const ResourceDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textLight};
`;

const ExternalLinkIcon = styled(ExternalLink)`
  opacity: 0;
  transition: opacity 0.3s ease;
  class-name: external-link;
`;

const ContactSection = styled.div`
  text-align: center;
`;

const ContactTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const ContactDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.md};
  margin-bottom: 2rem;
`;

const ContactOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ContactOption = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: white;
  border-radius: ${props => props.theme.radii.full};
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadows.base};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.md};
    color: ${props => props.theme.colors.primary};
  }

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const categories = [
  {
    icon: <Book size={24} />,
    title: "Guías y Tutoriales",
    description: "Aprende a usar nuestros productos con guías paso a paso"
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Soporte Técnico",
    description: "Obtén ayuda técnica de nuestro equipo de expertos"
  },
  {
    icon: <FileText size={24} />,
    title: "Documentación API",
    description: "Documentación detallada de nuestra API y endpoints"
  },
  {
    icon: <Video size={24} />,
    title: "Video Tutoriales",
    description: "Aprende visualmente con nuestros videos explicativos"
  }
];

const resources = [
  {
    icon: <FileText size={20} />,
    title: "Guía de Inicio Rápido",
    description: "Comienza a usar nuestros productos en minutos",
    url: "#"
  },
  {
    icon: <Book size={20} />,
    title: "Documentación Completa",
    description: "Documentación detallada de todas las funcionalidades",
    url: "#"
  },
  {
    icon: <Video size={20} />,
    title: "Video Tutoriales",
    description: "Aprende con nuestros videos paso a paso",
    url: "#"
  },
  {
    icon: <FileText size={20} />,
    title: "API Reference",
    description: "Documentación técnica de nuestra API",
    url: "#"
  }
];

const Support = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SupportSection id="support" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Centro de Ayuda
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Encuentra respuestas a tus preguntas y obtén la ayuda que necesitas
          </Subtitle>
        </Header>

        <SearchContainer
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SearchIcon>
            <Search size={20} />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Buscar en la documentación..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchContainer>

        <Grid>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconWrapper className="icon-wrapper">
                {category.icon}
              </IconWrapper>
              <CategoryTitle>
                {category.title}
                <ChevronRight size={20} className="arrow" />
              </CategoryTitle>
              <CategoryDescription>{category.description}</CategoryDescription>
            </CategoryCard>
          ))}
        </Grid>

        <ResourcesSection>
          <Title
            as="h3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'left', fontSize: '1.75rem' }}
          >
            Recursos Populares
          </Title>
          <ResourcesGrid>
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ResourceIcon>{resource.icon}</ResourceIcon>
                <ResourceInfo>
                  <ResourceTitle>{resource.title}</ResourceTitle>
                  <ResourceDescription>{resource.description}</ResourceDescription>
                </ResourceInfo>
                <ExternalLinkIcon size={16} />
              </ResourceCard>
            ))}
          </ResourcesGrid>
        </ResourcesSection>

        <ContactSection>
          <ContactTitle>¿Necesitas más ayuda?</ContactTitle>
          <ContactDescription>
            Nuestro equipo de soporte está disponible para ayudarte
          </ContactDescription>
          <ContactOptions>
            <ContactOption href="tel:+34900000000">
              <Phone size={20} />
              900 000 000
            </ContactOption>
            <ContactOption href="mailto:soporte@bairesoft.com">
              <Mail size={20} />
              soporte@bairesoft.com
            </ContactOption>
            <ContactOption href="/chat">
              <MessageCircle size={20} />
              Chat en vivo
            </ContactOption>
          </ContactOptions>
        </ContactSection>
      </Container>
    </SupportSection>
  );
};

export default Support;
