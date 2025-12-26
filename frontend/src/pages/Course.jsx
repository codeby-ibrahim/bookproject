import React from "react";

// ✅ Import with EXACT file names
import course1 from "../assets/course (1).jpg";
import course2 from "../assets/course (2).jpg";
import course3 from "../assets/course (3).jpg";

const courses = [
    { id: 1, name: "React for Beginners", image: course1 },
    { id: 2, name: "Node.js Complete Guide", image: course2 },
    { id: 3, name: "MongoDB Mastery", image: course3 },
];

const Course = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-6">All Courses</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courses.map((book) => (
                    <div
                        key={book.id}
                        className="bg-white rounded-lg shadow hover:shadow-lg transition"
                    >
                        <img
                            src={book.image}
                            alt={book.name}
                            className="h-32 sm:h-40 w-full object-cover rounded-t-lg"
                        />

                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{book.name}</h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Learn step by step with real projects
                            </p>

                            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                                View Course
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
