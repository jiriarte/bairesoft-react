import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: calc(80px + 2rem) 2rem 4rem;
  background: ${props => props.theme.colors.background};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-top: calc(70px + 2rem);
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding-top: calc(60px + 1.5rem);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: ${props => props.theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textLight};
    margin-bottom: 2rem;
    line-height: 1.6;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  backdrop-filter: blur(10px);

  svg {
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    color: ${props => props.theme.colors.primary};
  }

  div {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
      color: ${props => props.theme.colors.text};
    }

    p {
      font-size: 1rem;
      margin: 0;
      color: ${props => props.theme.colors.textLight};
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text};
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    color: ${props => props.theme.colors.text};
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
      background: rgba(255, 255, 255, 0.1);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.theme.colors.gradient};
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Aquí iría la lógica para enviar el formulario
    // Por ejemplo, usando un servicio de email como EmailJS o una API propia

    try {
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Mensaje enviado con éxito');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      alert('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <ContentWrapper>
        <ContactInfo>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contáctanos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Estamos aquí para ayudarte. Contáctanos para discutir cómo podemos transformar tus ideas en soluciones digitales innovadoras.
          </motion.p>

          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <h4>Email</h4>
              <p>info@bairesoft.com</p>
            </div>
          </InfoItem>

          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <h4>Teléfono</h4>
              <p>+34 123 456 789</p>
            </div>
          </InfoItem>

          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h4>Ubicación</h4>
              <p>Madrid, España</p>
            </div>
          </InfoItem>
        </ContactInfo>

        <ContactForm
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <FormGroup>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tu@email.com"
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Asunto de tu mensaje"
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tu mensaje..."
            />
          </FormGroup>

          <SubmitButton
            type="submit"
            disabled={isSubmitting}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </SubmitButton>
        </ContactForm>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact;
