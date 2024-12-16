import ProjectDetail from '../../components/ProjectDetail';

const projectData = {
  title: "E-commerce Platform",
  image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  description: "Una plataforma de comercio electrónico completa y escalable diseñada para ofrecer una experiencia de compra excepcional. Integra gestión de inventario avanzada, procesamiento de pagos seguro y análisis en tiempo real para optimizar las ventas y la satisfacción del cliente.",
  features: [
    {
      title: "Gestión de Inventario",
      description: "Control en tiempo real del stock, múltiples almacenes y sincronización automática"
    },
    {
      title: "Procesamiento de Pagos",
      description: "Integración con múltiples pasarelas de pago y procesamiento seguro de transacciones"
    },
    {
      title: "Panel de Administración",
      description: "Interface intuitiva para gestionar productos, pedidos y clientes"
    },
    {
      title: "Análisis de Ventas",
      description: "Reportes detallados y métricas clave para la toma de decisiones"
    },
    {
      title: "Experiencia Personalizada",
      description: "Recomendaciones basadas en IA y contenido personalizado para cada usuario"
    },
    {
      title: "Optimización SEO",
      description: "Herramientas integradas para mejorar el posicionamiento en buscadores"
    }
  ],
  technologies: [
    "React",
    "Node.js",
    "MongoDB",
    "Redis",
    "Stripe",
    "AWS",
    "ElasticSearch",
    "Docker"
  ]
};

const EcommercePlatform = () => {
  return <ProjectDetail project={projectData} />;
};

export default EcommercePlatform;
