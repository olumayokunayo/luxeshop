import { useEffect, useState } from "react";
import { Award, Sparkles } from "lucide-react";

export default function MakeupAbout() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillLevels, setSkillLevels] = useState({
    bridal: 0,
    editorial: 0,
    special: 0,
    airbrush: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
        setSkillLevels({
          bridal: 95,
          editorial: 90,
          special: 88,
          airbrush: 92,
        });
      }
    });

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  const timelineEvents = [
    { year: "2015", event: "Started makeup artistry journey" },
    { year: "2017", event: "Professional certification completed" },
    { year: "2019", event: "First 100+ weddings milestone" },
    { year: "2023", event: "Award for Best Makeup Artist" },
  ];

  return (
    <section id="about" id-section="about-section" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>
            </div>

            <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
              <p>
                With over 8 years of experience in professional makeup artistry,
                I specialise in creating stunning looks for weddings,
                photoshoots, events, and special occasions.
              </p>
              <p>
                My passion is enhancing natural beauty while ensuring confidence
                shines through every application. Each client receives
                personalised attention and custom-created looks.
              </p>
              <p>
                Certified in advanced makeup techniques, I use only premium,
                cruelty-free products to ensure the best results and care for
                your skin.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-500">500+</div>
                <div className="text-sm text-neutral-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-500">8+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-500">4.9★</div>
                <div className="text-sm text-neutral-600">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-neutral-900 flex items-center space-x-2">
                <Sparkles className="w-6 h-6 text-rose-500" />
                <span>Professional Skills</span>
              </h3>

              {[
                { label: "Bridal Makeup", value: skillLevels.bridal },
                { label: "Editorial & Creative", value: skillLevels.editorial },
                { label: "Special Effects", value: skillLevels.special },
                { label: "Airbrush Techniques", value: skillLevels.airbrush },
              ].map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-neutral-700">
                      {skill.label}
                    </span>
                    <span className="text-rose-500 font-bold">
                      {skill.value}%
                    </span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-rose-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center space-x-2">
                <Award className="w-5 h-5 text-rose-500" />
                <span>Journey</span>
              </h3>
              <div className="space-y-4">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mt-2"></div>
                      {index < timelineEvents.length - 1 && (
                        <div className="w-0.5 h-12 bg-gradient-to-b from-rose-200 to-transparent"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-neutral-900">
                        {event.year}
                      </div>
                      <div className="text-neutral-600">{event.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
