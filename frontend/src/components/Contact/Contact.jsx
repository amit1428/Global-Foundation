import { useState } from "react";
import img1 from '../../assets/Food1.jpeg'
import img2 from '../../assets/Food2.jpeg'
import img3 from '../../assets/Food3.jpeg'
import img4 from '../../assets/Food4.jpeg'
export default function ImageFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="min-h-screen  flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl">
        {/* ===== LEFT IMAGE SECTION ===== */}
        <div className="grid grid-cols-2 gap-2 p-6 bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364]">
          {[
            img1, img2, img3, img4
          ].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl group">
              <img
                src={img}
                alt="Gallery"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* ===== RIGHT FORM SECTION ===== */}
        <div className="p-8 md:p-12 flex items-center bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364]">
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-gray/90 mb-6">
              Get In <span className="text-orange-500">Touch</span>
            </h2>
            {/* Name */}
            <div className="mb-5">
              <label className="text-white text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl bg-transparent border border-white/30 px-4 py-3 text-white outline-none transition-all duration-300
                focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.5)]
                hover:border-cyan-300"
                placeholder="Enter your name"
              />
            </div>
            {/* Email */}
            <div className="mb-5">
              <label className="text-white text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl bg-transparent border border-white/30 px-4 py-3 text-white outline-none transition-all duration-300
                focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.5)]
                hover:border-purple-300"
                placeholder="example@email.com"
              />
            </div>
             {/* Phone Number */}
            <div className="mb-5">
              <label className="text-white text-sm">Phone Number</label>
              <input
                type="number"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl bg-transparent border border-white/90 px-4 py-3 text-white outline-none transition-all duration-300
              focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.5)]               hover:border-purple-300"
                placeholder="Enter your phone number"
              />
            </div>
            {/* Message */}
            <div className="mb-6">
              <label className="text-white text-sm">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full h-20 rounded-xl bg-transparent border border-white/30 px-4 py-3 text-white outline-none resize-none transition-all duration-300
                focus:border-pink-400 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)]
                hover:border-pink-300"
                placeholder="Write your message..."
              />
            </div>
            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold tracking-wide
              transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]
              active:scale-95"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
