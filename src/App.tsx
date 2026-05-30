import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Fibers from './pages/Fibers';
import Products from './pages/Products';
import Sourcing from './pages/Sourcing';
import Manufacturing from './pages/Manufacturing';
import Community from './pages/Community';
import Activities from './pages/Activities';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-stone-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fibers" element={<Fibers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sourcing" element={<Sourcing />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/community" element={<Community />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
