import React from 'react';
import { Helmet } from 'react-helmet-async';

const FontOptimizer = () => {
  return (
    <Helmet>
      {/* Precargar fuentes críticas */}
      <link
        rel="preload"
        href="/fonts/Inter-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Inter-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Optimización de fuentes */}
      <style>
        {`
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/fonts/Inter-Regular.woff2') format('woff2');
          }

          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url('/fonts/Inter-Bold.woff2') format('woff2');
          }
        `}
      </style>
    </Helmet>
  );
};

export default FontOptimizer;
