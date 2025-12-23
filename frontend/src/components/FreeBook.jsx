import React from "react";
import books from "../data/list.json";

const FreeBook = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-2">
                Free Books
            </h2>
            <p className="text-gray-500 mb-6">
                Explore our collection of free books to boost your knowledge.
            </p>

            {/* Horizontal Scroll */}
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="min-w-[220px] border rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white"
                    >
                        <img
                            src={book.image}
                            alt={book.name}
                            className="w-full h-40 object-cover"
                        />

                        <div className="p-4">
                            <h3 className="font-semibold text-lg">
                                {book.name}
                            </h3>

                            <p className="text-sm text-gray-500">
                                {book.title}
                            </p>

                            <div className="flex justify-between items-center mt-3">
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
        </section>
    );
};

export default FreeBook;
