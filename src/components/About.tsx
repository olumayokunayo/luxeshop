import { Award, Users, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900">
                About The Sharp Cut
              </h2>
              <div className="w-24 h-1 bg-amber-500"></div>
            </div>

            <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
              <p>
                Established in 2015, The Sharp Cut has become Manchester's
                premier destination for traditional barbering with a modern
                twist. Our team of highly skilled barbers brings over 50 years
                of combined experience to every cut.
              </p>
              <p>
                We specialise in classic cuts, contemporary styles, and
                traditional hot towel shaves. Whether you're after a sharp fade,
                a textured crop, or a perfectly groomed beard, we've got you
                covered.
              </p>
              <p>
                Our mission is simple: provide exceptional grooming services in
                a welcoming environment where every client leaves looking and
                feeling their absolute best.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Award className="w-10 h-10 text-amber-500" />
                </div>
                <div className="font-bold text-2xl text-neutral-900">50+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Users className="w-10 h-10 text-amber-500" />
                </div>
                <div className="font-bold text-2xl text-neutral-900">5000+</div>
                <div className="text-sm text-neutral-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <Clock className="w-10 h-10 text-amber-500" />
                </div>
                <div className="font-bold text-2xl text-neutral-900">9</div>
                <div className="text-sm text-neutral-600">Years Trading</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Barber shop interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
