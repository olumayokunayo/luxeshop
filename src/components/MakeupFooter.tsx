import {
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function MakeupFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-rose-500" />
              <span className="text-2xl font-bold">Luxe Makeup</span>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Premium makeup artistry for weddings, photoshoots, and special
              events. Professional, creative, and timeless.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-rose-500 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-rose-500 p-3 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-rose-500 p-3 rounded-full transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-neutral-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-rose-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-rose-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-rose-500 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="hover:text-rose-500 transition-colors"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-rose-500" />
                <span>+44 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-rose-500" />
                <span>hello@luxemakeup.co.uk</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-rose-500 mt-1" />
                <span>London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Luxe Makeup. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-rose-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-rose-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
