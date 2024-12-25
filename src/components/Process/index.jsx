import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { 
  Lightbulb, 
  Search, 
  PenTool, 
  Code2, 
  TestTube, 
  Rocket 
} from 'lucide-react';

const ProcessSection = styled.section`
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

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${props => `${props.theme.colors.primary}20`};
    z-index: 0;

    @media (max-width: 991px) {
      display: none;
    }
  }
`;

const ProcessCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.base};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;
  transition: transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: inherit;
    background: ${props => `${props.theme.colors.primary}20`};
    z-index: -1;
  }

  svg {
    width: 35px;
    height: 35px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  background: white;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const ProcessTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const ProcessDescription = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const processes = [
  {
    icon: <Lightbulb />,
    title: "Descubrimiento",
    description: "Analizamos tus necesidades y objetivos para entender completamente tu visión del proyecto.",
    step: 1
  },
  {
    icon: <Search />,
    title: "Investigación",
    description: "Investigamos el mercado y las mejores soluciones tecnológicas para tu proyecto específico.",
    step: 2
  },
  {
    icon: <PenTool />,
    title: "Diseño",
    description: "Creamos diseños intuitivos y atractivos que mejoran la experiencia del usuario.",
    step: 3
  },
  {
    icon: <Code2 />,
    title: "Desarrollo",
    description: "Implementamos tu solución utilizando las últimas tecnologías y mejores prácticas.",
    step: 4
  },
  {
    icon: <TestTube />,
    title: "Pruebas",
    description: "Realizamos pruebas exhaustivas para garantizar la calidad y el rendimiento óptimo.",
    step: 5
  },
  {
    icon: <Rocket />,
    title: "Lanzamiento",
    description: "Desplegamos tu solución y proporcionamos soporte continuo para su éxito.",
    step: 6
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <ProcessSection id="proceso" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Nuestro Proceso
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Un enfoque sistemático y eficiente para convertir tus ideas en realidad
          </Subtitle>
        </Header>

        <ProcessGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              variants={itemVariants}
            >
              <IconWrapper>
                {process.icon}
                <StepNumber>{process.step}</StepNumber>
              </IconWrapper>
              <ProcessTitle>{process.title}</ProcessTitle>
              <ProcessDescription>{process.description}</ProcessDescription>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </Container>
    </ProcessSection>
  );
};

export default Process;
