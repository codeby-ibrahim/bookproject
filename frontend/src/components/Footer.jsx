import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} border-t`}>
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <h2 className="text-xl font-bold text-blue-500">Book Shop</h2>
          <p className="mt-3 text-sm text-gray-500">
            Learn something new every day.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-md mb-2"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-md">
            Send
          </button>
        </div>
      </div>

      <div className="text-center py-4 text-sm bg-gray-200">
        © {new Date().getFullYear()} Book Shop
      </div>
    </footer>
  );
};

export default Footer;
