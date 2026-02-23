import { useEffect, useState } from "react";
import g1 from "../../assets/g1.jpg"
import g2 from "../../assets/g2.jpg";
import g3 from "../../assets/g3.jpg";

const stories = [
  {
    title: "Poetry and Purpose",
    subtitle: "Gayatri’s Aspiring Future",
    description:
      "Good Karma Golbal Foundation  supports Gayatri from Mumbai with daily meals, helping her stay focused on studies and dream of becoming a bank manager and poet.",
    image: g1,
    tag: "A Bank Manager in Making",
  },
  {
    title: "Education Changes Lives",
    subtitle: "Rahul’s Learning Journey",
    description:
      "With nutritious meals every day, Rahul now attends school regularly and dreams of becoming an engineer. also, his family is hopeful for a brighter future thanks to good Karma - Global Foundation 's support.",
    image: g2,
    tag: "Future Engineer",
  },
  {
    title: "Hope Beyond Hunger",
    subtitle: "Meena’s Bright Smile",
    description:
      "A simple meal has transformed Meena’s classroom experience and confidence. good Karma - Global Foundation  is proud to support her journey towards becoming a doctor. and bring hope to her family.",
    image: g3,
    tag: "Future Leader",
  },
];

export default function ImpactStories() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="relative w-full py-20 bg-gradient-to-br   overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-black mb-14">
        Impact <span className="text-green-400">Stories</span>
      </h2>

      <div
        className="max-w-6xl mx-auto px-6"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {stories.map((story, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-in-out ${
              index === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-10 items-center bg-gradient-to-br from-[#0F2027] backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-green-400/30 hover:-translate-y-2 transition-all duration-500">
              
              {/* Image */}
              <div className="relative group overflow-hidden rounded-2xl">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-[300px] md:h-[380px] object-cover transform group-hover:scale-110 transition duration-700"
                />
                <span className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {story.tag}
                </span>
              </div>

              {/* Content */}
              <div className="text-black">
                <h3 className="text-3xl font-bold mb-3">
                  {story.title}
                </h3>
                <h4 className="text-xl text-green-300 mb-4">
                  {story.subtitle}
                </h4>
                <p className="text-black leading-relaxed mb-6">
                  {story.description}
                </p>
                <button className="inline-flex items-center gap-2 text-red font-semibold hover:text-red-600 transition">
                  Be a Part of the Change
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-green-400 scale-125"
                  : "bg-white/40 hover:bg-green-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
