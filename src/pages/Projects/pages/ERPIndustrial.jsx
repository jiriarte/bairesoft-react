import React from 'react';
import ProjectPage from './ProjectPage';

const ERPIndustrial = () => {
  return (
    <ProjectPage
      title="ERP Industrial"
      description="Sistema ERP especializado para la industria manufacturera con integración IoT y análisis predictivo de producción."
      content={`
        Desarrollamos un sistema ERP industrial completo que integra todas las áreas del proceso productivo con tecnologías modernas:

        1. Gestión integral de la producción
        2. Control de calidad automatizado
        3. Mantenimiento predictivo con IoT
        4. Planificación de recursos y materiales
      `}
      features={[
        "Planificación de producción avanzada",
        "Control de inventario en tiempo real",
        "Gestión de mantenimiento predictivo",
        "Control de calidad automatizado",
        "Trazabilidad completa de productos",
        "Integración con maquinaria industrial",
        "Gestión de costos y presupuestos",
        "Reportes y análisis avanzados"
      ]}
      technologies={[
        {
          category: "Frontend",
          items: ["React", "Redux", "Material-UI", "WebGL"]
        },
        {
          category: "Backend",
          items: [".NET Core", "SQL Server", "SignalR"]
        },
        {
          category: "IoT & Automatización",
          items: ["OPC UA", "Modbus", "Azure IoT Edge"]
        },
        {
          category: "IA & Analytics",
          items: ["Azure ML", "Power BI", "Stream Analytics"]
        },
        {
          category: "Integración",
          items: ["Azure Service Bus", "RabbitMQ", "Apache Kafka"]
        }
      ]}
      results={[
        "Aumento del 35% en eficiencia productiva",
        "Reducción del 45% en tiempo de inactividad",
        "Mejora del 60% en precisión de inventario",
        "Reducción del 30% en costos de mantenimiento",
        "ROI alcanzado en 8 meses"
      ]}
      images={[
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
      ]}
      client="Manufacturing Excellence Corp"
      testimonial="La implementación del ERP industrial ha sido un punto de inflexión para nuestra empresa. La integración de IoT con el sistema ERP nos ha permitido alcanzar niveles de eficiencia que no creíamos posibles. El soporte y la capacidad de personalización han sido excepcionales."
    />
  );
};

export default ERPIndustrial;
