import ProjectDetail from '../../components/ProjectDetail';

const projectData = {
  title: "ERP Industrial",
  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  description: "Sistema ERP completo diseñado específicamente para el sector industrial, integrando gestión de producción, inventario, mantenimiento y control de calidad en una única plataforma.",
  features: [
    {
      title: "Planificación de Producción",
      description: "Programación y seguimiento de órdenes de producción"
    },
    {
      title: "Control de Inventario",
      description: "Gestión de materias primas, productos en proceso y terminados"
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Programación y seguimiento de mantenimientos de equipos"
    },
    {
      title: "Control de Calidad",
      description: "Gestión de pruebas y certificaciones de calidad"
    },
    {
      title: "Gestión de Costos",
      description: "Análisis y control de costos de producción"
    },
    {
      title: "Trazabilidad",
      description: "Seguimiento completo del proceso productivo"
    }
  ],
  technologies: [
    "React",
    ".NET Core",
    "SQL Server",
    "SignalR",
    "Azure",
    "Power BI",
    "Docker",
    "RabbitMQ"
  ]
};

const ERPIndustrial = () => {
  return <ProjectDetail project={projectData} />;
};

export default ERPIndustrial;
