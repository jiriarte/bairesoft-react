import React from 'react';
import ProjectPage from './ProjectPage';

const IoTDashboard = () => {
  return (
    <ProjectPage
      title="IoT Dashboard"
      description="Panel de control avanzado para monitoreo y gestión de dispositivos IoT con análisis en tiempo real y sistema de alertas inteligente."
      content={`
        Desarrollamos una solución IoT completa que permite monitorear y controlar miles de dispositivos en tiempo real. El sistema incluye:

        1. Monitoreo en tiempo real de dispositivos IoT
        2. Sistema de alertas inteligente basado en ML
        3. Visualización avanzada de datos con análisis predictivo
        4. Gestión remota de dispositivos
      `}
      features={[
        "Monitoreo en tiempo real",
        "Análisis predictivo de fallos",
        "Sistema de alertas inteligente",
        "Gestión remota de dispositivos",
        "Visualización de datos avanzada",
        "Histórico y análisis de tendencias",
        "Integración con múltiples protocolos IoT",
        "Seguridad end-to-end"
      ]}
      technologies={[
        {
          category: "Frontend",
          items: ["React", "D3.js", "WebSocket", "Three.js"]
        },
        {
          category: "Backend",
          items: ["Python", "FastAPI", "TimescaleDB", "Redis"]
        },
        {
          category: "IoT & Protocolos",
          items: ["MQTT", "CoAP", "LoRaWAN", "Zigbee"]
        },
        {
          category: "ML & Analytics",
          items: ["TensorFlow", "scikit-learn", "Apache Spark"]
        },
        {
          category: "Cloud & Edge",
          items: ["AWS IoT", "Azure IoT Hub", "Edge Computing"]
        }
      ]}
      results={[
        "Reducción del 80% en tiempo de respuesta a incidentes",
        "Predicción de fallos con 95% de precisión",
        "Ahorro del 40% en costos de mantenimiento",
        "Monitoreo de +10,000 dispositivos",
        "Disponibilidad del sistema 99.99%"
      ]}
      images={[
        "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      ]}
      client="Smart Industry Solutions"
      testimonial="El dashboard IoT ha transformado nuestra capacidad para monitorear y mantener nuestra infraestructura. La predicción de fallos nos ha permitido pasar de un mantenimiento reactivo a uno predictivo, resultando en ahorros significativos y mayor eficiencia operativa."
    />
  );
};

export default IoTDashboard;
