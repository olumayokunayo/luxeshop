import { useState, useEffect } from "react";
import Navigation from "./components/MakeupNav";
import Hero from "./components/MakeupHero";
import About from "./components/MakeupAbout";
import Services from "./components/MakeupServices";
import Portfolio from "./components/MakeupPortfolio";
import Testimonials from "./components/MakeupTestimonials";
import Booking from "./components/MakeupBooking";
import Footer from "./components/MakeupFooter";
import NewsletterPopup from "./components/NewsletterPopup";

function App() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletter(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-rose-50 to-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Booking />
      <Footer />
      {showNewsletter && (
        <NewsletterPopup onClose={() => setShowNewsletter(false)} />
      )}
    </div>
  );
}

export default App;
