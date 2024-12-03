import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <div className="min-h-screen bg-black">
          <ScrollToTop />
          <Navigation />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Gallery />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Footer />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;