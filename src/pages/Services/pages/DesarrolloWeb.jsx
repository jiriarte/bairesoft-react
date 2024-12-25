import React from 'react';
import ServicePage from './ServicePage';

const DesarrolloWeb = () => {
  return (
    <ServicePage
      title="Desarrollo Web"
      description="Combinamos el poder del desarrollo tradicional con las últimas tecnologías low-code y desarrollo híbrido para crear soluciones web innovadoras y eficientes."
      content={`
        Nuestro enfoque de desarrollo web integra tres metodologías complementarias para ofrecer soluciones óptimas según las necesidades de cada proyecto:

        1. Desarrollo Tradicional: Utilizamos frameworks modernos como React, Angular y Vue.js para crear aplicaciones web robustas y personalizadas.

        2. Desarrollo Low-Code: Implementamos soluciones rápidas y eficientes con plataformas como Genexus, que permiten reducir tiempos de desarrollo manteniendo la calidad.

        3. Desarrollo Híbrido: Combinamos lo mejor de ambos mundos, utilizando componentes low-code para acelerar el desarrollo mientras mantenemos la flexibilidad del código personalizado.
      `}
      features={[
        "Arquitectura moderna basada en microservicios",
        "Integración de Genexus para desarrollo low-code acelerado",
        "Desarrollo híbrido con React y tecnologías modernas",
        "APIs RESTful y GraphQL para mejor integración",
        "PWA (Progressive Web Apps) para experiencia móvil",
        "Implementación de CI/CD para despliegue continuo",
        "Optimización de rendimiento y SEO",
        "Arquitectura serverless y microservicios"
      ]}
      benefits={[
        "Reducción del tiempo de desarrollo en hasta un 70% con low-code",
        "Mayor flexibilidad para adaptarse a cambios del mercado",
        "Costos de mantenimiento reducidos",
        "Escalabilidad y rendimiento optimizados",
        "Integración perfecta con sistemas existentes",
        "Experiencia de usuario mejorada en todos los dispositivos",
        "Actualizaciones y mantenimiento simplificados",
        "ROI mejorado gracias al desarrollo acelerado"
      ]}
      technologies={[
        {
          category: "Frameworks Frontend",
          items: ["React", "Vue.js", "Angular", "Next.js"]
        },
        {
          category: "Desarrollo Low-Code",
          items: ["Genexus", "OutSystems", "Mendix"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Python", "Java", ".NET Core"]
        },
        {
          category: "Base de Datos",
          items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
        },
        {
          category: "DevOps & Cloud",
          items: ["AWS", "Azure", "Docker", "Kubernetes"]
        }
      ]}
      methodologies={[
        "Desarrollo Ágil con Scrum",
        "Integración Continua / Despliegue Continuo (CI/CD)",
        "Desarrollo Basado en Componentes",
        "Arquitectura de Microservicios",
        "Desarrollo Guiado por Pruebas (TDD)"
      ]}
    />
  );
};

export default DesarrolloWeb;
