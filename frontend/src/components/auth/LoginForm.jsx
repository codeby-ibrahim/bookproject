import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">
        Login
      </h2>

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
        Login
      </button>

      <p className="text-sm text-center mt-4 text-gray-500">
        Don’t have an account?{" "}
        <a href="/signup" className="text-blue-500">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
