import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';
import ErrorBoundary from './components/ErrorBoundary';
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
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
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
        <ErrorBoundary
          fallback={
            <div className="min-h-screen flex items-center justify-center px-6 bg-stone-50">
              <div className="text-center max-w-sm">
                <p className="font-sans text-[10px] tracking-widest uppercase text-stone-400 mb-4">Error</p>
                <h1 className="font-serif text-3xl font-light text-stone-900 mb-4">Application error</h1>
                <p className="font-sans text-sm text-stone-500 leading-relaxed mb-8">
                  Something went wrong. Please refresh the page.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="font-sans text-sm text-stone-100 bg-stone-900 hover:bg-stone-700 transition-colors px-6 py-3"
                >
                  Refresh page
                </button>
              </div>
            </div>
          }
        >
          <ScrollToTop />
          <AppRoutes />
        </ErrorBoundary>
      </EditModeProvider>
    </HashRouter>
  );
}

export default App;
