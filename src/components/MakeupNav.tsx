import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function MakeupNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-2 cursor-pointer animate-fade-in-down"
            onClick={() => scrollToSection("hero")}
          >
            <Sparkles className="w-7 h-7 text-rose-500" />
            <span
              className={`text-2xl font-bold ${
                scrolled ? "text-neutral-900" : "text-white"
              }`}
            >
              Luxe Makeup
            </span>
          </div>

          <div
            className={`hidden md:flex space-x-8 ${
              scrolled ? "text-neutral-700" : "text-white"
            }`}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-rose-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-rose-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="hover:text-rose-500 transition-colors font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-rose-500 transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-lg px-6 py-2 rounded-full font-semibold text-white transition-all transform hover:scale-105"
            >
              Book Now
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X
                className={`w-6 h-6 ${
                  scrolled ? "text-neutral-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  scrolled ? "text-neutral-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-rose-100 animate-fade-in-down">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-neutral-700 hover:text-rose-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-neutral-700 hover:text-rose-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-2 text-neutral-700 hover:text-rose-500 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-2 text-neutral-700 hover:text-rose-500 transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 rounded-full font-semibold text-white transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
