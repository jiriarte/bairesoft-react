import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || 'auto'};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.backgroundLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingSpinner = styled(motion.div)`
  width: 30px;
  height: 30px;
  border: 3px solid ${({ theme }) => theme.colors.backgroundLight};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
`;

const LazyImage = ({ 
  src, 
  alt, 
  height,
  width = '100%',
  className,
  priority = false,
  onLoad: onLoadProp
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imageRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: '50px'
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView || priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setIsLoaded(true);
        if (onLoadProp) onLoadProp();
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 }
        });
      };
    }
  }, [src, isInView, priority, controls, onLoadProp]);

  const spinTransition = {
    loop: Infinity,
    ease: "linear",
    duration: 1
  };

  return (
    <ImageContainer
      ref={imageRef}
      height={height}
      width={width}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      {!isLoaded && (
        <Placeholder>
          <LoadingSpinner
            animate={{ rotate: 360 }}
            transition={spinTransition}
          />
        </Placeholder>
      )}
      {(isInView || priority) && (
        <StyledImage
          src={src}
          alt={alt}
          $isLoaded={isLoaded}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
        />
      )}
    </ImageContainer>
  );
};

export default LazyImage;
