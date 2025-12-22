import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <header
            className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                } shadow-md`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

                {/* Logo */}
                <div className="text-2xl font-bold whitespace-nowrap">
                    <span className="text-blue-500">Book</span> Shop
                </div>

                {/* Navigation */}
                <nav className="hidden lg:flex space-x-8 text-sm font-medium">
                    <a href="#" className="hover:text-blue-500 transition">Home</a>
                    <a href="#" className="hover:text-blue-500 transition">About</a>
                    <a href="#" className="hover:text-blue-500 transition">Courses</a>
                    <a href="#" className="hover:text-blue-500 transition">Contact</a>
                </nav>

                {/* Search */}
                <div className="hidden md:block flex-1 max-w-sm">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className={`w-full px-4 py-2 rounded-md
              ${darkMode
                                ? "bg-gray-800 text-white placeholder-gray-400"
                                : "bg-gray-200 text-gray-900 placeholder-gray-500"
                            }
              focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 rounded-full transition
              ${darkMode
                                ? "bg-gray-700 hover:bg-gray-600"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        title="Toggle Theme"
                    >
                        {darkMode ? "🌙" : "☀️"}
                    </button>

                    {/* Login */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
                        Login
                    </button>

                </div>
            </div>
        </header>
    );
};

export default Header;
