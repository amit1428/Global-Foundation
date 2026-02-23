import cause1 from '../../assets/Food1.jpeg'
import cause2 from '../../assets/Food2.jpeg'
import cause3 from '../../assets/Food3.jpeg'

import blog1 from '../../assets/Food4.jpeg'
import blog2 from '../../assets/Food5.jpeg'
import blog3 from '../../assets/gb1.jpeg'
const causes = [
  {
    id: 1,
    title: "Clean water for the urban area",
    desc: "Even the all-powerful Pointing has no control about the blind texts.",
    raised: 12000,
    goal: 30000,
    img: cause1,
  },
  {
    id: 2,
    title: "Education for poor children",
    desc: "A small river named Duden flows by their place and supplies it.",
    raised: 18000,
    goal: 35000,
    img: cause2,
  },
  {
    id: 3,
    title: "Food & shelter support",
    desc: "Separated they live in Bookmarksgrove right at the coast.",
    raised: 9000,
    goal: 25000,
    img: cause3,
  },
];

const blogs = [
  {
    id: 1,
    title: "Why clean water matters",
    para: "Explore the importance of clean water and how it can transform communities by improving health and livelihoods.",
    date: "Jan 20, 2026",
    img: blog1,
  },
  {
    id: 2,
    title: "Helping children through education",
    para: "Learn how education can break the cycle of poverty and empower children to build a better future.",
    date: "Jan 25, 2026",
    img:blog2,
  },
  {
    id: 3,
    title: "How your donation changes lives",
    para: "Discover the impact of your support in providing food, shelter and Education also medicine to those in need.",
    date: "Feb 01, 2026",
    img: blog3,
  },
];

export default function CausesAndBlogs() {
  return (
    <div className="bg-gray-50 min-h-screen py-14 px-4 md:px-10">
      
      {/* ===== CAUSES SECTION ===== */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-orange-500">Causes</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {causes.map((cause) => {
            const progress = (cause.raised / cause.goal) * 100;
            return (
              <div
                key={cause.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg group transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={cause.img}
                    alt={cause.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition">
                    {cause.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {cause.desc}
                  </p>

                  <p className="text-xs text-gray-400 italic mb-2">
                    Last donation 1w ago
                  </p>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div
                      className="bg-orange-500 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <p className="text-sm font-medium">
                    <span className="text-orange-600">
                      ₹{cause.raised.toLocaleString()}
                    </span>{" "}
                    raised of ₹{cause.goal.toLocaleString()}
                  </p>
                  <button className="mt-5 w-full py-2 rounded-xl bg-orange-500 text-white font-semibold transition-all duration-300 hover:bg-orange-600 hover:shadow-lg">
                    Donate Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== BLOG SECTION ===== */}
      <section className="max-w-7xl mx-auto mt-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest <span className="text-orange-500">Blogs</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md group transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <p className="text-xs text-gray-400 mb-2">{blog.date}</p>
                <h3 className="text-lg font-semibold group-hover:text-orange-500 transition">
                  {blog.title}
                </h3>
                <h4 className='mt-4 text-orange-500 font-semibold hover:underline'>
                  {blog.para}
                </h4>

                {/* <button className="mt-4 text-orange-500 font-semibold hover:underline">
                  Read More →
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
