import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Rocket, Shield, Clock } from 'lucide-react';

const CTASection = styled.section`
  padding: 8rem 2rem;
  background: ${props => props.theme.colors.primary};
  position: relative;
  overflow: hidden;
  color: white;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 80%);
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled.div``;

const Title = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

const Description = styled(motion.p)`
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: ${props => props.theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.radii.full};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 0.3s ease;
  font-size: ${props => props.theme.fontSizes.md};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: ${props => props.theme.radii.full};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  border: 2px solid white;
  transition: all 0.3s ease;
  font-size: ${props => props.theme.fontSizes.md};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

const Features = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    text-align: left;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const FeatureText = styled.div``;

const FeatureTitle = styled.h4`
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  opacity: 0.9;
`;

const ImageContent = styled(motion.div)`
  position: relative;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${props => props.theme.radii.xl};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 300px;
  }
`;

const features = [
  {
    icon: <Rocket size={20} />,
    title: "Desarrollo Rápido",
    description: "Implementación ágil y eficiente de soluciones"
  },
  {
    icon: <Shield size={20} />,
    title: "Máxima Seguridad",
    description: "Protección robusta para tus datos y sistemas"
  },
  {
    icon: <Clock size={20} />,
    title: "Soporte 24/7",
    description: "Asistencia técnica disponible en todo momento"
  }
];

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <CTASection ref={ref}>
      <BackgroundShape />
      <Container>
        <Content>
          <TextContent>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Transforma Tu Negocio con Soluciones Digitales
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Potencia tu empresa con nuestras soluciones tecnológicas personalizadas. 
              Desde desarrollo de software hasta implementación de IA, estamos aquí para 
              impulsar tu crecimiento digital.
            </Description>
            <CTAButtons
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PrimaryButton href="/contacto">
                Comienza Ahora
                <ArrowRight size={16} />
              </PrimaryButton>
              <SecondaryButton href="/servicios">
                Conoce Más
                <ArrowRight size={16} />
              </SecondaryButton>
            </CTAButtons>
            <Features
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <IconWrapper>{feature.icon}</IconWrapper>
                  <FeatureText>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureText>
                </FeatureItem>
              ))}
            </Features>
          </TextContent>
          <ImageContent
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img src="/images/cta-image.jpg" alt="Transformación Digital" />
          </ImageContent>
        </Content>
      </Container>
    </CTASection>
  );
};

export default CTA;
