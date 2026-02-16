// import { Heart, HandHelping, DollarSign } from "lucide-react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LuHandHelping, LuBadgeDollarSign } from "react-icons/lu";
import { NavLink } from "react-router-dom";

export default function ImpactSection() {
  return (
    <section className="w-full">
      {/* ===== TOP ORANGE STRIP ===== */}

      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
          How we work to make a difference!
        </h2>
        <div className="w-40 h-1 bg-green-500 mx-auto mt-3 rounded-full" />
      </div>
       
      <div className="grid grid-cols-1 md:grid-cols-3">
        
        {/* Served Over */}
        <div className="bg-orange-500 text-black p-8 md:p-12 hover:brightness-110 transition duration-300">
          <h3 className="text-lg font-medium">Served Over</h3>
          <h1 className="text-4xl md:text-5xl font-bold my-4">
            1,432,805
          </h1>
          <p className="text-base">
            Children in 190 countries in the world
          </p>
        </div>

        {/* Donate Money */}
        <div className="bg-orange-400 text-black p-8 md:p-12 flex flex-col justify-between hover:brightness-110 transition duration-300">
          <div>
            <h3 className="text-lg font-medium mb-4">Donate Money</h3>
            <p className="text-sm leading-relaxed">
            Good Karma Global Foundation is a purpose-driven organization rooted in compassion, service, and the belief that meaningful change begins with conscious action with a strong commitment to environmental responsibility, the foundation actively works toward protecting nature and creating sustainable ecosystems.
            </p>
          </div>

          <NavLink to='/blogs' className='mt-6 w-fit bg-white text-black px-6 py-3 text-sm font-medium shadow-md hover:bg-black hover:text-white transition duration-300"'>
           Donate Now
          </NavLink>
        </div>

        {/* Be a Volunteer */}
        <div className="bg-orange-300 text-black p-8 md:p-12 flex flex-col justify-between hover:brightness-110 transition duration-300">
          <div>
            <h3 className="text-lg font-medium mb-4">Be a Volunteer</h3>
            <p className="text-sm leading-relaxed">
              Good Karma Global Foundation is a purpose- Guided by the philosophy of giving back to society, the foundation works to uplift lives and create opportunities for growth, dignity, and hope. Its mission is to support people through education, empower communities with knowledge, and nurture future generations with values that inspire progress.
            </p>
          </div>

          <NavLink to='/stories' className='mt-6 w-fit bg-white text-black px-6 py-3 text-sm font-medium shadow-md hover:bg-black hover:text-white transition duration-300"'>
           Be A Volunteer
          </NavLink>
        </div>
      </div>

      {/* ===== BOTTOM FEATURES ===== */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Donation */}
        <div className="text-center group">
          <FaHandHoldingHeart  className="mx-auto text-orange-500 w-12 h-12 group-hover:scale-110 transition duration-300" />
          <h4 className="text-lg font-semibold mt-4">Make Donation</h4>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
           Good Karma Global Foundation is a purpose-  Through initiatives in education, social upliftment, and environmental care, Good Karma Global Foundation envisions a world where kindness leads action, service becomes a way of life, and collective efforts build a better, balanced future for all.
          </p>
        </div>

        {/* Volunteer */}
        <div className="text-center group">
          <LuHandHelping  className="mx-auto text-orange-500 w-12 h-12 group-hover:scale-110 transition duration-300" />
          <h4 className="text-lg font-semibold mt-4">Become A Volunteer</h4>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          Good Karma Global Foundation is committed to nurturing nature and creating a greener, healthier future. In May 2025, under the guidance and support of the Panvel Municipal Corporation (PMC), the foundation successfully planted over 400 trees in Kharghar.
          </p>
        </div>

        {/* Sponsorship */}
        <div className="text-center group">
          <LuBadgeDollarSign  className="mx-auto text-orange-500 w-12 h-12 group-hover:scale-110 transition duration-300" />
          <h4 className="text-lg font-semibold mt-4">Sponsorship</h4>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          For Goood Karma Global Foundation is Beyond planting, the foundation takes ongoing responsibility for the care and maintenance of these trees, ensuring their healthy growth. This initiative reflects the foundation’s belief that true service to humanity begins with caring for the Earth.
          </p>
        </div>
      </div>
    </section>
  );
}
