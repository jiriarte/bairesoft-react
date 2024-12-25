import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Star, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection = styled.section`
  padding: 8rem 2rem;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }

  .swiper {
    padding: 3rem 1rem;
  }

  .swiper-pagination-bullet {
    background: ${props => props.theme.colors.primary};
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${props => props.theme.colors.primary};
    
    &:after {
      font-size: 1.5rem;
    }
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

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.base};
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -1rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border-radius: ${props => props.theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows.md};
`;

const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const StarIcon = styled.span`
  color: ${props => props.filled ? props.theme.colors.warning : props.theme.colors.gray[300]};
`;

const TestimonialText = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.8;
  margin-bottom: 2rem;
  flex: 1;
  font-style: italic;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${props => props.theme.radii.full};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.semibold};
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const testimonials = [
  {
    text: "Bairesoft transformó por completo nuestros procesos empresariales. Su solución de IA no solo mejoró nuestra eficiencia, sino que también nos proporcionó insights valiosos que nos ayudaron a tomar mejores decisiones.",
    author: "María González",
    role: "CEO, TechCorp",
    image: "/images/testimonials/testimonial1.jpg",
    rating: 5
  },
  {
    text: "El equipo de Bairesoft demostró un nivel excepcional de profesionalismo y experiencia técnica. Su enfoque en el desarrollo Low Code nos permitió lanzar nuestra aplicación en tiempo récord.",
    author: "Carlos Rodríguez",
    role: "CTO, InnovaSoft",
    image: "/images/testimonials/testimonial2.jpg",
    rating: 5
  },
  {
    text: "La migración a la nube fue perfecta gracias a Bairesoft. Su equipo gestionó todo el proceso de manera eficiente y nos proporcionó una solución escalable que se adapta a nuestras necesidades.",
    author: "Ana Martínez",
    role: "Directora de IT, GlobalTech",
    image: "/images/testimonials/testimonial3.jpg",
    rating: 5
  },
  {
    text: "La automatización implementada por Bairesoft ha revolucionado nuestra forma de trabajar. Ahora podemos centrarnos en tareas estratégicas mientras los procesos rutinarios se ejecutan automáticamente.",
    author: "Pedro Sánchez",
    role: "COO, AutomatePro",
    image: "/images/testimonials/testimonial4.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <TestimonialsSection id="testimonios" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Lo Que Dicen Nuestros Clientes
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Descubre por qué las empresas confían en nosotros para sus soluciones tecnológicas
          </Subtitle>
        </Header>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <QuoteIcon>
                  <Quote size={24} />
                </QuoteIcon>
                <Rating>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating}>
                      <Star size={16} fill={i < testimonial.rating ? "currentColor" : "none"} />
                    </StarIcon>
                  ))}
                </Rating>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <AuthorSection>
                  <AuthorImage>
                    <img src={testimonial.image} alt={testimonial.author} />
                  </AuthorImage>
                  <AuthorInfo>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorRole>{testimonial.role}</AuthorRole>
                  </AuthorInfo>
                </AuthorSection>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
