import { Scissors, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-neutral-900 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Scissors className="w-8 h-8 text-amber-500" />
            <span className="text-2xl font-bold tracking-tight">
              The Sharp Cut
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-amber-500 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-amber-500 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:text-amber-500 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-amber-500 transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded-md font-semibold text-neutral-900 transition-colors"
            >
              Book Now
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neutral-800 border-t border-neutral-700">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 hover:text-amber-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 hover:text-amber-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left py-2 hover:text-amber-500 transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-2 hover:text-amber-500 transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="w-full bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-md font-semibold text-neutral-900 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
