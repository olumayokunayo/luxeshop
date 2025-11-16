import { useState, useEffect } from "react";
import { X } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    category: "Bridal",
    image:
      "https://images.pexels.com/photos/3945681/pexels-photo-3945681.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Classic Bridal Look",
  },
  {
    id: 2,
    category: "Photoshoots",
    image:
      "https://images.pexels.com/photos/3783221/pexels-photo-3783221.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Editorial Gold",
  },
  {
    id: 3,
    category: "Events",
    image:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Glamorous Evening",
  },
  {
    id: 4,
    category: "Bridal",
    image:
      "https://images.pexels.com/photos/3945682/pexels-photo-3945682.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Romantic Bride",
  },
  {
    id: 5,
    category: "Photoshoots",
    image:
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Fashion Forward",
  },
  {
    id: 6,
    category: "Events",
    image:
      "https://images.pexels.com/photos/3945680/pexels-photo-3945680.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Party Perfection",
  },
  {
    id: 7,
    category: "Special Effects",
    image:
      "https://images.pexels.com/photos/3807519/pexels-photo-3807519.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Artistic Creation",
  },
  {
    id: 8,
    category: "Bridal",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Modern Bride",
  },
];

export default function MakeupPortfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof portfolioItems)[0] | null
  >(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    "All",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
    if (selectedImage) {
      const nextItem =
        filtered[(filtered.indexOf(selectedImage) + 1) % filtered.length];
      setSelectedImage(nextItem);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    if (selectedImage) {
      const prevItem =
        filtered[
          (filtered.indexOf(selectedImage) - 1 + filtered.length) %
            filtered.length
        ];
      setSelectedImage(prevItem);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="portfolio" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Explore my collection of stunning makeup looks
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
                filter === cat
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-rose-300 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in-up p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-rose-400 transition-colors z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
            <button
              onClick={handlePrev}
              className="text-white hover:text-rose-400 transition-colors p-2 lg:p-4 hover:bg-white/10 rounded-full"
            >
              ←
            </button>

            <div className="flex-1 mx-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-cover rounded-lg"
              />
              <div className="mt-4 text-white text-center">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-rose-300">{selectedImage.category}</p>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="text-white hover:text-rose-400 transition-colors p-2 lg:p-4 hover:bg-white/10 rounded-full"
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
