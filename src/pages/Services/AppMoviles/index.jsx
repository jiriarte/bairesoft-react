import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from '../../../components/ContactForm';

const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.theme.colors.card};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text};
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SolutionCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SolutionTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const SolutionDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const PlatformsSection = styled.div`
  margin: 4rem 0;
`;

const PlatformsTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.text};
`;

const PlatformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const PlatformCard = styled(motion.div)`
  padding: 2rem;
  background: ${props => props.theme.colors.card};
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProcessSection = styled.section`
  text-align: center;
`;

const ProcessTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProcessStep = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 auto 1rem;
`;

const ContactSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

const ContactTitle = styled(motion.h2)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const AppMoviles = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Desarrollo de Apps Móviles
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desde 2007, hemos estado creando aplicaciones móviles innovadoras que 
            ayudan a las PyMEs a conectar con sus clientes y optimizar sus operaciones.
          </Description>
        </Header>

        <FeaturesGrid>
          <FeatureCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FeatureTitle>Desarrollo Multiplataforma</FeatureTitle>
            <FeatureDescription>
              Creamos apps que funcionan perfectamente tanto en iOS como en Android, 
              maximizando tu alcance con una única inversión.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FeatureTitle>Experiencia de Usuario</FeatureTitle>
            <FeatureDescription>
              Diseñamos interfaces intuitivas y atractivas que proporcionan una 
              experiencia excepcional a tus usuarios.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeatureTitle>Integración con Backend</FeatureTitle>
            <FeatureDescription>
              Conectamos tu app con sistemas existentes y servicios en la nube 
              para una funcionalidad completa.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>

        <PlatformsSection>
          <PlatformsTitle>Nuestras Soluciones</PlatformsTitle>
          <PlatformsGrid>
            <PlatformCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FeatureTitle>Apps Nativas</FeatureTitle>
              <FeatureDescription>
                Desarrollo específico para iOS y Android con el mejor rendimiento 
                y acceso completo a características del dispositivo.
              </FeatureDescription>
            </PlatformCard>

            <PlatformCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureTitle>Apps Híbridas</FeatureTitle>
              <FeatureDescription>
                Soluciones multiplataforma eficientes usando React Native o Flutter 
                para optimizar costos y tiempo de desarrollo.
              </FeatureDescription>
            </PlatformCard>

            <PlatformCard
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureTitle>PWA</FeatureTitle>
              <FeatureDescription>
                Aplicaciones web progresivas que combinan lo mejor de la web 
                y las apps nativas.
              </FeatureDescription>
            </PlatformCard>
          </PlatformsGrid>
        </PlatformsSection>

        <ContactSection>
          <ContactTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¿Listo para crear tu aplicación móvil?
          </ContactTitle>
          <ContactForm />
        </ContactSection>
      </Content>
    </Container>
  );
};

export default AppMoviles;
