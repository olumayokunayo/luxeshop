import { X, Mail } from "lucide-react";
import { useState } from "react";

export default function NewsletterPopup({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/newsletter_subscribers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      if (response.ok || response.status === 409) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Newsletter signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in-up p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors bg-neutral-100 hover:bg-neutral-200 p-2 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-br from-rose-500 to-pink-500 p-8 text-white text-center">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Stay Updated</h2>
          <p className="text-rose-100">
            Get exclusive offers and makeup tips delivered to your inbox
          </p>
        </div>

        <div className="p-8">
          {submitted ? (
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-green-600">✓</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Welcome!
              </h3>
              <p className="text-neutral-600">
                Check your email for exclusive offers
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border-2 border-rose-200 rounded-lg focus:border-rose-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:shadow-lg text-white py-3 rounded-lg font-bold transition-all transform hover:scale-105 disabled:opacity-50"
              >
                {isLoading ? "Subscribing..." : "Subscribe Now"}
              </button>
              <p className="text-xs text-neutral-500 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
