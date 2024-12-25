import React from 'react';
import ServicePage from './ServicePage';

const ConsultoriaIT = () => {
  return (
    <ServicePage
      title="Consultoría IT"
      description="Proporcionamos asesoramiento estratégico y técnico para optimizar sus procesos tecnológicos y acelerar la transformación digital."
      content={`
        Nuestros servicios de consultoría IT ofrecen una visión integral y estratégica para ayudar a las organizaciones a alcanzar sus objetivos tecnológicos:

        1. Estrategia Digital: Desarrollamos hojas de ruta tecnológicas alineadas con los objetivos de negocio y las últimas tendencias del mercado.

        2. Optimización de Procesos: Analizamos y mejoramos los procesos existentes mediante la implementación de soluciones tecnológicas adecuadas.

        3. Arquitectura Empresarial: Diseñamos arquitecturas tecnológicas escalables y mantenibles que soportan el crecimiento del negocio.
      `}
      features={[
        "Evaluación de arquitectura tecnológica",
        "Planificación estratégica de IT",
        "Auditoría de seguridad",
        "Optimización de infraestructura",
        "Gestión de proyectos tecnológicos",
        "Análisis de procesos de negocio",
        "Evaluación de proveedores tecnológicos",
        "Planificación de transformación digital"
      ]}
      benefits={[
        "Reducción de costos operativos",
        "Mejora en la eficiencia de procesos",
        "Minimización de riesgos tecnológicos",
        "Optimización de inversiones en IT",
        "Alineación de IT con objetivos de negocio",
        "Mejora en la toma de decisiones",
        "Modernización tecnológica efectiva",
        "Ventaja competitiva sostenible"
      ]}
      technologies={[
        {
          category: "Herramientas de Análisis",
          items: ["Enterprise Architect", "ARIS", "Visio", "Lucidchart"]
        },
        {
          category: "Gestión de Proyectos",
          items: ["Jira", "Microsoft Project", "Trello", "Asana"]
        },
        {
          category: "Análisis de Datos",
          items: ["Power BI", "Tableau", "Qlik", "Looker"]
        },
        {
          category: "Seguridad",
          items: ["Nessus", "Metasploit", "Wireshark", "Burp Suite"]
        },
        {
          category: "Automatización",
          items: ["Ansible", "Puppet", "Chef", "Terraform"]
        }
      ]}
      methodologies={[
        "TOGAF",
        "ITIL v4",
        "COBIT 2019",
        "Lean IT",
        "Six Sigma para IT"
      ]}
    />
  );
};

export default ConsultoriaIT;
