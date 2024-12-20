import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';

const BreadcrumbContainer = styled.nav`
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.5rem 1rem;
  }
`;

const BreadcrumbList = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  
  &:last-child {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const BreadcrumbLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Separator = styled(FaChevronRight)`
  margin: 0 0.5rem;
  font-size: 0.75rem;
`;

const routeConfig = {
  services: 'Servicios',
  projects: 'Proyectos',
  blog: 'Blog',
  insights: 'Insights',
  contact: 'Contacto',
  schedule: 'Agenda',
  'innovacion-digital': 'Innovación Digital',
  'transformacion-empresarial': 'Transformación Empresarial',
  'tendencias-tecnologicas': 'Tendencias Tecnológicas',
  'erp-industrial': 'ERP Industrial',
  'sistema-de-reservas': 'Sistema de Reservas',
  'plataforma-educativa': 'Plataforma Educativa'
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Agregar datos estructurados para SEO
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': pathSegments.map((_, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@id': \`https://bairesoft.com/\${pathSegments.slice(0, index + 1).join('/')}\`,
        'name': routeConfig[pathSegments[index]] || pathSegments[index]
      }
    }))
  };

  if (pathSegments.length === 0) return null;

  return (
    <BreadcrumbContainer aria-label="breadcrumb">
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbList)}
      </script>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink to="/">Inicio</BreadcrumbLink>
          {pathSegments.length > 0 && <Separator />}
        </BreadcrumbItem>
        {pathSegments.map((segment, index) => {
          const path = \`/\${pathSegments.slice(0, index + 1).join('/')}\`;
          const isLast = index === pathSegments.length - 1;
          
          return (
            <BreadcrumbItem key={path}>
              {isLast ? (
                <span>{routeConfig[segment] || segment}</span>
              ) : (
                <>
                  <BreadcrumbLink to={path}>
                    {routeConfig[segment] || segment}
                  </BreadcrumbLink>
                  <Separator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;
