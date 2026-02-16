import React from "react";
import help from "../../assets/ngo.webp";
import { NavLink } from "react-router-dom";
const stats = [
  { title: "Over 4 Thousands", subtitle: "Meals Served" },
  { title: "Over 2.33 Thousands ", subtitle: "Children Benefited" },
  { title: "12 States", subtitle: "Across India" },
  { title: "38 Locations", subtitle: "Operational Kitchens" },
];

export default function Global() {
  return (
    <section className="bg-[#EAF4FD] py-16 px-6 md:px-12">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          How To Help- Good Karma - Global Foundation
        </h2>
        <div className="w-40 h-1 bg-green-500 mx-auto mt-3 rounded-full" />
      </div>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative group">
          <img
            src={help}
            alt=" Global"
            className="rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] leading-tight">
            Good Karma - Global Foundation
          </h1>

          <p className="mt-5 text-gray-700 leading-relaxed">
            Good Karma Global Foundation “Anna Daan Mahadaan” — The Gift of Food
            is the Gift of Life. At Good Karma Global Foundation, our Anna Daan
            initiative is dedicated to serving fresh, nutritious meals to
            underprivileged families and individuals in need. We believe that
            feeding someone is the purest act of compassion and humanity.
            Through your support, we distribute meals with dignity, love, and
            care — spreading hope, positivity, and good karma in every plate
            served. Join us. Sponsor a meal. Share the blessing.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            By providing nutritious meals, Good Karma - Global Foundation
            supports education, improves health outcomes, and empowers children
            from socio-economically challenged backgrounds to pursue their
            dreams.
          </p>

          {/* Vision & Mission */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4 hover:bg-white hover:shadow-md transition rounded-md py-2">
              <h3 className="font-semibold text-lg text-[#0B4F6C]">
                Our Vision
              </h3>
              <p className="text-gray-600 mt-2">
                No child in India shall be deprived of education because of
                hunger.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 hover:bg-white hover:shadow-md transition rounded-md py-2">
              <h3 className="font-semibold text-lg text-[#0B4F6C]">
                Our Mission
              </h3>
              <p className="text-gray-600 mt-2">
                Serving 3 million children with mid-day meals and morning
                nutrition by 2030.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 bg-[#0B4F6C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#08384E] hover:shadow-lg transition">
             <NavLink to='/gallary'>
              Read More
              </NavLink> 
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-bold text-green-600">{item.title}</h2>
            <p className="text-gray-600 mt-2">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
