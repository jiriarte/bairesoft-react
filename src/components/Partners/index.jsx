import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const PartnersSection = styled.section`
  padding: 6rem 2rem;
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

const LogosContainer = styled.div`
  margin-bottom: 4rem;

  .swiper {
    padding: 2rem 0;
  }

  .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LogoWrapper = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.base};
  padding: 2rem;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  img {
    max-width: 150px;
    max-height: 60px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};

    img {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.base};
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Quote = styled.blockquote`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: 2rem;
  font-style: italic;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const AuthorImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.radii.full};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.div`
  font-weight: ${props => props.theme.fontWeights.semibold};
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.div`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const partners = [
  {
    name: "TechCorp",
    logo: "/images/partners/partner1.svg"
  },
  {
    name: "InnovaSoft",
    logo: "/images/partners/partner2.svg"
  },
  {
    name: "GlobalTech",
    logo: "/images/partners/partner3.svg"
  },
  {
    name: "DataSys",
    logo: "/images/partners/partner4.svg"
  },
  {
    name: "CloudPro",
    logo: "/images/partners/partner5.svg"
  },
  {
    name: "SmartSolutions",
    logo: "/images/partners/partner6.svg"
  },
  {
    name: "NextGen",
    logo: "/images/partners/partner7.svg"
  },
  {
    name: "FutureTech",
    logo: "/images/partners/partner8.svg"
  }
];

const featuredTestimonial = {
  quote: "Bairesoft ha sido fundamental en nuestra transformación digital. Su equipo no solo entregó soluciones excepcionales, sino que también nos ayudó a comprender y adoptar nuevas tecnologías de manera efectiva.",
  author: {
    name: "María González",
    role: "CTO, TechCorp",
    image: "/images/testimonials/featured.jpg"
  }
};

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <PartnersSection id="partners" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Nuestros Partners
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Colaboramos con empresas líderes para ofrecer las mejores soluciones tecnológicas
          </Subtitle>
        </Header>

        <LogosContainer>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <LogoWrapper
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img src={partner.logo} alt={partner.name} />
                </LogoWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </LogosContainer>

        <TestimonialCard
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Quote>"{featuredTestimonial.quote}"</Quote>
          <Author>
            <AuthorImage>
              <img src={featuredTestimonial.author.image} alt={featuredTestimonial.author.name} />
            </AuthorImage>
            <AuthorInfo>
              <AuthorName>{featuredTestimonial.author.name}</AuthorName>
              <AuthorRole>{featuredTestimonial.author.role}</AuthorRole>
            </AuthorInfo>
          </Author>
        </TestimonialCard>
      </Container>
    </PartnersSection>
  );
};

export default Partners;
