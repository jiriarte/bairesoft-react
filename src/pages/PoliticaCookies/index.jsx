import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: ${props => props.theme.colors.card};
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  color: ${props => props.theme.colors.textLight};
  line-height: 1.6;
  margin-bottom: 1rem;
  padding-left: 2rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const PoliticaCookies = () => {
  return (
    <Container>
      <Title>Política de Cookies</Title>

      <Section>
        <Text>
          En Bairesoft, utilizamos cookies y tecnologías similares para mejorar y personalizar su experiencia en nuestra web. Esta política explica cómo y por qué utilizamos estas tecnologías.
        </Text>
      </Section>

      <Section>
        <SectionTitle>¿Qué son las cookies?</SectionTitle>
        <Text>
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestra web. Estas nos permiten recordar sus preferencias y mejorar su experiencia de navegación.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Tipos de cookies que utilizamos</SectionTitle>
        <List>
          <ListItem>
            <strong>Cookies necesarias:</strong> Son esenciales para el funcionamiento básico del sitio web.
          </ListItem>
          <ListItem>
            <strong>Cookies analíticas:</strong> Nos ayudan a entender cómo los usuarios interactúan con nuestra web, permitiéndonos mejorar su funcionamiento.
          </ListItem>
          <ListItem>
            <strong>Cookies de marketing:</strong> Se utilizan para mostrar publicidad relevante basada en sus intereses.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>¿Cómo puede controlar las cookies?</SectionTitle>
        <Text>
          Puede configurar su navegador para rechazar todas las cookies o para recibir un aviso cuando se envíe una cookie. Sin embargo, si rechaza las cookies, es posible que algunas partes de nuestro sitio web no funcionen correctamente.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Cookies de terceros</SectionTitle>
        <Text>
          Algunos de nuestros socios de confianza pueden establecer cookies en su dispositivo cuando visita nuestro sitio web. Estos terceros incluyen servicios de análisis y redes publicitarias.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Actualizaciones de la política</SectionTitle>
        <Text>
          Podemos actualizar esta política de cookies ocasionalmente. Le recomendamos que revise esta página periódicamente para mantenerse informado sobre cómo utilizamos las cookies.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Contacto</SectionTitle>
        <Text>
          Si tiene alguna pregunta sobre nuestra política de cookies, no dude en contactarnos a través de nuestro formulario de contacto o enviando un email a info@bairesoft.com.
        </Text>
      </Section>
    </Container>
  );
};

export default PoliticaCookies;
