import ProjectDetail from '../../components/ProjectDetail';

const projectData = {
  title: "IoT Dashboard",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  description: "Un panel de control avanzado para dispositivos IoT que permite monitorear, controlar y analizar datos en tiempo real. Incluye sistemas de alertas inteligentes y visualizaciones interactivas para una mejor toma de decisiones.",
  features: [
    {
      title: "Monitoreo en Tiempo Real",
      description: "Visualización en vivo de datos de sensores y dispositivos IoT"
    },
    {
      title: "Sistema de Alertas",
      description: "Notificaciones personalizables basadas en umbrales y condiciones"
    },
    {
      title: "Análisis Predictivo",
      description: "Algoritmos de ML para predecir fallos y optimizar mantenimiento"
    },
    {
      title: "Gestión de Dispositivos",
      description: "Control remoto y configuración de dispositivos IoT"
    },
    {
      title: "Visualización de Datos",
      description: "Gráficos interactivos y mapas de calor para análisis de datos"
    },
    {
      title: "Integración API",
      description: "APIs RESTful para integración con sistemas externos"
    }
  ],
  technologies: [
    "React",
    "Node.js",
    "InfluxDB",
    "MQTT",
    "TensorFlow",
    "WebSocket",
    "AWS IoT",
    "Grafana"
  ]
};

const IoTDashboard = () => {
  return <ProjectDetail project={projectData} />;
};

export default IoTDashboard;
