import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

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
            Una vez completado el pago total del proyecto:
          </Text>
          <List>
            <ListItem>El cliente recibirá todos los derechos de propiedad del código fuente desarrollado específicamente para su proyecto</ListItem>
            <ListItem>Las bibliotecas y componentes de terceros mantendrán sus respectivas licencias</ListItem>
            <ListItem>Bairesoft mantendrá el derecho de usar conceptos y técnicas generales aprendidas durante el desarrollo</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Confidencialidad</SectionTitle>
          <Text>
            Nos comprometemos a:
          </Text>
          <List>
            <ListItem>Mantener la confidencialidad de toda la información del cliente</ListItem>
            <ListItem>No divulgar información sensible a terceros</ListItem>
            <ListItem>Implementar medidas de seguridad apropiadas</ListItem>
            <ListItem>Firmar acuerdos de confidencialidad específicos cuando sea necesario</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Pagos</SectionTitle>
          <Text>
            Nuestras condiciones de pago incluyen:
          </Text>
          <List>
            <ListItem>Un depósito inicial del 30% para comenzar el proyecto</ListItem>
            <ListItem>Pagos intermedios según los hitos acordados</ListItem>
            <ListItem>Pago final antes de la entrega del código fuente</ListItem>
            <ListItem>Métodos de pago aceptados: transferencia bancaria, tarjeta de crédito</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>6. Garantía y Mantenimiento</SectionTitle>
          <Text>
            Ofrecemos:
          </Text>
          <List>
            <ListItem>Garantía de 3 meses en todos los desarrollos</ListItem>
            <ListItem>Corrección de errores sin costo durante el período de garantía</ListItem>
            <ListItem>Planes de mantenimiento opcionales después del período de garantía</ListItem>
            <ListItem>Soporte técnico según el acuerdo de nivel de servicio</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>7. Cancelación</SectionTitle>
          <Text>
            En caso de cancelación:
          </Text>
          <List>
            <ListItem>El cliente deberá pagar por todo el trabajo completado hasta la fecha</ListItem>
            <ListItem>El depósito inicial no es reembolsable</ListItem>
            <ListItem>Se entregará todo el trabajo realizado hasta el momento</ListItem>
            <ListItem>Se aplicarán las cláusulas de confidencialidad acordadas</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>8. Limitación de Responsabilidad</SectionTitle>
          <Text>
            Bairesoft no será responsable por:
          </Text>
          <List>
            <ListItem>Pérdidas indirectas o consecuentes</ListItem>
            <ListItem>Problemas causados por modificaciones realizadas por terceros</ListItem>
            <ListItem>Interrupciones de servicio fuera de nuestro control</ListItem>
            <ListItem>Daños causados por uso indebido del software</ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>9. Modificaciones</SectionTitle>
          <Text>
            Bairesoft se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
            Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
          </Text>
        </Section>

        <Section>
          <SectionTitle>10. Ley Aplicable</SectionTitle>
          <Text>
            Estos términos y condiciones se rigen por las leyes de España. Cualquier disputa será sometida 
            a la jurisdicción exclusiva de los tribunales de Madrid, España.
          </Text>
        </Section>

        <LastUpdated>Última actualización: Diciembre 2023</LastUpdated>
      </Container>
    </Layout>
  );
};

export default TerminosServicio;
