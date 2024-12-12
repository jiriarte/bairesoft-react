import { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = styled.section`
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled(motion.form)`
  background: white;
  padding: 2rem;
  border-radius: ${props => props.theme.radii.xl};
  box-shadow: ${props => props.theme.shadows.base};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: ${props => props.theme.radii.md};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: ${props => props.theme.radii.lg};
  box-shadow: ${props => props.theme.shadows.base};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.radii.full};
  background: ${props => `${props.theme.colors.primary}10`};
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h4`
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: 0.25rem;
`;

const InfoText = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.sm};
`;

const MapContainer = styled.div`
  margin-top: 2rem;
  border-radius: ${props => props.theme.radii.lg};
  overflow: hidden;
  height: 300px;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aquí iría la lógica para enviar el formulario
    // Por ejemplo, usando un servicio como EmailJS o una API propia

    setTimeout(() => {
      setIsSubmitting(false);
      // Mostrar mensaje de éxito o error
    }, 2000);
  };

  return (
    <ContactSection id="contacto" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Contáctanos
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas y ayudarte a hacerlas realidad
          </Subtitle>
        </Header>

        <ContentWrapper>
          <ContactForm
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">Nombre</Label>
              <Input type="text" id="name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Asunto</Label>
              <Input type="text" id="subject" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Mensaje</Label>
              <TextArea id="message" required />
            </FormGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              <Send size={16} />
            </SubmitButton>
          </ContactForm>

          <ContactInfo
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InfoCard>
              <IconWrapper>
                <Phone size={20} />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Teléfono</InfoTitle>
                <InfoText>+34 123 456 789</InfoText>
              </InfoContent>
            </InfoCard>

            <InfoCard>
              <IconWrapper>
                <Mail size={20} />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Email</InfoTitle>
                <InfoText>info@bairesoft.com</InfoText>
              </InfoContent>
            </InfoCard>

            <InfoCard>
              <IconWrapper>
                <MapPin size={20} />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Ubicación</InfoTitle>
                <InfoText>Calle Principal 123, Madrid, España</InfoText>
              </InfoContent>
            </InfoCard>

            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12147.934582693327!2d-3.7037929!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2ses!4v1638547492793!5m2!1sen!2ses"
                allowFullScreen=""
                loading="lazy"
                title="Ubicación de la oficina"
              />
            </MapContainer>
          </ContactInfo>
        </ContentWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
