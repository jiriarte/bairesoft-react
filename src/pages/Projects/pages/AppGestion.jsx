import React from 'react';
import ProjectPage from './ProjectPage';

const AppGestion = () => {
  return (
    <ProjectPage
      title="App de Gestión Empresarial"
      description="Sistema integral de gestión empresarial con análisis de datos en tiempo real y automatización de procesos."
      content={`
        Desarrollamos una solución empresarial completa que integra múltiples aspectos de la gestión empresarial en una única plataforma. El sistema incluye:

        1. Módulos integrados de CRM, RRHH, y Finanzas
        2. Dashboard personalizable con KPIs en tiempo real
        3. Sistema de reportes automatizados
        4. Automatización de procesos empresariales
      `}
      features={[
        "Gestión de clientes y oportunidades (CRM)",
        "Gestión de recursos humanos",
        "Contabilidad y finanzas integradas",
        "Automatización de procesos (BPM)",
        "Reportes personalizados",
        "Dashboard en tiempo real",
        "Gestión documental",
        "Integración con herramientas existentes"
      ]}
      technologies={[
        {
          category: "Frontend",
          items: ["Angular", "NgRx", "Material Design", "Chart.js"]
        },
        {
          category: "Backend",
          items: ["Java Spring Boot", "PostgreSQL", "Elasticsearch"]
        },
        {
          category: "Automatización",
          items: ["Camunda BPM", "Apache Camel", "RabbitMQ"]
        },
        {
          category: "Reportes",
          items: ["Jasper Reports", "Power BI", "Elastic Stack"]
        },
        {
          category: "DevOps",
          items: ["Azure", "Docker", "Jenkins", "SonarQube"]
        }
      ]}
      results={[
        "Reducción del 70% en tiempo de procesamiento",
        "Mejora del 85% en precisión de datos",
        "Automatización del 60% de procesos manuales",
        "ROI positivo en 6 meses",
        "Reducción del 40% en costos operativos"
      ]}
      images={[
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
      ]}
      client="Global Management Solutions"
      testimonial="La implementación del sistema de gestión ha revolucionado nuestra forma de trabajar. La automatización de procesos y la disponibilidad de datos en tiempo real nos ha permitido tomar mejores decisiones y mejorar significativamente nuestra eficiencia operativa."
    />
  );
};

export default AppGestion;
