import React from 'react';
import ServicePage from './ServicePage';

const LowCode = () => {
  return (
    <ServicePage
      title="Soluciones Low-Code"
      description="Aceleramos el desarrollo de aplicaciones empresariales con plataformas low-code, manteniendo la calidad y flexibilidad del desarrollo tradicional."
      content={`
        Nuestro servicio de desarrollo low-code combina la velocidad de las plataformas modernas con las mejores prácticas de desarrollo para ofrecer soluciones empresariales de alta calidad:

        1. Desarrollo Acelerado: Utilizamos plataformas líderes como Genexus para reducir significativamente los tiempos de desarrollo y time-to-market.

        2. Integración Empresarial: Conectamos sus aplicaciones low-code con sistemas existentes y servicios en la nube de manera seamless.

        3. Personalización Avanzada: Extendemos las capacidades de las plataformas low-code con desarrollo tradicional cuando se requiere funcionalidad específica.
      `}
      features={[
        "Desarrollo 10x más rápido que el tradicional",
        "Integración con sistemas legacy",
        "Automatización de procesos empresariales",
        "Aplicaciones web y móviles desde una base de código",
        "Paneles de control y reportes personalizados",
        "Gestión de flujos de trabajo",
        "Seguridad empresarial integrada",
        "Escalabilidad cloud-native"
      ]}
      benefits={[
        "Reducción significativa en tiempo de desarrollo",
        "Menor costo total de propiedad (TCO)",
        "Adaptabilidad rápida a cambios del negocio",
        "Mantenimiento simplificado",
        "Menor dependencia de recursos técnicos",
        "Prototipado rápido de soluciones",
        "Integración empresarial simplificada",
        "ROI acelerado"
      ]}
      technologies={[
        {
          category: "Plataformas Low-Code",
          items: ["Genexus", "OutSystems", "Mendix", "Power Apps"]
        },
        {
          category: "Automatización",
          items: ["Power Automate", "Zapier", "UiPath", "Automation Anywhere"]
        },
        {
          category: "Bases de Datos",
          items: ["SQL Server", "Oracle", "PostgreSQL", "MongoDB"]
        },
        {
          category: "Integración",
          items: ["REST APIs", "SOAP", "MuleSoft", "Azure Logic Apps"]
        },
        {
          category: "DevOps",
          items: ["Azure DevOps", "Jenkins", "GitLab CI", "Docker"]
        }
      ]}
      methodologies={[
        "Desarrollo Ágil Adaptativo",
        "RAD (Rapid Application Development)",
        "Prototipado Evolutivo",
        "DevOps para Low-Code",
        "Metodología Genexus"
      ]}
    />
  );
};

export default LowCode;
