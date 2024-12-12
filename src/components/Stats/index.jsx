import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Users, Award, Briefcase, Globe } from 'lucide-react';

const StatsSection = styled.section`
  padding: 6rem 2rem;
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
  clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    gap: 2rem;
  }
`;

const StatCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${props => props.theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  svg {
    width: 35px;
    height: 35px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const StatNumber = styled(motion.div)`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 1;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  opacity: 0.9;
`;

const stats = [
  {
    icon: <Users />,
    number: 500,
    label: "Clientes Satisfechos",
    suffix: "+"
  },
  {
    icon: <Award />,
    number: 15,
    label: "Años de Experiencia",
    suffix: "+"
  },
  {
    icon: <Briefcase />,
    number: 200,
    label: "Proyectos Completados",
    suffix: "+"
  },
  {
    icon: <Globe />,
    number: 10,
    label: "Países",
    suffix: "+"
  }
];

const useCounter = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(progress * (end - start) + start));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(animationFrame);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, start, isAnimating]);

  return [count, setIsAnimating];
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
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

  return (
    <StatsSection ref={ref}>
      <BackgroundShape />
      <Container>
        <StatsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => {
            const [count, setIsAnimating] = useCounter(stat.number);

            useEffect(() => {
              if (isInView) {
                setIsAnimating(true);
              }
            }, [isInView, setIsAnimating]);

            return (
              <StatCard key={index} variants={itemVariants}>
                <IconWrapper>{stat.icon}</IconWrapper>
                <StatNumber>
                  {count}{stat.suffix}
                </StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            );
          })}
        </StatsGrid>
      </Container>
    </StatsSection>
  );
};

export default Stats;
