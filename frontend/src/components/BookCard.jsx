import React from "react";

const BookCard = ({ book }) => {
    return (
        <div className="min-w-[150px] sm:min-w-[220px] bg-white border rounded-lg shadow hover:shadow-lg transition">

            {/* Image */}
            <img
                src={book.image}
                alt={book.name}
                className="h-32 sm:h-40 w-full object-cover rounded-t-lg"
            />

            {/* Content */}
            <div className="p-3">
                <h3 className="font-semibold truncate">
                    {book.name}
                </h3>

                <p className="text-sm text-gray-500 truncate">
                    {book.title}
                </p>

                {/* Category + Price */}
                <div className="flex justify-between items-center mt-2">
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                        {book.category}
                    </span>

                    <span className="text-green-600 font-semibold">
                        {book.price}
                    </span>
                </div>

                {/* Buy Now Button */}
                <button
                    className="
            mt-3
            w-full
            bg-blue-500
            hover:bg-blue-600
            text-white
            text-sm
            py-2
            rounded-md
            transition
          "
                >
                    Buy Now
                </button>
            </div>

        </div>
    );
};

export default BookCard;
