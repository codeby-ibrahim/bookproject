import React from "react";

const Banner = () => {
    return (
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                {/* LEFT */}
                <div>
                    <h1 className="text-4xl font-bold">
                        Hello, welcomes here to learn <br />
                        something <span className="text-pink-500">new everyday!!!</span>
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center">
                    <img src="src/assets/book.jpg" alt="Books" className="max-w-md" />
                </div>

            </div>
        </section>
    );
};

export default Banner;
