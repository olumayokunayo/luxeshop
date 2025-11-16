import { useState } from "react";
import { Heart, Eye, Sparkles, Zap, Users, Film } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Bridal Makeup",
    price: "£150",
    description:
      "Complete bridal package with trial, touch-up kit, and professional photography-ready finish",
  },
  {
    icon: Eye,
    title: "Party & Events",
    price: "£80",
    description:
      "Glamorous makeup for nights out, parties, and special celebrations",
  },
  {
    icon: Film,
    title: "Photoshoot Makeup",
    price: "£100",
    description:
      "Editorial and creative makeup designed specifically for camera",
  },
  {
    icon: Sparkles,
    title: "Special Effects",
    price: "£120",
    description: "Theatrical, Halloween, and artistic special effects makeup",
  },
  {
    icon: Zap,
    title: "Airbrush Makeup",
    price: "£110",
    description:
      "Flawless airbrush application for long-lasting, camera-ready coverage",
  },
  {
    icon: Users,
    title: "Bridal Party Package",
    price: "From £600",
    description:
      "Complete makeup for bride + bridesmaids with coordinated looks",
  },
];

export default function MakeupServices() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-rose-50 via-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Premium makeup artistry tailored to your unique style and occasion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group h-80 perspective cursor-pointer"
              onClick={() => toggleFlip(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
                  flipped[index] ? "transform rotateY-180" : ""
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped[index]
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                }}
              >
                <div
                  className="absolute w-full h-full bg-white rounded-xl shadow-lg p-8 flex flex-col justify-between"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-4 rounded-lg">
                      <service.icon className="w-8 h-8 text-rose-600" />
                    </div>
                    <span className="text-2xl font-bold text-rose-500">
                      {service.price}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-center text-sm text-neutral-400 mt-4">
                    Click to see details
                  </div>
                </div>

                <div
                  className="absolute w-full h-full bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl shadow-lg p-8 flex flex-col justify-between text-white"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Professional application</li>
                      <li>✓ Premium products used</li>
                      <li>✓ Customized to your style</li>
                      <li>✓ Long-lasting results</li>
                      {service.title === "Bridal Makeup" && (
                        <>
                          <li>✓ Includes trial session</li>
                          <li>✓ Touch-up kit provided</li>
                        </>
                      )}
                      {service.title === "Bridal Party Package" && (
                        <>
                          <li>✓ Coordinated looks</li>
                          <li>✓ Group discount applied</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const element = document.getElementById("booking");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-white text-rose-600 font-bold py-2 px-4 rounded-lg hover:bg-rose-50 transition-all w-full mt-4"
                  >
                    Book This
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
