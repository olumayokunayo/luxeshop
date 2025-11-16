import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function MakeupHero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white text-shadow-lg">
              Professional Makeup{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300">
                for Every Occasion
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
              Luxury makeup artistry that transforms confidence and celebrates
              your unique beauty
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-2xl text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 duration-300 shadow-lg"
            >
              Book Now
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="border-2 border-white hover:bg-white hover:text-neutral-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 duration-300"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white hover:text-rose-300 transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
