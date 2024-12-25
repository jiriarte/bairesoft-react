import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const TechStackSection = styled.section`
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

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TechCategory = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.base};
`;

const CategoryTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const TechList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const TechName = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const technologies = {
  frontend: {
    title: "Frontend",
    items: [
      { name: "React", icon: "/images/tech/react.svg" },
      { name: "Vue.js", icon: "/images/tech/vue.svg" },
      { name: "Angular", icon: "/images/tech/angular.svg" },
      { name: "Next.js", icon: "/images/tech/nextjs.svg" },
      { name: "TypeScript", icon: "/images/tech/typescript.svg" },
      { name: "Tailwind", icon: "/images/tech/tailwind.svg" }
    ]
  },
  backend: {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "/images/tech/nodejs.svg" },
      { name: "Python", icon: "/images/tech/python.svg" },
      { name: "Java", icon: "/images/tech/java.svg" },
      { name: "Go", icon: "/images/tech/go.svg" },
      { name: "PHP", icon: "/images/tech/php.svg" },
      { name: ".NET", icon: "/images/tech/dotnet.svg" }
    ]
  },
  cloud: {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "/images/tech/aws.svg" },
      { name: "Azure", icon: "/images/tech/azure.svg" },
      { name: "GCP", icon: "/images/tech/gcp.svg" },
      { name: "Docker", icon: "/images/tech/docker.svg" },
      { name: "Kubernetes", icon: "/images/tech/kubernetes.svg" },
      { name: "Jenkins", icon: "/images/tech/jenkins.svg" }
    ]
  },
  database: {
    title: "Bases de Datos",
    items: [
      { name: "PostgreSQL", icon: "/images/tech/postgresql.svg" },
      { name: "MongoDB", icon: "/images/tech/mongodb.svg" },
      { name: "MySQL", icon: "/images/tech/mysql.svg" },
      { name: "Redis", icon: "/images/tech/redis.svg" },
      { name: "Elasticsearch", icon: "/images/tech/elasticsearch.svg" },
      { name: "Firebase", icon: "/images/tech/firebase.svg" }
    ]
  }
};

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

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <TechStackSection id="tecnologias" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Nuestro Stack Tecnológico
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Utilizamos las últimas tecnologías para crear soluciones robustas y escalables
          </Subtitle>
        </Header>

        <TechGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {Object.entries(technologies).map(([key, category], index) => (
            <TechCategory
              key={key}
              variants={itemVariants}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <TechList>
                {category.items.map((tech, techIndex) => (
                  <TechItem
                    key={techIndex}
                    variants={itemVariants}
                  >
                    <IconWrapper>
                      <img src={tech.icon} alt={tech.name} />
                    </IconWrapper>
                    <TechName>{tech.name}</TechName>
                  </TechItem>
                ))}
              </TechList>
            </TechCategory>
          ))}
        </TechGrid>
      </Container>
    </TechStackSection>
  );
};

export default TechStack;
