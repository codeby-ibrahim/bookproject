import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <footer
            className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-700"
                } border-t`}
        >
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Logo / About */}
                <div>
                    <h2 className="text-xl font-bold text-blue-500">Book Shop</h2>
                    <p className="mt-3 text-sm">
                        Learn something new every day. Explore courses, books, and knowledge
                        from experts.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500">About</a></li>
                        <li><a href="#" className="hover:text-blue-500">Courses</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
                        <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold mb-3">Newsletter</h3>
                    <p className="text-sm mb-3">
                        Subscribe to get latest updates.
                    </p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className={`w-full px-3 py-2 rounded-l-md text-sm outline-none
                ${darkMode
                                    ? "bg-gray-800 text-white placeholder-gray-400"
                                    : "bg-white text-gray-900 placeholder-gray-500"
                                }`}
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm">
                            Send
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div
                className={`text-center text-sm py-4 ${darkMode ? "bg-gray-950 text-gray-400" : "bg-gray-200 text-gray-600"
                    }`}
            >
                © {new Date().getFullYear()} Book Shop. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
