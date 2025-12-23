import React from "react";

const SignupForm = () => {
    return (
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">
                Create Account
            </h2>

            <input
                type="text"
                placeholder="Full Name"
                className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                Sign Up
            </button>

            <p className="text-sm text-center mt-4 text-gray-500">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500">
                    Login
                </a>
            </p>
        </div>
    );
};

export default SignupForm;
