import { Scissors, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold">The Sharp Cut</span>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Manchester's premier barbershop, delivering exceptional grooming
              services since 2015. Where traditional craftsmanship meets modern
              style.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-amber-500 p-3 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-amber-500 p-3 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-neutral-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-amber-500 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="hover:text-amber-500 transition-colors"
                >
                  Book Now
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-3 text-neutral-400">
              <li>
                <div className="font-semibold text-white">Mon - Fri</div>
                <div>9:00 AM - 7:00 PM</div>
              </li>
              <li>
                <div className="font-semibold text-white">Saturday</div>
                <div>9:00 AM - 6:00 PM</div>
              </li>
              <li>
                <div className="font-semibold text-white">Sunday</div>
                <div>10:00 AM - 4:00 PM</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} The Sharp Cut. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
