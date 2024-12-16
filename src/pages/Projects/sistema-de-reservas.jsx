import ProjectDetail from '../../components/ProjectDetail';

const projectData = {
  title: "Sistema de Reservas",
  image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  description: "Plataforma de reservas online intuitiva y flexible para restaurantes y servicios. Incluye un calendario interactivo, gestión de disponibilidad en tiempo real y sistema de notificaciones automáticas.",
  features: [
    {
      title: "Calendario Interactivo",
      description: "Vista de calendario personalizable con gestión de disponibilidad"
    },
    {
      title: "Reservas en Tiempo Real",
      description: "Sistema de reservas instantáneo con confirmación automática"
    },
    {
      title: "Gestión de Disponibilidad",
      description: "Control de capacidad y horarios en tiempo real"
    },
    {
      title: "Notificaciones Automáticas",
      description: "Sistema de recordatorios y confirmaciones por email y SMS"
    },
    {
      title: "Panel de Administración",
      description: "Gestión completa de reservas, clientes y recursos"
    },
    {
      title: "Integración de Pagos",
      description: "Procesamiento de pagos y depósitos de garantía"
    }
  ],
  technologies: [
    "React",
    "Node.js",
    "MongoDB",
    "Socket.io",
    "Twilio",
    "Stripe",
    "AWS",
    "FullCalendar"
  ]
};

const SistemaDeReservas = () => {
  return <ProjectDetail project={projectData} />;
};

export default SistemaDeReservas;
