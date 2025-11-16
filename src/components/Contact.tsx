import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600">
            Visit us or send us a message – we're here to help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Address</h4>
                    <p className="text-neutral-600">
                      45 Oldham Street
                      <br />
                      Northern Quarter
                      <br />
                      Manchester, M1 1JG
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Phone</h4>
                    <p className="text-neutral-600">0161 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-1">Email</h4>
                    <p className="text-neutral-600">info@thesharpcut.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-500 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-neutral-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">
                      Opening Hours
                    </h4>
                    <div className="text-neutral-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.0537353873987!2d-2.2356515!3d53.4831324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c0e8f1f5e5%3A0x5f1c5c5f1c5c5c5c!2sNorthern%20Quarter%2C%20Manchester!5e0!3m2!1sen!2suk!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Sharp Cut Location"
              ></iframe>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Send Us a Message
            </h3>

            {sent ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                <h4 className="text-xl font-bold text-green-700 mb-2">
                  Message Sent!
                </h4>
                <p className="text-green-600">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-neutral-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-900 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
