import React from 'react';
import ProjectPage from './ProjectPage';

const SistemaReservas = () => {
  return (
    <ProjectPage
      title="Sistema de Reservas"
      description="Plataforma moderna de reservas online para restaurantes y servicios con gestión inteligente de disponibilidad y sistema de recomendaciones."
      content={`
        Desarrollamos una plataforma de reservas flexible y escalable que se adapta a diferentes tipos de negocios:

        1. Sistema de reservas en tiempo real
        2. Gestión inteligente de disponibilidad
        3. Motor de recomendaciones personalizado
        4. Integración con múltiples canales de venta
      `}
      features={[
        "Reservas en tiempo real",
        "Gestión de disponibilidad automática",
        "Sistema de notificaciones multicanal",
        "Panel de administración intuitivo",
        "Integración con calendarios",
        "Sistema de recomendaciones IA",
        "Analytics y reportes detallados",
        "Gestión de reseñas y feedback"
      ]}
      technologies={[
        {
          category: "Frontend",
          items: ["Vue.js", "Vuex", "Tailwind CSS", "PWA"]
        },
        {
          category: "Backend",
          items: ["Node.js", "MongoDB", "Redis", "Socket.io"]
        },
        {
          category: "Notificaciones",
          items: ["Firebase Cloud Messaging", "SendGrid", "Twilio"]
        },
        {
          category: "Integraciones",
          items: ["Google Calendar", "iCal", "Stripe", "PayPal"]
        },
        {
          category: "Analytics",
          items: ["Google Analytics", "Mixpanel", "Amplitude"]
        }
      ]}
      results={[
        "Incremento del 200% en reservas online",
        "Reducción del 80% en tiempo de gestión",
        "Mejora del 60% en satisfacción del cliente",
        "Reducción del 90% en errores de reserva",
        "Aumento del 40% en valor por cliente"
      ]}
      images={[
        "https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]}
      client="Restaurant Chain Solutions"
      testimonial="El sistema de reservas ha simplificado enormemente nuestras operaciones. La reducción en errores de reserva y la capacidad de gestionar múltiples locaciones desde una única plataforma nos ha permitido escalar nuestro negocio de manera eficiente."
    />
  );
};

export default SistemaReservas;
