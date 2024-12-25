import ProjectDetail from '../../components/ProjectDetail';

const projectData = {
  title: "App de Gestión",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  description: "Una aplicación empresarial integral que simplifica la gestión de recursos y procesos empresariales. Ofrece análisis de datos en tiempo real, automatización de flujos de trabajo y herramientas de colaboración para mejorar la eficiencia operativa.",
  features: [
    {
      title: "Dashboard Personalizable",
      description: "Visualización de KPIs y métricas importantes en tiempo real"
    },
    {
      title: "Gestión de Proyectos",
      description: "Seguimiento de tareas, plazos y recursos con metodologías ágiles"
    },
    {
      title: "Automatización de Procesos",
      description: "Flujos de trabajo automatizados y reglas de negocio personalizables"
    },
    {
      title: "Reportes Avanzados",
      description: "Generación de informes personalizados y análisis predictivo"
    },
    {
      title: "Gestión Documental",
      description: "Sistema centralizado para almacenar y gestionar documentos"
    },
    {
      title: "Colaboración en Tiempo Real",
      description: "Herramientas de comunicación y trabajo colaborativo integradas"
    }
  ],
  technologies: [
    "React",
    "TypeScript",
    "GraphQL",
    "PostgreSQL",
    "Redis",
    "Azure",
    "Power BI",
    "Docker"
  ]
};

const AppDeGestion = () => {
  return <ProjectDetail project={projectData} />;
};

export default AppDeGestion;
