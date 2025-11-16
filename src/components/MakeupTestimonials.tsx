import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Emily Richardson",
    role: "Bride",
    rating: 5,
    text: "Absolutely stunning work! My makeup was perfect and lasted all day. The trial was so helpful and she listened to exactly what I wanted.",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Sophie Turner",
    role: "Editorial Client",
    rating: 5,
    text: "Professional, creative, and incredibly talented. The makeup was camera-ready and the colours were perfectly matched to the shoot aesthetic.",
    image:
      "https://images.pexels.com/photos/1441974/pexels-photo-1441974.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Jessica Lane",
    role: "Event Attendee",
    rating: 5,
    text: "Had my makeup done for a gala and received so many compliments! Felt confident and beautiful all night. Will definitely book again.",
    image:
      "https://images.pexels.com/photos/1080881/pexels-photo-1080881.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Amanda Brooks",
    role: "Bride",
    rating: 5,
    text: "Made me feel like the best version of myself. The attention to detail and professionalism was incredible. Highly recommended!",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    name: "Olivia Smith",
    role: "Photoshoot Model",
    rating: 5,
    text: "The makeup transformed my look completely! Every product was carefully selected and the application was flawless. Outstanding service!",
    image:
      "https://images.pexels.com/photos/1239498/pexels-photo-1239498.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export default function MakeupTestimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoScroll]);

  const scroll = (direction: "left" | "right") => {
    setAutoScroll(false);
    setCurrentIndex((prev) => {
      if (direction === "left") {
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      } else {
        return (prev + 1) % testimonials.length;
      }
    });
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-rose-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Client Reviews
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Hear from clients who trusted me with their special moments
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4 sm:px-8">
                  <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover mr-6"
                      />
                      <div>
                        <h3 className="font-bold text-xl text-neutral-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-rose-500 font-semibold">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-rose-500 text-rose-500"
                        />
                      ))}
                    </div>

                    <p className="text-neutral-700 text-lg leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-lg text-white p-3 rounded-full transition-all transform hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-lg text-white p-3 rounded-full transition-all transform hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoScroll(false);
                }}
                className={`transition-all ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 w-8"
                    : "bg-neutral-300 w-2"
                } h-2 rounded-full`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
