import React from 'react';
import { Helmet } from 'react-helmet-async';

const ResourceOptimizer = () => {
  return (
    <Helmet>
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Preconexiones */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Precargar recursos críticos */}
      <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
      
      {/* Optimizaciones de rendimiento */}
      <meta httpEquiv="Accept-CH" content="DPR, Width, Viewport-Width" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      
      {/* Optimizaciones de caché */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      
      {/* PWA */}
      <meta name="theme-color" content="#0070F3" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Optimizaciones de rendimiento adicionales */}
      <script type="text/javascript">
        {`
          // Detectar soporte de WebP
          const checkWebP = new Promise((resolve) => {
            const webP = new Image();
            webP.onload = webP.onerror = () => {
              resolve(webP.height === 2);
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
          }).then((hasWebP) => {
            if (hasWebP) {
              document.documentElement.classList.add('webp');
            }
          });

          // Detectar conexión lenta
          if ('connection' in navigator) {
            if (navigator.connection.saveData) {
              document.documentElement.classList.add('save-data');
            }
            if (['slow-2g', '2g', '3g'].includes(navigator.connection.effectiveType)) {
              document.documentElement.classList.add('slow-connection');
            }
          }

          // Precarga de recursos en tiempo libre
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
              // Precargar imágenes de fondo
              const images = ['/images/hero-bg.jpg', '/images/about-bg.jpg'];
              images.forEach((src) => {
                const img = new Image();
                img.src = src;
              });
            });
          }
        `}
      </script>
    </Helmet>
  );
};

export default ResourceOptimizer;
