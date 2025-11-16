import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, CheckCircle } from "lucide-react";

export default function MakeupBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/bookings`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({
            client_name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service_type: formData.service,
            booking_date: formData.date,
            booking_time: formData.time,
            status: "pending",
          }),
        }
      );

      if (response.ok) {
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
      }
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsLoading(false);
    }
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
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
            Book Your Appointment
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-neutral-600">
            Reserve your spot and let's create something beautiful
          </p>
        </div>

        {submitted ? (
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl shadow-xl p-12 text-center animate-scale-in">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-neutral-900 mb-2">
              Booking Confirmed!
            </h3>
            <p className="text-neutral-600 text-lg">
              I've received your booking request and will contact you within 24
              hours to confirm the appointment.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fade-in-up">
                <label className="block text-neutral-700 font-semibold mb-2">
                  <User className="w-4 h-4 inline mr-2 text-rose-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors bg-white"
                  placeholder="Your name"
                />
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                <label className="block text-neutral-700 font-semibold mb-2">
                  <Mail className="w-4 h-4 inline mr-2 text-rose-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors bg-white"
                  placeholder="you@example.com"
                />
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <label className="block text-neutral-700 font-semibold mb-2">
                  <Phone className="w-4 h-4 inline mr-2 text-rose-500" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors bg-white"
                  placeholder="07XXX XXXXXX"
                />
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <label className="block text-neutral-700 font-semibold mb-2">
                  Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="Bridal Makeup">Bridal Makeup - £150</option>
                  <option value="Party & Events">Party & Events - £80</option>
                  <option value="Photoshoot Makeup">
                    Photoshoot Makeup - £100
                  </option>
                  <option value="Special Effects">
                    Special Effects - £120
                  </option>
                  <option value="Airbrush Makeup">
                    Airbrush Makeup - £110
                  </option>
                  <option value="Bridal Party">
                    Bridal Party Package - From £600
                  </option>
                </select>
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <label className="block text-neutral-700 font-semibold mb-2">
                  <Calendar className="w-4 h-4 inline mr-2 text-rose-500" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors bg-white"
                />
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "500ms" }}
              >
                <label className="block text-neutral-700 font-semibold mb-2">
                  <Clock className="w-4 h-4 inline mr-2 text-rose-500" />
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a time</option>
                  {[9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((hour) => (
                    <option key={hour} value={`${hour}:00`}>
                      {hour < 12 ? hour : hour - 12}:00{" "}
                      {hour < 12 ? "AM" : "PM"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-8 bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-2xl text-white py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Booking..." : "Reserve Appointment"}
            </button>

            <p className="text-center text-neutral-600 mt-4 text-sm">
              I'll confirm your booking within 24 hours
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
