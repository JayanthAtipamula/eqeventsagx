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
import IntroSection from './components/IntroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UKWeddings from './components/services/UKWeddings';
import DestinationWeddings from './components/services/DestinationWeddings';
import LightingProduction from './components/services/LightingProduction';
import Dancefloors from './components/services/Dancefloors';
import EventsProduction from './components/services/EventsProduction';
import BespokeServices from './components/services/BespokeServices';
import LiveEntertainment from './components/services/LiveEntertainment';
import WeddingExtras from './components/services/WeddingExtras';
import Corporate from './components/services/Corporate';

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
                <Gallery />
                <IntroSection />
                <Services />
                <Testimonials />
                <Contact />
              </>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* Service Routes */}
            <Route path="/services/uk-weddings" element={<UKWeddings />} />
            <Route path="/services/destination-weddings" element={<DestinationWeddings />} />
            <Route path="/services/lighting-production" element={<LightingProduction />} />
            <Route path="/services/dancefloors" element={<Dancefloors />} />
            <Route path="/services/events-production" element={<EventsProduction />} />
            <Route path="/services/bespoke-services" element={<BespokeServices />} />
            <Route path="/services/live-entertainment" element={<LiveEntertainment />} />
            <Route path="/services/wedding-extras" element={<WeddingExtras />} />
            <Route path="/services/corporate" element={<Corporate />} />
          </Routes>
          <Footer />
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;