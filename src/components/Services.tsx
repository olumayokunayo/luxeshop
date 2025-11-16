import { Scissors, Sparkles, Brush, Package } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Signature Haircut",
    price: "£28",
    description:
      "Professional cut with consultation, wash, and styling. Includes neck trim and hot towel finish.",
    duration: "45 mins",
  },
  {
    icon: Sparkles,
    name: "Beard Trim & Shape",
    price: "£18",
    description:
      "Expert beard trimming, shaping, and conditioning. Includes hot towel treatment and beard oil.",
    duration: "30 mins",
  },
  {
    icon: Brush,
    name: "Traditional Hot Shave",
    price: "£32",
    description:
      "Classic wet shave with hot towels, premium products, and facial massage for ultimate relaxation.",
    duration: "50 mins",
  },
  {
    icon: Package,
    name: "The Full Works",
    price: "£55",
    description:
      "Complete grooming package: haircut, beard trim, hot shave, facial treatment, and styling.",
    duration: "90 mins",
  },
  {
    icon: Scissors,
    name: "Skin Fade",
    price: "£30",
    description:
      "Precision fade with seamless blending. Low, mid, or high fade options available.",
    duration: "45 mins",
  },
  {
    icon: Sparkles,
    name: "Kids Cut",
    price: "£18",
    description:
      "Haircut for children under 12. Patient, friendly service in a relaxed environment.",
    duration: "30 mins",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            From classic cuts to contemporary styles, we offer a full range of
            grooming services for the modern gentleman
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-amber-500 p-3 rounded-lg">
                  <service.icon className="w-6 h-6 text-neutral-900" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neutral-900">
                    {service.price}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {service.duration}
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {service.name}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 text-lg">
            All services include complimentary beverages and Wi-Fi
          </p>
        </div>
      </div>
    </section>
  );
}
