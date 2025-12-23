import React, { useRef, useState, useEffect } from "react";
import books from "../data/list.json";

const FreeBook = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // 🔍 FILTER DATA (example: sirf Free books)
    const filterData = books.filter(
        (book) => book.price === "Free"
    );

    // detect scroll for dots
    const handleScroll = () => {
        const scrollLeft = sliderRef.current.scrollLeft;
        const cardWidth = sliderRef.current.children[0].offsetWidth + 16;
        setActiveIndex(Math.round(scrollLeft / cardWidth));
    };

    // 🔥 AUTO SLIDE
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const cardWidth = slider.children[0].offsetWidth + 16;

        const interval = setInterval(() => {
            let nextIndex = activeIndex + 1;

            if (nextIndex >= filterData.length) {
                nextIndex = 0;
            }

            slider.scrollTo({
                left: nextIndex * cardWidth,
                behavior: "smooth",
            });

            setActiveIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex, filterData.length]);

    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-xl sm:text-3xl font-bold mb-2">
                    Free Books
                </h2>
                <p className="text-gray-500 mb-8">
                    Explore our collection of free books.
                </p>

                {/* Slider */}
                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className="mt-4 flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                    {filterData.map((book) => (
                        <div
                            key={book.id}
                            className="min-w-[150px] sm:min-w-[220px] bg-white border rounded-lg shadow"
                        >
                            <img
                                src={book.image}
                                alt={book.name}
                                className="h-32 sm:h-40 w-full object-cover rounded-t-lg"
                            />

                            <div className="p-3">
                                <h3 className="font-semibold truncate">
                                    {book.name}
                                </h3>

                                <p className="text-sm text-gray-500 truncate">
                                    {book.title}
                                </p>

                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                                        {book.category}
                                    </span>
                                    <span className="text-green-600 font-semibold">
                                        {book.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-5">
                    {filterData.map((_, index) => (
                        <span
                            key={index}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${activeIndex === index
                                ? "bg-blue-500 w-4"
                                : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                {/* Demo Text */}
                <div className="mt-6 text-center max-w-2xl mx-auto">
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                        Discover hand-picked free books to improve your habits, mindset,
                        productivity, and financial knowledge.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FreeBook;
