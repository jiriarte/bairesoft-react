import React from 'react';
import ProjectPage from './ProjectPage';

const PlataformaEducativa = () => {
  return (
    <ProjectPage
      title="Plataforma Educativa"
      description="Sistema de aprendizaje en línea con cursos interactivos, seguimiento personalizado y análisis de progreso basado en IA."
      content={`
        Desarrollamos una plataforma educativa moderna que combina lo mejor del e-learning con tecnologías avanzadas de seguimiento y personalización:

        1. Sistema de gestión de aprendizaje (LMS) completo
        2. Contenido interactivo y adaptativo
        3. Seguimiento personalizado del progreso
        4. Análisis de aprendizaje basado en IA
      `}
      features={[
        "Cursos interactivos multimedia",
        "Evaluaciones adaptativas",
        "Seguimiento personalizado",
        "Gamificación del aprendizaje",
        "Colaboración en tiempo real",
        "Analytics de aprendizaje",
        "Certificaciones digitales",
        "Integración con herramientas educativas"
      ]}
      technologies={[
        {
          category: "Frontend",
          items: ["React", "Redux", "WebRTC", "Three.js"]
        },
        {
          category: "Backend",
          items: ["Python Django", "PostgreSQL", "Redis", "Celery"]
        },
        {
          category: "E-learning",
          items: ["xAPI", "SCORM", "H5P", "Open edX"]
        },
        {
          category: "IA & Analytics",
          items: ["TensorFlow", "Learning Analytics", "Predictive Models"]
        },
        {
          category: "Multimedia",
          items: ["FFmpeg", "WebRTC", "Media Server", "CDN"]
        }
      ]}
      results={[
        "Aumento del 180% en engagement estudiantil",
        "Mejora del 45% en tasas de finalización",
        "Reducción del 60% en tiempo de creación de contenido",
        "Incremento del 75% en satisfacción del usuario",
        "Escalabilidad a +100,000 estudiantes activos"
      ]}
      images={[
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
      ]}
      client="Global Education Tech"
      testimonial="La plataforma educativa ha revolucionado nuestra forma de enseñar. La combinación de contenido interactivo, seguimiento personalizado y análisis de aprendizaje nos ha permitido ofrecer una experiencia educativa verdaderamente transformadora."
    />
  );
};

export default PlataformaEducativa;
