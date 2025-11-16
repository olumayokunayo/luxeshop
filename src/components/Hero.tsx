import { Calendar, MapPin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white pt-20"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              The Best Barbers in{" "}
              <span className="text-amber-500">Manchester</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Professional haircuts, beard trims, and grooming for men & women
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("booking")}
              className="bg-amber-500 hover:bg-amber-600 text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Now</span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border-2 border-white hover:bg-white hover:text-neutral-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              View Services
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 text-neutral-300 pt-8">
            <MapPin className="w-5 h-5 text-amber-500" />
            <span className="text-lg">Northern Quarter, Manchester</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
