# Bairesoft Website

Sitio web corporativo de Bairesoft, desarrollado con React y Vite.

## Características

- Vite + React - construcción ultrarrápida y rendimiento optimizado
- Diseño totalmente responsive
- UI moderna y atractiva
- SEO optimizado
- PWA ready
- Implementación segura
- Soporte multiidioma
- Google Analytics integrado
- Gestión de cookies GDPR
- Rendimiento optimizado

## Tecnologías

- React 18
- Vite 4
- TailwindCSS
- React Router 6
- React Helmet Async
- React Query
- Framer Motion
- i18next

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/bairesoft/bairesoft-react.git

# Entrar al directorio
cd bairesoft-react

# Instalar dependencias
npm ci

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run lint` - Ejecuta el linter
- `npm test` - Ejecuta los tests

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_GA_TRACKING_ID=tu-id-de-google-analytics
VITE_SENTRY_DSN=tu-dsn-de-sentry
```

## Estructura del Proyecto

```
bairesoft-react/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── utils/
├── tests/
└── package.json
```

## Despliegue

La aplicación está configurada para desplegarse en Render.com. El despliegue se realiza automáticamente al hacer push a la rama main.

## License

[MIT](LICENSE)

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

## Contacto

Para más información, contacta con nosotros en [info@bairesoft.com](mailto:info@bairesoft.com)
