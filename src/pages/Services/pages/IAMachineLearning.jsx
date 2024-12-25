import React from 'react';
import ServicePage from './ServicePage';

const IAMachineLearning = () => {
  return (
    <ServicePage
      title="IA y Machine Learning"
      description="Implementamos soluciones de Inteligencia Artificial y Machine Learning que transforman datos en insights accionables y automatización inteligente."
      content={`
        Nuestros servicios de IA y Machine Learning se centran en crear soluciones prácticas y efectivas que generan valor real para su negocio:

        1. Análisis Predictivo: Desarrollamos modelos que anticipan tendencias y comportamientos para mejorar la toma de decisiones.

        2. Automatización Inteligente: Implementamos sistemas que automatizan tareas complejas utilizando IA y procesamiento de lenguaje natural.

        3. Computer Vision: Creamos soluciones que procesan y analizan imágenes y video para diversos casos de uso empresariales.
      `}
      features={[
        "Modelos de machine learning personalizados",
        "Procesamiento de lenguaje natural (NLP)",
        "Análisis predictivo y prescriptivo",
        "Visión por computadora",
        "Chatbots y asistentes virtuales",
        "Automatización de procesos con IA",
        "Análisis de sentimientos",
        "Sistemas de recomendación"
      ]}
      benefits={[
        "Mejora en la toma de decisiones",
        "Automatización de tareas complejas",
        "Reducción de costos operativos",
        "Personalización mejorada",
        "Detección temprana de problemas",
        "Optimización de procesos",
        "Insights accionables",
        "Ventaja competitiva"
      ]}
      technologies={[
        {
          category: "Frameworks IA/ML",
          items: ["TensorFlow", "PyTorch", "scikit-learn", "Keras"]
        },
        {
          category: "Cloud IA",
          items: ["AWS SageMaker", "Azure ML", "Google AI Platform", "IBM Watson"]
        },
        {
          category: "NLP",
          items: ["BERT", "GPT", "spaCy", "NLTK"]
        },
        {
          category: "Computer Vision",
          items: ["OpenCV", "TensorFlow Object Detection", "Azure Computer Vision", "AWS Rekognition"]
        },
        {
          category: "Big Data",
          items: ["Apache Spark", "Hadoop", "Kafka", "Databricks"]
        }
      ]}
      methodologies={[
        "MLOps",
        "Desarrollo Ágil para IA",
        "Experimentación Continua",
        "Validación Cruzada",
        "Monitoreo de Modelos en Producción"
      ]}
    />
  );
};

export default IAMachineLearning;
