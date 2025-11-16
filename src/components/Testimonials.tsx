import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    location: "Manchester",
    rating: 5,
    text: "Absolutely brilliant service. The barbers are true professionals who take their time to get every detail right. Best haircut I've had in years.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "David Thompson",
    location: "Salford",
    rating: 5,
    text: "The Sharp Cut is my go-to barber shop. Great atmosphere, skilled barbers, and they always deliver exactly what I want. Highly recommend the hot shave!",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Marcus Reid",
    location: "Trafford",
    rating: 5,
    text: "Top-notch service every single time. The attention to detail is impressive, and the team really knows their craft. Worth every penny.",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Oliver Harrison",
    location: "Stockport",
    rating: 5,
    text: "Been coming here for 3 years and never disappointed. Professional, friendly, and always leave looking sharp. The best barbers in Manchester.",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Ryan Cooper",
    location: "Manchester",
    rating: 5,
    text: "Exceptional experience from start to finish. The barbers really listen and deliver exactly what you ask for. Clean shop, great vibes, brilliant cuts.",
    image:
      "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Don't just take our word for it – hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-neutral-400 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <p className="text-neutral-300 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-400 text-lg">
            Over 500 five-star reviews on Google and Trustpilot
          </p>
        </div>
      </div>
    </section>
  );
}
