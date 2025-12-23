import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                } shadow-md sticky top-0 z-50`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-xl sm:text-2xl font-bold">
                    <span className="text-blue-500">Book</span> Shop
                </h1>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-8 text-sm font-medium">
                    <a href="/" className="hover:text-blue-500">Home</a>
                    <a href="#" className="hover:text-blue-500">About</a>
                    <a href="/course" className="hover:text-blue-500">Course</a>
                    <a href="#" className="hover:text-blue-500">Contact</a>
                </nav>

                {/* Search */}
                <div className="hidden md:block w-64">
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className={`w-full px-4 py-2 rounded-md ${darkMode
                            ? "bg-gray-800 text-white placeholder-gray-400"
                            : "bg-gray-200 text-gray-900 placeholder-gray-500"
                            } focus:ring-2 focus:ring-blue-500 outline-none`}
                    />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-300"
                            }`}
                    >
                        {darkMode ? "🌙" : "☀️"}
                    </button>

                    <button className="hidden sm:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                        Login
                    </button>

                    {/* Mobile Menu */}
                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className={`lg:hidden px-4 pb-4 space-y-3 ${darkMode ? "bg-gray-900" : "bg-white"
                        }`}
                >
                    <a className="block">Home</a>
                    <a className="block">About</a>
                    <a className="block">Courses</a>
                    <a className="block">Contact</a>

                    <input
                        type="text"
                        placeholder="Search courses..."
                        className={`w-full px-4 py-2 rounded-md ${darkMode
                            ? "bg-gray-800 text-white"
                            : "bg-gray-200 text-gray-900"
                            }`}
                    />

                    <button className="w-full bg-blue-500 text-white py-2 rounded-md">
                        Login
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
