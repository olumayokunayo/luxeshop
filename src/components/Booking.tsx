import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, CheckCircle } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-24 bg-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Book Your Appointment
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600">
            Reserve your slot with Manchester's finest barbers
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Booking Request Received!
            </h3>
            <p className="text-neutral-600">
              We'll contact you shortly to confirm your appointment.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-neutral-700 font-semibold mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                  placeholder="07XXX XXXXXX"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-2">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="signature-haircut">
                    Signature Haircut - £28
                  </option>
                  <option value="beard-trim">Beard Trim & Shape - £18</option>
                  <option value="hot-shave">Traditional Hot Shave - £32</option>
                  <option value="full-works">The Full Works - £55</option>
                  <option value="skin-fade">Skin Fade - £30</option>
                  <option value="kids-cut">Kids Cut - £18</option>
                </select>
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-neutral-700 font-semibold mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                  <option value="18:00">06:00 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-amber-500 hover:bg-amber-600 text-neutral-900 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Request Appointment
            </button>

            <p className="text-center text-neutral-600 mt-4 text-sm">
              We'll confirm your booking within 24 hours
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
