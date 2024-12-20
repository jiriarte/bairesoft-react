import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';
import CookieConsent from './components/CookieConsent';

// Lazy loaded components
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Insights = lazy(() => import('./pages/Insights'));
const InnovacionDigital = lazy(() => import('./pages/Insights/InnovacionDigital'));
const TransformacionEmpresarial = lazy(() => import('./pages/Insights/TransformacionEmpresarial'));
const TendenciasTecnologicas = lazy(() => import('./pages/Insights/TendenciasTecnologicas'));

// Project pages
const ERPIndustrial = lazy(() => import('./pages/Projects/erp-industrial'));
const SistemaDeReservas = lazy(() => import('./pages/Projects/sistema-de-reservas'));
const PlataformaEducativa = lazy(() => import('./pages/Projects/plataforma-educativa'));

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Navbar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/innovacion-digital" element={<InnovacionDigital />} />
              <Route path="/insights/transformacion-empresarial" element={<TransformacionEmpresarial />} />
              <Route path="/insights/tendencias-tecnologicas" element={<TendenciasTecnologicas />} />
              <Route path="/projects/erp-industrial" element={<ERPIndustrial />} />
              <Route path="/projects/sistema-de-reservas" element={<SistemaDeReservas />} />
              <Route path="/projects/plataforma-educativa" element={<PlataformaEducativa />} />
            </Routes>
          </Suspense>
          <CookieConsent />
          <Footer />
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
