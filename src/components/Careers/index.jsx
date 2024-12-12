import { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Send } from 'lucide-react';

const CareersSection = styled.section`
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

const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const JobCard = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.base};
  overflow: hidden;
`;

const JobHeader = styled.div`
  padding: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &:hover {
    background: ${props => props.theme.colors.backgroundLight};
  }
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
`;

const JobMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.sm};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const JobContent = styled(motion.div)`
  padding: 0 2rem 2rem;
`;

const JobDescription = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.md};
  line-height: 1.6;
`;

const RequirementsList = styled.ul`
  margin: 1.5rem 0;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text};
  }
`;

const ApplyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.radii.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    location: "Madrid, España",
    type: "Tiempo Completo",
    department: "Desarrollo",
    description: "Buscamos un desarrollador Full Stack senior para unirse a nuestro equipo principal de desarrollo.",
    requirements: [
      "5+ años de experiencia en desarrollo web",
      "Experiencia sólida con React, Node.js y bases de datos SQL/NoSQL",
      "Conocimiento profundo de arquitecturas de microservicios",
      "Experiencia en CI/CD y metodologías ágiles",
      "Excelentes habilidades de comunicación y trabajo en equipo"
    ]
  },
  {
    id: 2,
    title: "UX/UI Designer",
    location: "Remoto",
    type: "Tiempo Completo",
    department: "Diseño",
    description: "Buscamos un diseñador UX/UI creativo y orientado a datos para crear experiencias digitales excepcionales.",
    requirements: [
      "3+ años de experiencia en diseño UX/UI",
      "Dominio de Figma y otras herramientas de diseño",
      "Portfolio que demuestre proyectos exitosos",
      "Experiencia en investigación de usuarios y pruebas de usabilidad",
      "Capacidad para trabajar en múltiples proyectos simultáneamente"
    ]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    location: "Barcelona, España",
    type: "Tiempo Completo",
    department: "Infraestructura",
    description: "Buscamos un ingeniero DevOps para optimizar y mantener nuestra infraestructura cloud.",
    requirements: [
      "4+ años de experiencia en roles DevOps",
      "Experiencia sólida con AWS/Azure y Kubernetes",
      "Conocimiento profundo de Docker y contenedorización",
      "Experiencia en automatización y scripting",
      "Certificaciones cloud relevantes son un plus"
    ]
  }
];

const Careers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <CareersSection id="careers" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Únete a Nuestro Equipo
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explora las oportunidades para crecer y desarrollarte con nosotros
          </Subtitle>
        </Header>

        <JobList>
          {jobs.map((job, index) => (
            <JobCard
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <JobHeader onClick={() => toggleJob(job.id)}>
                <JobInfo>
                  <JobTitle>{job.title}</JobTitle>
                  <JobMeta>
                    <MetaItem>
                      <MapPin size={16} />
                      {job.location}
                    </MetaItem>
                    <MetaItem>
                      <Clock size={16} />
                      {job.type}
                    </MetaItem>
                    <MetaItem>
                      <Briefcase size={16} />
                      {job.department}
                    </MetaItem>
                  </JobMeta>
                </JobInfo>
                {expandedJob === job.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </JobHeader>

              <AnimatePresence>
                {expandedJob === job.id && (
                  <JobContent
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <JobDescription>
                      <p>{job.description}</p>
                      <h4 style={{ margin: "1.5rem 0 1rem" }}>Requisitos:</h4>
                      <RequirementsList>
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </RequirementsList>
                      <ApplyButton>
                        <Send size={18} />
                        Aplicar Ahora
                      </ApplyButton>
                    </JobDescription>
                  </JobContent>
                )}
              </AnimatePresence>
            </JobCard>
          ))}
        </JobList>
      </Container>
    </CareersSection>
  );
};

export default Careers;
