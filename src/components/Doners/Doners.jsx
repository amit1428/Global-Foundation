import { useEffect, useState } from "react";
import d1 from '../../assets/d1.avif'
import d2 from '../../assets/d2.jpg';
import d3 from '../../assets/d3.jpg';
import d4 from '../../assets/d4.avif';
import d5 from '../../assets/d5.webp';


// Fallback placeholder for external or missing images
// const placeholder = "https://via.placeholder.com/300";

const contributors = [
  {
    name: "Ms. Priyadarshini Nigam",
    role: "Head, CSR Newgen Software Technologies Ltd",
    image: d1,
    text: "The Good Karma Foundation’s implementation of the Mid-Day Meal Programme is a great initiative to address SDGs like Zero Hunger and Quality Education.",
  },
  {
    name: "Mr. Rahul Mehta",
    role: "CSR Director, TechNova Solutions Ltd",
    image: d2,
    text: "Supporting Good Karma Foundation’s has been a meaningful journey. The transparency and scale of impact make this initiative truly inspiring.",
  },
  {
    name: "Ms. Ananya Verma",
    role: "VP – Social Impact,HorizonWorks Pvt Ltd",
    image: d3,
    text: "A powerful model that combines nutrition with education. We are proud to be contributors to such a life-changing mission.",
  },
   {
    name: "Ms. Ritika Goyal",
    role: "St – Gurukul , SliverLine Pvt Ltd",
    image: d4,
    text: "A powerful model that combines nutrition with education. We are proud to be contributors to such a life-changing mission.",
  },
    {
    name: "Mr. Manav Sharma",
    role: "Manager – Rayat, Starpoints Labs Ltd",
    image: d5,
    text: "A powerful model that combines nutrition with education. We are proud to be contributors to such a life-changing mission.",
  },
];

export default function ContributorsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % contributors.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#2c5f87]  py-20 overflow-hidden">
      
      {/* Floating glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 text-gray-900 relative">
        
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
          Hear from our <span className="text-green-400">Biggest Contributors</span>
          <div className="w-16 h-1 bg-green-400 mx-auto mt-4 rounded-full" />
        </h2>

        {/* Slider */}
        <div className="flex flex-col md:flex-row items-center gap-10 transition-all duration-700">
          
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-40 group-hover:opacity-70 transition" />
            <img
              src={contributors[index].image}
              alt={contributors[index].name}
              className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl text-center md:text-left bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-green-400/20 transition">
            <p className="text-lg leading-relaxed mb-6 text-black">
              “{contributors[index].text}”
            </p>

            <h3 className="text-xl font-semibold text-gray-900">
              {contributors[index].name}
            </h3>
            <p className="text-sm text-gray-800">
              {contributors[index].role}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          {contributors.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i
                  ? "bg-green-400 scale-125"
                  : "bg-white/40 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() =>
            setIndex(index === 0 ? contributors.length - 1 : index - 1)
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-white/70 hover:text-green-400 transition"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setIndex((index + 1) % contributors.length)
          }
          className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl text-white/70 hover:text-green-400 transition"
        >
          ›
        </button>
      </div>

      <section className="relative bg-[#2f6f9e] overflow-hidden mt-5">
      
      {/* Glow effects */}
      <div className="absolute -left-32 top-1/2 w-96 h-56 bg-green-400/20 blur-3xl rounded-full -translate-y-1/2" />
      <div className="absolute right-0 top-0 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Text */}
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium leading-snug">
            The Best Way to Make a{" "}
            <span className="text-green-400 font-semibold">
              Difference in the Lives of Others
            </span>
          </h2>

          {/* Button */}
          <a
            href="/donate"
            className="group relative inline-flex items-center justify-center"
          >
            <span className="absolute inset-0 rounded-full bg-green-400 blur-lg opacity-60 group-hover:opacity-100 transition" />
            <span className="relative px-10 py-3 rounded-full bg-green-500 text-white font-semibold tracking-wide shadow-lg group-hover:scale-105 group-hover:shadow-green-500/50 transition-all duration-300">
              Help Us Make a Difference
            </span>
          </a>
        </div>
      </div>
    </section>
    </section>

    
  );
}



