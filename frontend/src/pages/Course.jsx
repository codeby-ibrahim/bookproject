import React, { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🔹 Fetch courses from backend API
    const fetchBooks = async () => {
        try {
            const res = await axios.get("http://localhost:4001/book");
            setCourses(res.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    if (loading) {
        return <p className="text-center mt-10">Loading courses...</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-bold mb-6">All Courses</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {courses.map((book) => (
                    <div
                        key={book._id}
                        className="bg-white rounded-lg shadow hover:shadow-lg transition"
                    >
                        <img
                            src={`/images/${book.image}`}
                            alt={book.title}
                            className="h-32 sm:h-40 w-full object-cover rounded-t-lg"
                        />

                        <div className="p-4">
                            <h2 className="text-lg font-semibold">
                                {book.title}
                            </h2>

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
