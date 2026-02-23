import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* ===== LOGO + ABOUT ===== */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-55object-contain"
            />
              
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            Good Deeds. Global Impact. - <br />At Good Karma Global Foundation, we believe that change begins with action. Together, we can turn compassion into impact and hope into reality.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="#" className="footer-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/goodkarmaglobalfoundation?igsh=MWYyNTJkaWsyenpqMw==" className="footer-icon" target="_blank ">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* ===== SITE LINKS ===== */}
        <div>
          <h3 className="footer-title">Site Links</h3>
          <ul className="space-y-3 mt-6">
            {["Home", "About", "Donate", "Get Involed", "Gallery"].map((item) => (
              <li key={item}>
                <a href="" className="footer-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== OFFICE ADDRESS ===== */}
        <div>
          <h3 className="footer-title">Office Address</h3>
          <ul className="space-y-4 mt-6 text-sm">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-orange-500 mt-1 size-5" />
              <span>
                Office A-219, City Tower Plot No. 55, Opp. D-Mart, Sector-15,
                CBD Belapur, Navi Mumbai – 400614
              </span>
            </li>

            <li className="flex gap-3">
              <FaPhoneAlt className="text-orange-500 mt-1" />
              <span>+91 9029551313</span>
            </li>

            <li className="flex gap-3">
              <FaEnvelope className="text-orange-500 mt-1" />
               <a href="mailto:goodkarmagf@gmail.com">goodkarmagf@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* ===== GOOGLE MAP ===== */}
        <div>
          <h3 className="footer-title">Find Us</h3>

          <div className="mt-6 rounded-xl overflow-hidden border border-white/10 shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.74206628015!2d73.02989234721913!3d19.010920734153252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c385349a4453%3A0x7e49c9b1afcd7714!2sD%20Mart%20Belapur!5e0!3m2!1sen!2sin!4v1770375109803!5m2!1sen!2sin"
              className="w-full h-56 grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-white/10 mt-14 py-6 text-center text-sm text-gray-400">
        © 2026 All rights reserved | Made with ❤️ by{" "}
        <span className="text-orange-500 font-semibold">
          SG Solutions
        </span>
      </div>
    </footer>
  );
}
