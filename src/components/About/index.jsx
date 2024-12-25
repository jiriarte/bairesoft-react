import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Users, Target, Rocket, Award } from 'lucide-react';

const AboutSection = styled.section`
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: 2;
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Subtitle = styled(motion.h3)`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: ${props => props.theme.fontSizes.md};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.base};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.radii.full};
  background: ${props => `${props.theme.colors.primary}10`};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatContent = styled.div``;

const StatNumber = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
  line-height: 1;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.sm};
  margin-top: 0.25rem;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  height: 500px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: 1;
    height: 300px;
  }
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.primary};
  opacity: 0.1;
  border-radius: ${props => props.theme.radii.xl};
  transform: rotate(-3deg);
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${props => props.theme.radii.xl};
`;

const stats = [
  {
    icon: <Users size={20} />,
    number: "500+",
    label: "Clientes Satisfechos"
  },
  {
    icon: <Target size={20} />,
    number: "98%",
    label: "Tasa de Éxito"
  },
  {
    icon: <Rocket size={20} />,
    number: "200+",
    label: "Proyectos Completados"
  },
  {
    icon: <Award size={20} />,
    number: "17+",
    label: "Años de Experiencia"
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <AboutSection id="nosotros" ref={ref}>
      <Container>
        <ContentWrapper>
          <TextContent>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Sobre Nosotros
            </Subtitle>
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transformando Ideas en Soluciones Digitales
            </Title>
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              En Bairesoft, nos especializamos en transformar ideas innovadoras en soluciones digitales efectivas. 
              Con más de 17 años de experiencia, nuestro equipo de expertos combina creatividad y tecnología para 
              impulsar el crecimiento de tu negocio. Nos enorgullece ofrecer soluciones personalizadas que se 
              adaptan perfectamente a las necesidades únicas de cada cliente.
            </Description>

            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <IconWrapper>{stat.icon}</IconWrapper>
                  <StatContent>
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatContent>
                </StatCard>
              ))}
            </StatsGrid>
          </TextContent>

          <ImageContainer>
            <BackgroundShape
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
            />
            <Image
              src="/images/about-image.jpg"
              alt="Equipo Bairesoft"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
            />
          </ImageContainer>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
