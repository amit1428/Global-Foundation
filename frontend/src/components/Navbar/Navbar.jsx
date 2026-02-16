
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import pdfFile from "../../assets/GoodKarma.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navLinks = [
    { name: "Home", to: "/" },

    {
      name: "Who We Are",
      dropdown: true,
      children: [
        {name:"About Us", to:"/about"},
        { name: "What We Do", to: "/work" },
        { name: "News & Stories", to: "/stories" },
      ],
    },

    {
      name: "Get Involved",
      dropdown: true,
      children: [
        { name: "How To Help", to: "/help" },
        {name:"Our Motive", to:"/narrative"},
        { name: "Contributors", to: "/contributors" },
      ],
    },

    {name:'Gallary', to:'/gallary'},
    { name: "Blogs", to: "/blogs" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-green-900/100 to-white shadow-md">

      {/* TOP BAR */}
      <div className="hidden md:flex justify-end items-center gap-6 px-6 py-2 text-sm text-gray-700">
        <a href={pdfFile}>📌 Tender Notice</a>
        <a href="mailto:goodkarmagf@gmail.com">✉️ goodkarmagf@gmail.com</a>
        <span>📞 +91 9029551313</span>
      </div>

      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <img src={logo} alt="Logo" className="h-12 " />

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">

              {/* NORMAL LINK */}
              {!link.dropdown && (
                <NavLink
                  to={link.to}
                  className="px-3 py-2 rounded-full hover:bg-amber-400 transition"
                >
                  {link.name}
                </NavLink>
              )}

              {/* DROPDOWN */}
              {link.dropdown && (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="px-3 py-2 rounded-full hover:bg-amber-400 transition"
                  >
                    {link.name}
                  </button>

                  {openDropdown === index && (
                    <div className="absolute top-12 left-0 bg-white  rounded-xl shadow-xl w-52 overflow-hidden">
                      {link.children.map((child, i) => (
                        <NavLink
                          key={i}
                          to={child.to}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-5 py-3 text-sm hover:bg-green-200"
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex gap-4">
          <NavLink
            to="/blogs"
            className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700"
          >
            Donate Now
          </NavLink>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
          >
            Sign In
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white px-6 py-4 space-y-2">

          {navLinks.map((link, index) => (
            <div key={index}>

              {!link.dropdown && (
                <NavLink
                  to={link.to}
                  className="block px-4 py-3 rounded-xl hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              )}

              {link.dropdown && (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100"
                  >
                    {link.name}
                  </button>

                  {openDropdown === index && (
                    <div className="ml-6 space-y-2">
                      {link.children.map((child, i) => (
                        <NavLink
                          key={i}
                          to={child.to}
                          className="block px-4 py-2 rounded-lg text-sm hover:bg-green-100"
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          <div className="flex gap-4 pt-4">
            <NavLink
              to="/blogs"
              className="flex-1 bg-green-600 text-white py-2 rounded-full text-center"
            >
              Donate Now
            </NavLink>
            <NavLink
              to="/contact"
              className="flex-1 bg-blue-600 text-white py-2 rounded-full text-center"
            >
              Sign In
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
