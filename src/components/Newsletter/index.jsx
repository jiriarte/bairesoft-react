import { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterSection = styled.section`
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

const NewsletterCard = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.xl};
  padding: 4rem;
  box-shadow: ${props => props.theme.shadows.lg};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/newsletter-pattern.svg') no-repeat;
    background-size: cover;
    opacity: 0.05;
    z-index: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 2rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const TextContent = styled.div``;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.lg};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Benefits = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
`;

const Benefit = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.fontSizes.md};

  svg {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const FormContainer = styled(motion.div)`
  background: ${props => props.theme.colors.backgroundLight};
  padding: 2rem;
  border-radius: ${props => props.theme.radii.lg};
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

const InputGroup = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    color: ${props => props.theme.colors.textLight};
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid transparent;
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }

  &::placeholder {
    color: ${props => props.theme.colors.textLight};
  }
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:disabled {
    background: ${props => props.theme.colors.textLight};
    cursor: not-allowed;
    transform: none;
  }
`;

const Message = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  margin-top: 1rem;

  ${props => props.type === 'success' && `
    background: ${props.theme.colors.success}15;
    color: ${props.theme.colors.success};
  `}

  ${props => props.type === 'error' && `
    background: ${props.theme.colors.error}15;
    color: ${props.theme.colors.error};
  `}
`;

const Newsletter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Aquí iría la lógica de integración con tu servicio de newsletter
      // Por ejemplo: Mailchimp, SendGrid, etc.
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulación de llamada API
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    "Últimas novedades y actualizaciones",
    "Consejos y mejores prácticas",
    "Acceso anticipado a eventos",
    "Contenido exclusivo"
  ];

  return (
    <NewsletterSection id="newsletter" ref={ref}>
      <Container>
        <NewsletterCard
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Content>
            <TextContent>
              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                Mantente Informado
              </Title>
              <Description
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Suscríbete a nuestro newsletter y recibe las últimas novedades en desarrollo web, 
                tecnología y mejores prácticas.
              </Description>
              <Benefits
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {benefits.map((benefit, index) => (
                  <Benefit key={index}>
                    <CheckCircle size={20} />
                    {benefit}
                  </Benefit>
                ))}
              </Benefits>
            </TextContent>

            <FormContainer
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Mail size={20} />
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </InputGroup>
                <SubmitButton type="submit" disabled={loading}>
                  {loading ? (
                    'Enviando...'
                  ) : (
                    <>
                      Suscribirse
                      <Send size={20} />
                    </>
                  )}
                </SubmitButton>
                {status === 'success' && (
                  <Message
                    type="success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={20} />
                    ¡Gracias por suscribirte!
                  </Message>
                )}
                {status === 'error' && (
                  <Message
                    type="error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={20} />
                    Ha ocurrido un error. Por favor, intenta de nuevo.
                  </Message>
                )}
              </Form>
            </FormContainer>
          </Content>
        </NewsletterCard>
      </Container>
    </NewsletterSection>
  );
};

export default Newsletter;
