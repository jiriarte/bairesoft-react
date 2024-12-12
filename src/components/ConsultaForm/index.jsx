import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale';

const FormContainer = styled(motion.div)`
  background: ${props => props.theme.colors.card};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
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
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}33;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}33;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primary}33;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

const SuccessMessage = styled(motion.div)`
  background: #10B981;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-top: 1rem;
`;

const ConsultaForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
  });
  const [fecha, setFecha] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/consulta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          fecha: fecha.toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        mensaje: '',
      });
      setFecha(null);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al programar la consulta. Por favor, inténtalo de nuevo.');
    }
  };

  const filterWeekdays = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <FormContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nombre completo *</Label>
          <Input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Email *</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Teléfono</Label>
          <Input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Empresa</Label>
          <Input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Fecha preferida para la consulta *</Label>
          <StyledDatePicker
            selected={fecha}
            onChange={date => setFecha(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="Hora"
            dateFormat="dd/MM/yyyy HH:mm"
            minDate={new Date()}
            filterDate={filterWeekdays}
            minTime={new Date().setHours(9, 0)}
            maxTime={new Date().setHours(18, 0)}
            locale={es}
            placeholderText="Selecciona fecha y hora"
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>Mensaje *</Label>
          <TextArea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Cuéntanos sobre tu proyecto..."
            required
          />
        </FormGroup>

        <Button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Solicitar Consulta Gratuita
        </Button>

        {submitted && (
          <SuccessMessage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            ¡Gracias! Nos pondremos en contacto contigo pronto para confirmar tu consulta.
          </SuccessMessage>
        )}
      </Form>
    </FormContainer>
  );
};

export default ConsultaForm;
