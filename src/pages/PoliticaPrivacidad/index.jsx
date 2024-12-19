import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
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

const PoliticaPrivacidad = () => {
  return (
    <Container>
      <Title>Política de Privacidad</Title>

      <Section>
        <Text>
          En Bairesoft, nos tomamos muy en serio la protección de sus datos personales. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos su información personal.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Información que recopilamos</SectionTitle>
        <List>
          <ListItem>
            <strong>Información de contacto:</strong> nombre, dirección de correo electrónico, número de teléfono.
          </ListItem>
          <ListItem>
            <strong>Información de la empresa:</strong> nombre de la empresa, cargo.
          </ListItem>
          <ListItem>
            <strong>Información técnica:</strong> dirección IP, tipo de navegador, dispositivo utilizado.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Cómo utilizamos su información</SectionTitle>
        <List>
          <ListItem>Para proporcionar y mejorar nuestros servicios</ListItem>
          <ListItem>Para comunicarnos con usted sobre nuestros servicios</ListItem>
          <ListItem>Para enviar información sobre actualizaciones y ofertas</ListItem>
          <ListItem>Para cumplir con obligaciones legales</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Base legal para el tratamiento</SectionTitle>
        <Text>
          Procesamos sus datos personales basándonos en las siguientes bases legales:
        </Text>
        <List>
          <ListItem>Su consentimiento</ListItem>
          <ListItem>La ejecución de un contrato</ListItem>
          <ListItem>Nuestros intereses legítimos</ListItem>
          <ListItem>Cumplimiento de obligaciones legales</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Sus derechos</SectionTitle>
        <Text>
          Bajo el RGPD, usted tiene los siguientes derechos:
        </Text>
        <List>
          <ListItem>Derecho de acceso</ListItem>
          <ListItem>Derecho de rectificación</ListItem>
          <ListItem>Derecho de supresión</ListItem>
          <ListItem>Derecho a la limitación del tratamiento</ListItem>
          <ListItem>Derecho a la portabilidad de los datos</ListItem>
          <ListItem>Derecho de oposición</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Seguridad de los datos</SectionTitle>
        <Text>
          Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso, la modificación, la divulgación o la destrucción no autorizados.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Retención de datos</SectionTitle>
        <Text>
          Conservamos sus datos personales solo durante el tiempo necesario para los fines para los que fueron recopilados y de acuerdo con los requisitos legales aplicables.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Contacto</SectionTitle>
        <Text>
          Si tiene alguna pregunta sobre nuestra política de privacidad o el tratamiento de sus datos personales, puede contactarnos en:
        </Text>
        <Text>
          Email: info@bairesoft.com<br />
          Teléfono: +34 611 649 151<br />
          Dirección: Calle Aparadoras 3, 02640 Almansa,Albacete
        </Text>
      </Section>

      <Section>
        <SectionTitle>Actualizaciones de la política</SectionTitle>
        <Text>
          Podemos actualizar esta política de privacidad ocasionalmente. La fecha de la última actualización se mostrará al principio de la política. Le recomendamos que revise esta política periódicamente.
        </Text>
      </Section>
    </Container>
  );
};

export default PoliticaPrivacidad;
