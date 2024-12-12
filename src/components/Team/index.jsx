import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const TeamSection = styled.section`
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.xl};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.base};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);

    ${props => props.ImageWrapper} img {
      transform: scale(1.05);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
  }
`;

const MemberContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const MemberName = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const MemberRole = styled.p`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.md};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const MemberBio = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.radii.full};
  background: ${props => props.theme.colors.gray[100]};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const JoinTeam = styled(motion.div)`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: white;
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.base};
`;

const JoinTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const JoinText = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const JoinButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${props => props.theme.radii.full};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const teamMembers = [
  {
    name: "Carlos Rodríguez",
    role: "CEO & Fundador",
    bio: "Con más de 15 años de experiencia en tecnología, Carlos lidera la visión estratégica y el crecimiento de Bairesoft.",
    image: "/images/team/member1.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      email: "mailto:carlos@bairesoft.com"
    }
  },
  {
    name: "Ana Martínez",
    role: "CTO",
    bio: "Experta en arquitectura de software y desarrollo cloud, Ana supervisa todas las decisiones tecnológicas de la empresa.",
    image: "/images/team/member2.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      email: "mailto:ana@bairesoft.com"
    }
  },
  {
    name: "David López",
    role: "Director de Innovación",
    bio: "Especialista en IA y automatización, David lidera nuestras iniciativas de investigación y desarrollo.",
    image: "/images/team/member3.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      email: "mailto:david@bairesoft.com"
    }
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

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <TeamSection id="equipo" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Nuestro Equipo
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Conoce a los expertos detrás de nuestras soluciones tecnológicas
          </Subtitle>
        </Header>

        <TeamGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              variants={itemVariants}
              ImageWrapper={ImageWrapper}
            >
              <ImageWrapper>
                <img src={member.image} alt={member.name} />
              </ImageWrapper>
              <MemberContent>
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                <MemberBio>{member.bio}</MemberBio>
                <SocialLinks>
                  <SocialLink href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </SocialLink>
                  <SocialLink href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter size={20} />
                  </SocialLink>
                  <SocialLink href={member.social.github} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </SocialLink>
                  <SocialLink href={member.social.email}>
                    <Mail size={20} />
                  </SocialLink>
                </SocialLinks>
              </MemberContent>
            </TeamCard>
          ))}
        </TeamGrid>

        <JoinTeam
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <JoinTitle>¿Te gustaría unirte a nuestro equipo?</JoinTitle>
          <JoinText>
            Estamos siempre buscando talento apasionado por la tecnología y la innovación. 
            Descubre las oportunidades disponibles y sé parte de nuestro equipo.
          </JoinText>
          <JoinButton href="/careers">
            Ver Oportunidades
          </JoinButton>
        </JoinTeam>
      </Container>
    </TeamSection>
  );
};

export default Team;
