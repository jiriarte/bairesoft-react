import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const AnimationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 490px;
  overflow: visible;
  background: ${props => props.theme.colors.background};
  padding: 2rem 0;
  margin-bottom: 4rem;
  margin-top: 80px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 420px;
    margin-top: 70px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 350px;
    margin-top: 60px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 70%;
  max-width: 840px;
  height: 490px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: 420px;
    width: 80%;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 350px;
    width: 90%;
  }
`;

const ImageCard = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 6rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 0 4rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 2rem;
  }
`;

const Title = styled.h3`
  color: white;
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
  max-width: 800px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.4rem;
  margin: 0;
  max-width: 700px;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.1rem;
    line-height: 1.4;
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`;

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    background: white;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  ${props => props.left ? 'left: 2rem;' : 'right: 2rem;'}

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    ${props => props.left ? 'left: 1rem;' : 'right: 1rem;'}
    width: 40px;
    height: 40px;
  }
`;

const images = [
  {
    src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    title: 'Desarrollo Low Code',
    description: 'Creamos soluciones empresariales eficientes y escalables con las últimas tecnologías low-code.'
  },
  {
    src: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9',
    title: 'Inteligencia Artificial',
    description: 'Implementamos soluciones de IA que transforman datos en decisiones inteligentes.'
  },
  {
    src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    title: 'Machine Learning',
    description: 'Desarrollamos modelos predictivos que optimizan tus procesos de negocio.'
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
    title: 'Plataformas No-Code',
    description: 'Acelera el desarrollo de aplicaciones con nuestras soluciones no-code.'
  },
  {
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    title: 'Automatización Inteligente',
    description: 'Optimiza tus operaciones con nuestras soluciones de automatización avanzada.'
  },
  {
    src: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    title: 'Soluciones Empresariales',
    description: 'Transformamos tu negocio con tecnología de vanguardia y soluciones personalizadas.'
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const HeroAnimation = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [autoPlay, setAutoPlay] = useState(true);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [page, autoPlay]);

  return (
    <AnimationContainer>
      <CarouselContainer
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <AnimatePresence initial={false} custom={direction}>
          <ImageCard
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <Image 
              src={`${images[imageIndex].src}?auto=format&fit=crop&w=1920&q=80&h=1080`} 
              alt={images[imageIndex].title}
            />
            <Overlay>
              <Title>{images[imageIndex].title}</Title>
              <Description>{images[imageIndex].description}</Description>
            </Overlay>
          </ImageCard>
        </AnimatePresence>

        <NavButton left onClick={() => paginate(-1)}>
          ←
        </NavButton>
        <NavButton onClick={() => paginate(1)}>
          →
        </NavButton>

        <Dots>
          {images.map((_, index) => (
            <Dot 
              key={index}
              active={index === imageIndex}
              onClick={() => setPage([index, index - imageIndex])}
            />
          ))}
        </Dots>
      </CarouselContainer>
    </AnimationContainer>
  );
};

export default HeroAnimation;
