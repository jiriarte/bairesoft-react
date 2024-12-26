import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import CookieConsent from './components/CookieConsent';
import FontOptimizer from './components/FontOptimizer';
import ResourceOptimizer from './components/ResourceOptimizer';

// Lazy loaded components
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const DesarrolloWeb = lazy(() => import('./pages/Services/pages/DesarrolloWeb'));
const AplicacionesWeb = lazy(() => import('./pages/Services/pages/AplicacionesWeb'));
const AppsMoviles = lazy(() => import('./pages/Services/pages/AppsMoviles'));
const LowCode = lazy(() => import('./pages/Services/pages/LowCode'));
const IAMachineLearning = lazy(() => import('./pages/Services/pages/IAMachineLearning'));
const ConsultoriaIT = lazy(() => import('./pages/Services/pages/ConsultoriaIT'));
const Projects = lazy(() => import('./pages/Projects'));
const EcommercePlatform = lazy(() => import('./pages/Projects/pages/EcommercePlatform'));
const AppGestion = lazy(() => import('./pages/Projects/pages/AppGestion'));
const IoTDashboard = lazy(() => import('./pages/Projects/pages/IoTDashboard'));
const ERPIndustrial = lazy(() => import('./pages/Projects/pages/ERPIndustrial'));
const SistemaReservas = lazy(() => import('./pages/Projects/pages/SistemaReservas'));
const PlataformaEducativa = lazy(() => import('./pages/Projects/pages/PlataformaEducativa'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Insights = lazy(() => import('./pages/Insights'));
const InnovacionDigital = lazy(() => import('./pages/Insights/InnovacionDigital'));
const TransformacionEmpresarial = lazy(() => import('./pages/Insights/TransformacionEmpresarial'));
const TendenciasTecnologicas = lazy(() => import('./pages/Insights/TendenciasTecnologicas'));
const PoliticaPrivacidad = lazy(() => import('./pages/PoliticaPrivacidad'));
const PoliticaCookies = lazy(() => import('./pages/PoliticaCookies'));
const TerminosServicio = lazy(() => import('./pages/TerminosServicio'));

function App() {
  return (
    <HelmetProvider>
      <FontOptimizer />
      <ResourceOptimizer />
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Navbar />
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/desarrollo-web" element={<DesarrolloWeb />} />
                <Route path="/services/aplicaciones-web" element={<AplicacionesWeb />} />
                <Route path="/services/apps-moviles" element={<AppsMoviles />} />
                <Route path="/services/low-code" element={<LowCode />} />
                <Route path="/services/ia-machine-learning" element={<IAMachineLearning />} />
                <Route path="/services/consultoria-it" element={<ConsultoriaIT />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/e-commerce-platform" element={<EcommercePlatform />} />
                <Route path="/projects/app-de-gestion" element={<AppGestion />} />
                <Route path="/projects/iot-dashboard" element={<IoTDashboard />} />
                <Route path="/projects/erp-industrial" element={<ERPIndustrial />} />
                <Route path="/projects/sistema-de-reservas" element={<SistemaReservas />} />
                <Route path="/projects/plataforma-educativa" element={<PlataformaEducativa />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/innovacion-digital" element={<InnovacionDigital />} />
                <Route path="/insights/transformacion-empresarial" element={<TransformacionEmpresarial />} />
                <Route path="/insights/tendencias-tecnologicas" element={<TendenciasTecnologicas />} />
                <Route path="/privacy-policy" element={<PoliticaPrivacidad />} />
                <Route path="/cookie-policy" element={<PoliticaCookies />} />
                <Route path="/terms-of-service" element={<TerminosServicio />} />
              </Routes>
            </Suspense>
            <CookieConsent />
          </Layout>
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
