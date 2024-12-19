import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import CustomSoftware from './pages/CustomSoftware';
import PoliticaCookies from './pages/PoliticaCookies';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import CookieConsent from './components/CookieConsent';
import DesarrolloWeb from './pages/Services/DesarrolloWeb';
import AplicacionesWeb from './pages/Services/AplicacionesWeb';
import AppMoviles from './pages/Services/AppMoviles';
import LowCode from './pages/Services/LowCode';
import IAMachineLearning from './pages/Services/IAMachineLearning';
import ConsultoriaIT from './pages/Services/ConsultoriaIT';
import BlogPost from './pages/BlogPost';
import EcommercePlatform from './pages/Projects/e-commerce-platform';
import AppDeGestion from './pages/Projects/app-de-gestion';
import IoTDashboard from './pages/Projects/iot-dashboard';
import ERPIndustrial from './pages/Projects/erp-industrial';
import SistemaDeReservas from './pages/Projects/sistema-de-reservas';
import PlataformaEducativa from './pages/Projects/plataforma-educativa';
import AIChat from './components/AIChat';

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/desarrollo-web" element={<DesarrolloWeb />} />
              <Route path="/services/aplicaciones-web" element={<AplicacionesWeb />} />
              <Route path="/services/apps-moviles" element={<AppMoviles />} />
              <Route path="/services/low-code" element={<LowCode />} />
              <Route path="/services/ia-machine-learning" element={<IAMachineLearning />} />
              <Route path="/services/consultoria-it" element={<ConsultoriaIT />} />
              <Route path="/custom-software" element={<CustomSoftware />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/e-commerce-platform" element={<EcommercePlatform />} />
              <Route path="/projects/app-de-gestion" element={<AppDeGestion />} />
              <Route path="/projects/iot-dashboard" element={<IoTDashboard />} />
              <Route path="/projects/erp-industrial" element={<ERPIndustrial />} />
              <Route path="/projects/sistema-de-reservas" element={<SistemaDeReservas />} />
              <Route path="/projects/plataforma-educativa" element={<PlataformaEducativa />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/politica-cookies" element={<PoliticaCookies />} />
              <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            </Routes>
            <CookieConsent />
          </Layout>
        </ThemeProvider>
      </Router>
      <AIChat />
    </>
  );
}

export default App;
