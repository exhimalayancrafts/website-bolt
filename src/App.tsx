import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import { EditModeProvider } from './context/EditModeContext';
import Home from './pages/Home';
import About from './pages/About';
import Fibers from './pages/Fibers';
import Products from './pages/Products';
import Sourcing from './pages/Sourcing';
import Manufacturing from './pages/Manufacturing';
import Community from './pages/Community';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {!isAdmin && <Navbar />}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <Outlet />
      </main>
      {!isAdmin && <Footer />}
      <CookieConsent />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fibers" element={<Fibers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sourcing" element={<Sourcing />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/community" element={<Community />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <HashRouter>
      <EditModeProvider>
        <ScrollToTop />
        <AppRoutes />
      </EditModeProvider>
    </HashRouter>
  );
}

export default App;
