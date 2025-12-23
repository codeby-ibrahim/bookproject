import React from "react";
import bookImg from "../assets/book.png"; // ✅ correct way

const Banner = () => {
    return (
        <section className="py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-8">

                <div className="text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                        Hello, welcome here to learn <br />
                        <span className="text-pink-500">something new everyday!</span>
                    </h1>
                    <p className="mt-4 text-gray-500">
                        Learn habits, mindset, productivity & finance.
                    </p>
                </div>

                <div className="flex justify-center md:justify-end">
                    <img src={bookImg} alt="Books" className="w-72" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
