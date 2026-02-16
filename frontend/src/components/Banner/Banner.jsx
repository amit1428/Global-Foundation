import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/food1.jpeg";
import banner3 from "../../assets/banner3.jpg";

const slides = [
  {
    image: banner1,
    title: "Make mid-day meals",
    highlight: "2.35 MILLION",
    subtitle: "Children",
  },
  {
    image: banner2,
    title: "Support Education",
    highlight: "Every Child",
    subtitle: "Deserves Food",
  },
  {
    image: banner3,
    title: "School Lunch Program",
    highlight: "#SchoolLunchForAll",
    subtitle: "Donate Today",
  },
];

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[82vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt="banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80" />

          <div className="absolute inset-0 flex items-center px-6 md:px-20">
            <div className="max-w-xl text-white space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
              <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-400">
                {slide.highlight}
              </h2>
              <p className="text-xl md:text-2xl font-semibold">
                {slide.subtitle}
              </p>
              <button className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-full rounded-full hover:bg-yellow-300 transition">
                <NavLink
                  to="/blogs"
                  className=" text-black px-5 py-2 rounded-full hover:bg-amber-400500 hover:transform-border"
                >
                  Donate Now
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full text-white"
      >
        <FaCircleChevronLeft size={28} />
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 p-2 rounded-full text-white"
      >
        <FaCircleChevronRight size={28} />
      </button>
    </div>
  );
}
