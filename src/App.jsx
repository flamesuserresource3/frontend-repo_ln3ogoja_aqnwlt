import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
