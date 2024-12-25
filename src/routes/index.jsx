import { Routes, Route } from 'react-router-dom';
import Projects from '../pages/Projects';
import EcommercePlatform from '../pages/Projects/e-commerce-platform';
import AppDeGestion from '../pages/Projects/app-de-gestion';
import IoTDashboard from '../pages/Projects/iot-dashboard';
import ERPIndustrial from '../pages/Projects/erp-industrial';
import SistemaDeReservas from '../pages/Projects/sistema-de-reservas';
import PlataformaEducativa from '../pages/Projects/plataforma-educativa';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/e-commerce-platform" element={<EcommercePlatform />} />
      <Route path="/projects/app-de-gestion" element={<AppDeGestion />} />
      <Route path="/projects/iot-dashboard" element={<IoTDashboard />} />
      <Route path="/projects/erp-industrial" element={<ERPIndustrial />} />
      <Route path="/projects/sistema-de-reservas" element={<SistemaDeReservas />} />
      <Route path="/projects/plataforma-educativa" element={<PlataformaEducativa />} />
    </Routes>
  );
};

export default AppRoutes;
