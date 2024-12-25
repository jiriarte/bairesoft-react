import React from 'react';
import ServicePage from './ServicePage';

const AplicacionesWeb = () => {
  return (
    <ServicePage
      title="Aplicaciones Web"
      description="Desarrollamos aplicaciones web empresariales robustas y escalables que impulsan la transformación digital de tu negocio."
      content={`
        Nuestro enfoque para el desarrollo de aplicaciones web empresariales se centra en crear soluciones escalables y mantenibles que resuelven problemas de negocio complejos:

        1. Arquitectura Moderna: Implementamos arquitecturas basadas en microservicios y serverless para máxima escalabilidad y mantenibilidad.

        2. Experiencia de Usuario: Creamos interfaces intuitivas y responsivas que mejoran la productividad y satisfacción del usuario.

        3. Integración Empresarial: Facilitamos la conexión con sistemas existentes y servicios de terceros a través de APIs robustas.
      `}
      features={[
        "Arquitectura de microservicios escalable",
        "Interfaces de usuario modernas y responsivas",
        "Integración con sistemas empresariales existentes",
        "Autenticación y autorización avanzada",
        "APIs RESTful y GraphQL",
        "Procesamiento en tiempo real",
        "Análisis y reportes avanzados",
        "Monitoreo y logging completo"
      ]}
      benefits={[
        "Mayor eficiencia operativa",
        "Reducción de costos operativos",
        "Mejora en la toma de decisiones",
        "Escalabilidad según demanda",
        "Seguridad empresarial robusta",
        "Integración perfecta con sistemas existentes",
        "Mantenimiento simplificado",
        "Análisis de datos en tiempo real"
      ]}
      technologies={[
        {
          category: "Frontend",
          items: ["React", "Angular", "Vue.js", "TypeScript"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Java Spring", ".NET Core", "Python Django"]
        },
        {
          category: "Base de Datos",
          items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"]
        },
        {
          category: "Cloud & DevOps",
          items: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins"]
        },
        {
          category: "Monitoreo",
          items: ["ELK Stack", "Prometheus", "Grafana", "New Relic"]
        }
      ]}
      methodologies={[
        "Domain-Driven Design (DDD)",
        "Event-Driven Architecture",
        "Desarrollo Ágil con SAFe",
        "DevSecOps",
        "Continuous Integration/Continuous Deployment"
      ]}
    />
  );
};

export default AplicacionesWeb;
