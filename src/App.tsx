import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import WholesaleInfo from './components/WholesaleInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <WhyChooseUs />
      <WholesaleInfo />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default App;
