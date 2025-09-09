import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatsappChat from "@/components/WhatsappChat";
import Header from "./components/Header";
import Footer from "./components/Footer";

import BasicControlPanel from "./pages/BasicControlPanel";
import ControlPanelProductDetail from "./pages/ControlPanelProductDetail";
import CNCMachines from "./pages/CNCMachines";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Services Pages
import Designing from "./pages/services/Designing";
import Manufacturing from "./pages/services/Manufacturing";
import ElectricalElectronics from "./pages/services/ElectricalElectronics";
import AIML from "./pages/services/AIML";
import Development from "./pages/services/Development";

// Product Pages
import LinearActuators from "./pages/LinearActuators";
import ProductDetail from "./pages/ProductDetail";
import ControlPanels from "@/pages/ControlPanels";
import PlasticEnclosure from "./pages/plasticenclosure";
// Project Details Page
import ProjectDetails from "./pages/ProjectDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Header />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/designing" element={<Designing />} />
          <Route path="/services/manufacturing" element={<Manufacturing />} />
          <Route
            path="/services/electrical-electronics"
            element={<ElectricalElectronics />}
          />
          <Route path="/services/ai-ml" element={<AIML />} />
          <Route path="/services/development" element={<Development />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/linear-actuators" element={<LinearActuators />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/products/control-panels" element={<ControlPanels />} />
          <Route path="/control-panels" element={<ControlPanels />} />
          <Route path="/control-panels/basic" element={<BasicControlPanel />} />
          <Route
            path="/products/control-panel/:id"
            element={<ControlPanelProductDetail />}
          />
          <Route path="/products/cnc-machines" element={<CNCMachines />} />
          <Route path="/products/plastic-enclosure" element={<PlasticEnclosure />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

        {/* Add Chatbot here so it shows on all pages */}
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
