import { useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { Check, X } from 'lucide-react';

const PricingSection = styled.section`
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

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PricingCard = styled(motion.div)`
  background: white;
  border-radius: ${props => props.theme.radii.xl};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.base};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${props => props.popular && `
    border: 2px solid ${props.theme.colors.primary};
    transform: scale(1.05);

    &::before {
      content: 'Más Popular';
      position: absolute;
      top: 1rem;
      right: -2rem;
      background: ${props.theme.colors.primary};
      color: white;
      padding: 0.5rem 3rem;
      transform: rotate(45deg);
      font-size: ${props.theme.fontSizes.sm};
    }
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    ${props => props.popular && `
      transform: scale(1);
    `}
  }
`;

const PlanName = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.fontWeights.bold};
`;

const Price = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin: 1.5rem 0;

  span {
    font-size: ${props => props.theme.fontSizes.md};
    color: ${props => props.theme.colors.textLight};
  }
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 2rem;
  font-size: ${props => props.theme.fontSizes.md};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${props => props.included ? props.theme.colors.text : props.theme.colors.textLight};
  font-size: ${props => props.theme.fontSizes.md};

  svg {
    color: ${props => props.included ? props.theme.colors.primary : props.theme.colors.textLight};
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: ${props => props.theme.radii.md};
  border: none;
  background: ${props => props.primary ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.primary ? 'white' : props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fontWeights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.primary ? props.theme.shadows.md : 'none'};
    background: ${props => props.primary ? props.theme.colors.primaryDark : props.theme.colors.primaryLight};
  }
`;

const plans = [
  {
    name: "Básico",
    price: "999",
    description: "Perfecto para pequeñas empresas que están comenzando",
    features: [
      { text: "Hasta 5 páginas", included: true },
      { text: "Diseño Responsivo", included: true },
      { text: "SEO Básico", included: true },
      { text: "Soporte por Email", included: true },
      { text: "Hosting Incluido", included: false },
      { text: "Dominio Personalizado", included: false },
      { text: "SSL Gratuito", included: false },
    ],
    popular: false
  },
  {
    name: "Profesional",
    price: "1999",
    description: "Ideal para empresas en crecimiento con necesidades específicas",
    features: [
      { text: "Hasta 10 páginas", included: true },
      { text: "Diseño Responsivo", included: true },
      { text: "SEO Avanzado", included: true },
      { text: "Soporte Prioritario", included: true },
      { text: "Hosting Incluido", included: true },
      { text: "Dominio Personalizado", included: true },
      { text: "SSL Gratuito", included: true },
    ],
    popular: true
  },
  {
    name: "Empresarial",
    price: "3999",
    description: "Solución completa para grandes empresas y proyectos complejos",
    features: [
      { text: "Páginas Ilimitadas", included: true },
      { text: "Diseño Personalizado", included: true },
      { text: "SEO Premium", included: true },
      { text: "Soporte 24/7", included: true },
      { text: "Hosting Premium", included: true },
      { text: "Dominio Premium", included: true },
      { text: "SSL Avanzado", included: true },
    ],
    popular: false
  }
];

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <PricingSection id="pricing" ref={ref}>
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Planes y Precios
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluciones flexibles para todo tipo de empresas
          </Subtitle>
        </Header>

        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              popular={plan.popular}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PlanName>{plan.name}</PlanName>
              <Price>€{plan.price}<span>/mes</span></Price>
              <Description>{plan.description}</Description>
              <Button primary={plan.popular}>
                Empezar Ahora
              </Button>
              <FeatureList>
                {plan.features.map((feature, featureIndex) => (
                  <Feature key={featureIndex} included={feature.included}>
                    {feature.included ? <Check size={20} /> : <X size={20} />}
                    {feature.text}
                  </Feature>
                ))}
              </FeatureList>
            </PricingCard>
          ))}
        </PricingGrid>
      </Container>
    </PricingSection>
  );
};

export default Pricing;
