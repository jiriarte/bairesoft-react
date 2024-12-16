import ProjectDetail from '../../components/ProjectDetail';

const projectData = {
  title: "Plataforma Educativa",
  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  description: "Plataforma de aprendizaje en línea moderna que ofrece una experiencia educativa interactiva y personalizada. Incluye herramientas para la creación de contenido, seguimiento del progreso y evaluación del aprendizaje.",
  features: [
    {
      title: "Gestión de Cursos",
      description: "Creación y organización de contenido educativo multimedia"
    },
    {
      title: "Aulas Virtuales",
      description: "Espacios de aprendizaje interactivo con videoconferencia"
    },
    {
      title: "Sistema de Evaluación",
      description: "Herramientas para crear y gestionar evaluaciones"
    },
    {
      title: "Seguimiento de Progreso",
      description: "Monitoreo detallado del avance de los estudiantes"
    },
    {
      title: "Recursos Interactivos",
      description: "Biblioteca de recursos educativos multimedia"
    },
    {
      title: "Gamificación",
      description: "Sistema de recompensas y logros para motivar el aprendizaje"
    }
  ],
  technologies: [
    "React",
    "Node.js",
    "PostgreSQL",
    "WebRTC",
    "AWS",
    "Firebase",
    "Socket.io",
    "TensorFlow"
  ]
};

const PlataformaEducativa = () => {
  return <ProjectDetail project={projectData} />;
};

export default PlataformaEducativa;
