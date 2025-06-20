
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const whatsappNumber = "+923143146404"; // Replace with your WhatsApp number
  const whatsappMessage = "Hello M8 Malik, I have a question about your products";

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">XYZ MALIK</h3>
            <p className="text-gray-300">
              XYZ malik is one of the leading sports equipment's manufacturer in the world we are specialized in manufacturing cricketing products like cricket bats, pads and gloves.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <address className="text-gray-300 not-italic space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-amber-400" />
                <a href="mailto:info@mbmaliksports.com" className="hover:text-amber-400 transition">info@xyzsports.com</a>
              </div>
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-amber-400" />
                <a href="tel:+923143146404" className="hover:text-amber-400 transition">+92 000000000</a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-400" />
                <span>Tehsil Bazar Sialkot, Pakistan</span>
              </div>
              <div className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-amber-400" />
                <a href="tel:+447722999965" className="hover:text-amber-400 transition">+44 00000000</a>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-400" />
                <span>Wallington, United Kingdom</span>
              </div>
              <div className="flex items-start mt-4">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center py-2 px-4 rounded transition duration-300"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </address>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-amber-400 transition flex items-center"><span className="mr-2">•</span> Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-amber-400 transition flex items-center"><span className="mr-2">•</span> About Us</a></li>
              <li><a href="/shop" className="text-gray-300 hover:text-amber-400 transition flex items-center"><span className="mr-2">•</span> Shop</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-amber-400 transition flex items-center"><span className="mr-2">•</span> Blog</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-amber-400 transition flex items-center"><span className="mr-2">•</span> Contact Us</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-amber-400 transition flex items-center"><span className="mr-2">•</span> Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-amber-400 transition flex items-center"><span className="mr-2">•</span> General Terms & Conditions</a></li>
              <li><a href="/refund" className="text-gray-300 hover:text-amber-400 transition flex items-center"><span className="mr-2">•</span> Sales & Refund Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
            <div className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded transition duration-300 flex items-center justify-center">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} All rights reserved. Powered by Digicoms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;