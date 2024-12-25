import React from 'react';
import ServicePage from './ServicePage';

const AppsMoviles = () => {
  return (
    <ServicePage
      title="Apps Móviles"
      description="Desarrollamos aplicaciones móviles nativas y multiplataforma que proporcionan experiencias excepcionales en iOS y Android."
      content={`
        Nuestro servicio de desarrollo de aplicaciones móviles abarca tres enfoques principales para garantizar la mejor solución según tus necesidades:

        1. Desarrollo Nativo: Creamos aplicaciones optimizadas específicamente para iOS (Swift) y Android (Kotlin), maximizando el rendimiento y la experiencia de usuario.

        2. Desarrollo Multiplataforma: Utilizamos frameworks como React Native y Flutter para crear aplicaciones eficientes que funcionan en ambas plataformas con un único código base.

        3. Desarrollo Híbrido: Implementamos soluciones híbridas cuando se requiere un equilibrio entre rendimiento nativo y desarrollo rápido.
      `}
      features={[
        "Desarrollo nativo para iOS y Android",
        "Soluciones multiplataforma eficientes",
        "Integración con APIs y servicios en la nube",
        "Funcionalidad offline",
        "Notificaciones push",
        "Geolocalización y mapas",
        "Analíticas y seguimiento de usuarios",
        "Seguridad y encriptación de datos"
      ]}
      benefits={[
        "Presencia en las principales tiendas de apps",
        "Experiencia de usuario optimizada",
        "Mayor engagement con los usuarios",
        "Reducción de costos de desarrollo",
        "Time-to-market más rápido",
        "Actualizaciones simplificadas",
        "Alcance multiplataforma",
        "Escalabilidad y mantenimiento eficiente"
      ]}
      technologies={[
        {
          category: "Desarrollo iOS",
          items: ["Swift", "SwiftUI", "Objective-C", "Xcode"]
        },
        {
          category: "Desarrollo Android",
          items: ["Kotlin", "Java", "Jetpack Compose", "Android Studio"]
        },
        {
          category: "Multiplataforma",
          items: ["React Native", "Flutter", "Ionic", "Capacitor"]
        },
        {
          category: "Backend & APIs",
          items: ["Firebase", "AWS Amplify", "GraphQL", "REST APIs"]
        },
        {
          category: "Analíticas & Monitoreo",
          items: ["Firebase Analytics", "Crashlytics", "AppCenter", "Mixpanel"]
        }
      ]}
      methodologies={[
        "Mobile-First Design",
        "Desarrollo Ágil",
        "Test-Driven Development (TDD)",
        "Continuous Integration for Mobile",
        "User-Centered Design"
      ]}
    />
  );
};

export default AppsMoviles;
