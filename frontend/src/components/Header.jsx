import React from "react";   // ✅ REQUIRED (VERY IMPORTANT)

const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div className="text-2xl font-bold tracking-wide">
                    <span className="text-blue-400">Bool</span>{" "}
                    <span className="text-white">Shop</span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium">
                    <a href="#" className="hover:text-blue-400 transition">Home</a>
                    <a href="#" className="hover:text-blue-400 transition">About</a>
                    <a href="#" className="hover:text-blue-400 transition">Courses</a>
                    <a href="#" className="hover:text-blue-400 transition">Contact</a>
                </nav>

                {/* Action Button */}
                <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-md text-sm font-semibold">
                    Login
                </button>

            </div>
        </header>
    );
};

export default Header;
