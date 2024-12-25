import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicePageContainer = styled.div`
  min-height: 100vh;
  padding: calc(80px + 2rem) 2rem 4rem;
  background: ${props => props.theme.colors.background};

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-top: calc(70px + 2rem);
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    background: ${props => props.theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.textLight};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const Content = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;

  h2 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    color: ${props => props.theme.colors.textLight};
    line-height: 1.6;
    margin-bottom: 1.5rem;
    white-space: pre-line;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      color: ${props => props.theme.colors.textLight};

      &:before {
        content: "•";
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
  }
`;

const TechSection = styled.div`
  margin-top: 2rem;
`;

const TechCategory = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    color: ${props => props.theme.colors.text};
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.primary}20;
  color: ${props => props.theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const CTAButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.primaryDark};
  }
`;

const ServicePage = ({ 
  title, 
  description, 
  content, 
  features, 
  benefits, 
  technologies,
  methodologies 
}) => {
  return (
    <ServicePageContainer>
      <ContentWrapper>
        <Header>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </Header>

        <Content>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Descripción del Servicio</h2>
            <p>{content}</p>

            <h2>Características Principales</h2>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h2>Beneficios</h2>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            {technologies && (
              <>
                <h2>Tecnologías</h2>
                <TechSection>
                  {technologies.map((tech, index) => (
                    <TechCategory key={index}>
                      <h3>{tech.category}</h3>
                      <TechTags>
                        {tech.items.map((item, i) => (
                          <TechTag key={i}>{item}</TechTag>
                        ))}
                      </TechTags>
                    </TechCategory>
                  ))}
                </TechSection>
              </>
            )}

            {methodologies && (
              <>
                <h2>Metodologías</h2>
                <ul>
                  {methodologies.map((methodology, index) => (
                    <li key={index}>{methodology}</li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </Content>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'center' }}
        >
          <CTAButton
            to="/schedule"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agenda una consulta gratuita
          </CTAButton>
        </motion.div>
      </ContentWrapper>
    </ServicePageContainer>
  );
};

export default ServicePage;
