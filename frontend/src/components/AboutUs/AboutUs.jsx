import bgImage from "../../assets/ngo.webp";
import founder1 from "../../assets/founder1.jpeg";
import founder2 from "../../assets/founder2.jpeg";
import founder3 from "../../assets/founder3.jpeg";

export default function AboutUs() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Welcome to Good Karma <br />
            Global Foundation <br />
            <span className="text-green-600 text-xl md:text-2xl">
              Established Since 2024
            </span>
          </h2>
        </div>

        {/* FOUNDERS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Founder Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition">
            <img
              src={founder1}
              alt=" Mr. Tawinder Pal Singh Girgla"
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                 Mr. Tawinder Pal Singh Girgla
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed text-start  ">
                Mr. Tawinder Pal Singh Girgla is a founder member of Good Karma Global Foundation and a  leading Real Estate professional of Navi Mumbai, known for helping people find not just houses, but homes filled with warmth and belonging. Beyond real estate, his life’s purpose extends to uplifting society by creating a healthy, compassionate environment for all. He believes that giving time to people is one of the greatest forms of service—listening, guiding, and standing by those in need. Deeply connected to nature, he works toward a better future by planting life-sustaining trees that provide oxygen, food, and shelter to birds and wildlife. His actions reflect a commitment to kindness, sustainability, and meaningful human connection.
              </p>
            </div>
          </div>

          {/* Founder Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition">
            <img
              src={founder2}
              alt=" Mr. Prashant Naik"
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                Mr. Prashant Naik
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed text-start">
                Mr. Prashant Naik is a founder member of Good Karma Global Foundation and a respected real estate developer based in Navi Mumbai. Deeply inspired by his father’s legacy as a philanthropist, Prashant carries forward the same spirit of compassion and service. While building spaces that shape cities, his true passion lies in touching lives and supporting those in need. He believes that real progress is measured by the good we do for others. Through Good Karma Global Foundation, he dedicates his time, resources, and vision to uplift communities, empower individuals, and create meaningful, people-centric change driven by empathy and purpose.
              </p>
            </div>
          </div>

          {/* Founder Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition">
            <img
              src={founder3}
              alt="Mrs. Harpreet Kaur Girgla"
              className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                  Mrs. Harpreet Kaur Girgla
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed text-start">
                Mrs. Harpreet Kaur Girgla is  a founder member  of Good Karma Global Foundation and a renowned tarot card reader, spiritual healer, life coach, and crystal therapist, known for her compassionate approach to transformation and well-being. She believes that true growth comes when we uplift others, and she lives by the principle of giving with an open heart. Deeply rooted in faith and service, her work focuses on helping individuals overcome challenges, heal emotionally, and reconnect with their inner strength. A strong advocate of women upliftment, she dedicates her time and energy to empowering women and supporting those in need. Through guidance, healing, and selfless service, she strives to create a more conscious, balanced, and compassionate world.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
