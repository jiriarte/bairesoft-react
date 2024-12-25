import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import es from 'date-fns/locale/es';

// Registrar el locale español
registerLocale('es', es);

const FormContainer = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  color: green;
  text-align: center;
  margin-top: 1rem;
`;

const ErrorMessage = styled(motion.div)`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

const ScheduleContactForm = ({ title = "Agenda una consulta" }) => {
  const formRef = React.useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [scheduledDate, setScheduledDate] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      console.log('Inicializando EmailJS con:', {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      });
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    } catch (error) {
      console.error('Error al inicializar EmailJS:', error);
    }
  }, []);

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const handleDateChange = (date) => {
    if (date) {
      const newDate = new Date(date);
      setScheduledDate(newDate);
    } else {
      setScheduledDate(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');

    if (!scheduledDate) {
      setError('Por favor selecciona una fecha y hora para la consulta');
      setStatus('error');
      return;
    }

    try {
      // Actualizar el campo oculto de fecha antes de enviar
      const dateInput = formRef.current.querySelector('input[name="scheduled_date"]');
      if (dateInput) {
        dateInput.value = scheduledDate.toLocaleString('es-ES', {
          dateStyle: 'full',
          timeStyle: 'short'
        });
      }

      console.log('Enviando formulario con datos:', {
        formData,
        scheduledDate: dateInput?.value,
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      });

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      console.log('Email enviado:', result);
      
      if (result.status === 200) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setScheduledDate(null);
      } else {
        throw new Error('Error al enviar el formulario: ' + result.text);
      }
    } catch (error) {
      console.error('Error detallado:', error);
      setError('Error al enviar el formulario: ' + (error.text || error.message || 'Error desconocido'));
      setStatus('error');
    }
  };

  return (
    <FormContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{title}</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="from_name">Nombre</Label>
          <Input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="from_email">Email</Label>
          <Input
            type="email"
            id="from_email"
            name="from_email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="scheduled_date">Fecha y Hora de la Consulta</Label>
          <StyledDatePicker
            selected={scheduledDate}
            onChange={handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Hora"
            dateFormat="dd/MM/yyyy HH:mm"
            minDate={new Date()}
            filterTime={filterPassedTime}
            placeholderText="Selecciona fecha y hora"
            locale="es"
            required
          />
          <Input
            type="hidden"
            name="scheduled_date"
            id="scheduled_date"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Mensaje</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </FormGroup>

        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </Button>

        {status === 'success' && (
          <SuccessMessage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.
          </SuccessMessage>
        )}

        {error && (
          <ErrorMessage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </ErrorMessage>
        )}
      </Form>
    </FormContainer>
  );
};

export default ScheduleContactForm;
