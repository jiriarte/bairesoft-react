import { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const FAQSection = styled.section`
  padding: 8rem 2rem;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
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

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.base};
  overflow: hidden;
`;

const QuestionButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  background: white;
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.base};
`;

const ContactTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const ContactText = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 1.5rem;
`;

const ContactButton = styled.a`
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

const faqs = [
  {
    question: "¿Qué servicios de desarrollo de software ofrecen?",
    answer: "Ofrecemos una amplia gama de servicios de desarrollo de software, incluyendo desarrollo web y móvil, soluciones empresariales, integración de sistemas, desarrollo Low Code, implementación de IA y servicios cloud. Nuestro equipo está capacitado para manejar proyectos de cualquier escala y complejidad."
  },
  {
    question: "¿Cuál es su proceso de desarrollo?",
    answer: "Nuestro proceso de desarrollo sigue una metodología ágil que incluye las fases de descubrimiento, planificación, diseño, desarrollo, pruebas y despliegue. Mantenemos una comunicación constante con nuestros clientes y realizamos entregas incrementales para asegurar la calidad y satisfacción del cliente."
  },
  {
    question: "¿Cuánto tiempo toma completar un proyecto?",
    answer: "El tiempo de desarrollo varía según la complejidad y alcance del proyecto. Proyectos pequeños pueden completarse en 4-6 semanas, mientras que proyectos más grandes pueden tomar varios meses. Durante la fase de descubrimiento, proporcionamos un cronograma detallado basado en sus requisitos específicos."
  },
  {
    question: "¿Ofrecen mantenimiento y soporte post-lanzamiento?",
    answer: "Sí, ofrecemos servicios completos de mantenimiento y soporte post-lanzamiento. Esto incluye monitoreo continuo, actualizaciones de seguridad, optimizaciones de rendimiento y soporte técnico. También ofrecemos diferentes niveles de SLA según las necesidades de su negocio."
  },
  {
    question: "¿Cómo garantizan la seguridad y calidad del código?",
    answer: "Implementamos las mejores prácticas de seguridad y calidad en todo nuestro proceso de desarrollo. Esto incluye revisiones de código regulares, pruebas automatizadas, auditorías de seguridad y seguimiento de estándares de la industria. Todo nuestro código pasa por múltiples niveles de pruebas antes del despliegue."
  }
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQSection id="faq" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Preguntas Frecuentes
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
          </Subtitle>
        </Header>

        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <QuestionButton onClick={() => toggleQuestion(index)}>
                {faq.question}
                <IconWrapper
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </IconWrapper>
              </QuestionButton>
              <AnimatePresence>
                {activeIndex === index && (
                  <Answer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>

        <ContactInfo>
          <ContactTitle>
            <MessageCircleQuestion />
            ¿No encuentras la respuesta que buscas?
          </ContactTitle>
          <ContactText>
            Nuestro equipo está listo para ayudarte con cualquier pregunta adicional que tengas
          </ContactText>
          <ContactButton href="/contacto">
            Contáctanos
          </ContactButton>
        </ContactInfo>
      </Container>
    </FAQSection>
  );
};

export default FAQ;
