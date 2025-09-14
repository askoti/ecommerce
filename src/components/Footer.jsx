import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-14 bg-gray-100 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ecommerce-23</h3>
          <p className="text-gray-600 text-sm">
            Your one-stop shop for all the latest products. Quality guaranteed with fast shipping!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>
              <a href="/" className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </li>
            <li>
              <a href="/categories" className="hover:text-blue-600">Shop Categories</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-600 text-sm mb-4">
            Get the latest deals and offers right in your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-600"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-300 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          © 2025 Ecommerce-23. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
