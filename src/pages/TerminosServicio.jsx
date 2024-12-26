import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Container = styled(motion.div)`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: ${props => props.theme.colors.card};
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 1.25rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
`;

const Text = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.4;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
`;

const List = styled.ul`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.4;
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  font-size: 0.875rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.4rem;
`;

const LastUpdated = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-style: italic;
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.8rem;
`;

const TerminosServicio = () => {
  return (
    <Layout>
      <SEO 
        title="Términos y Condiciones | Bairesoft"
        description="Términos y condiciones de servicio de Bairesoft. Información detallada sobre nuestros servicios, acuerdos, propiedad intelectual y condiciones de uso."
        keywords="términos y condiciones, condiciones de servicio, acuerdo legal, términos de uso, servicios software, desarrollo web"
        canonical="/terms-of-service"
      />
      <Container
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Términos y Condiciones de Servicio</Title>

        <Section>
          <Text>
            Bienvenido a Bairesoft. Al utilizar nuestros servicios, usted acepta estos términos y condiciones en su totalidad. 
            Por favor, léalos detenidamente antes de utilizar nuestros servicios.
          </Text>
        </Section>

        <Section>
          <SectionTitle>1. Servicios</SectionTitle>
          <Text>
            Bairesoft ofrece servicios de desarrollo de software, incluyendo pero no limitado a:
          </Text>
          <List>
            <ListItem>Desarrollo de software a medida</ListItem>
            <ListItem>Desarrollo web y aplicaciones móviles</ListItem>
            <ListItem>Soluciones Low-Code</ListItem>
            <ListItem>Servicios de IA y Machine Learning</ListItem>
            <ListItem>Consultoría IT</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. Acuerdos de Servicio</SectionTitle>
          <Text>
            Cada proyecto comenzará con un acuerdo detallado que incluirá:
          </Text>
          <List>
            <ListItem>Alcance del proyecto y entregables</ListItem>
            <ListItem>Cronograma y plazos de entrega</ListItem>
            <ListItem>Presupuesto y condiciones de pago</ListItem>
            <ListItem>Requisitos técnicos y funcionales</ListItem>
            <ListItem>Proceso de revisión y aprobación</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Propiedad Intelectual</SectionTitle>
          <Text>
            Todos los derechos de propiedad intelectual del código fuente, diseños y documentación desarrollados 
            específicamente para el cliente serán transferidos al cliente una vez completado el pago total del proyecto.
          </Text>
        </Section>

        <Section>
          <SectionTitle>4. Confidencialidad</SectionTitle>
          <Text>
            Nos comprometemos a mantener la confidencialidad de toda la información proporcionada por el cliente. 
            Esta obligación se extiende más allá de la finalización del proyecto.
          </Text>
        </Section>

        <Section>
          <SectionTitle>5. Pagos</SectionTitle>
          <List>
            <ListItem>Los pagos se realizarán según el calendario acordado en el contrato</ListItem>
            <ListItem>Se requiere un depósito inicial antes de comenzar el trabajo</ListItem>
            <ListItem>Los pagos finales deben completarse antes de la entrega final</ListItem>
            <ListItem>Todos los precios están sujetos a cambios con previo aviso</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>6. Garantía y Soporte</SectionTitle>
          <Text>
            Ofrecemos un período de garantía de 3 meses para todos nuestros desarrollos, durante el cual 
            corregiremos cualquier error o problema técnico sin costo adicional.
          </Text>
        </Section>

        <Section>
          <SectionTitle>7. Limitación de Responsabilidad</SectionTitle>
          <Text>
            Bairesoft no será responsable de daños indirectos, incidentales o consecuentes que surjan 
            del uso de nuestros servicios.
          </Text>
        </Section>

        <LastUpdated>
          Última actualización: Diciembre 2023
        </LastUpdated>
      </Container>
    </Layout>
  );
};

export default TerminosServicio;
