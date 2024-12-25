import React from 'react';
import ProjectPage from './ProjectPage';

const EcommercePlatform = () => {
  return (
    <ProjectPage
      title="E-commerce Platform"
      description="Plataforma de comercio electrónico moderna y escalable con gestión de inventario y pagos integrados."
      content={`
        Desarrollamos una plataforma de comercio electrónico completa y personalizada para satisfacer las necesidades específicas de nuestro cliente en el sector retail. La solución incluye:

        1. Sistema de gestión de inventario en tiempo real con múltiples almacenes
        2. Integración con pasarelas de pago locales e internacionales
        3. Panel de administración intuitivo para gestión de productos y pedidos
        4. Sistema de recomendaciones basado en IA
      `}
      features={[
        "Catálogo de productos con filtros avanzados",
        "Carrito de compras con persistencia",
        "Sistema de pagos multi-moneda",
        "Gestión de inventario en tiempo real",
        "Panel de administración completo",
        "Sistema de recomendaciones personalizado",
        "Integración con múltiples proveedores logísticos",
        "Análisis y reportes avanzados"
      ]}
      technologies={[
        {
          category: "Frontend",
          items: ["React", "Next.js", "Redux", "Styled Components"]
        },
        {
          category: "Backend",
          items: ["Node.js", "Express", "PostgreSQL", "Redis"]
        },
        {
          category: "Pagos",
          items: ["Stripe", "PayPal", "MercadoPago"]
        },
        {
          category: "Cloud & DevOps",
          items: ["AWS", "Docker", "Kubernetes", "CI/CD"]
        },
        {
          category: "Analytics",
          items: ["Google Analytics", "Hotjar", "Segment"]
        }
      ]}
      results={[
        "Incremento del 150% en ventas online",
        "Reducción del 40% en costos operativos",
        "Mejora del 60% en la tasa de conversión",
        "Tiempo de carga reducido en un 70%",
        "Aumento del 45% en el valor promedio del carrito"
      ]}
      images={[
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]}
      client="Retail Corp International"
      testimonial="La plataforma de e-commerce desarrollada por Bairesoft ha transformado completamente nuestra presencia digital. La implementación fue suave y el soporte continuo ha sido excepcional. Nuestras ventas online se han disparado y la gestión del negocio es ahora mucho más eficiente."
    />
  );
};

export default EcommercePlatform;
