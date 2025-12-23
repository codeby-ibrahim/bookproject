import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    // ✅ Login click / submit handler
    const onSubmit = async (data) => {
        console.log("Login Data:", data);

        // 🔐 Abhi demo ke liye direct login maan rahe hain
        // Yahan baad me API call lagegi

        // ✅ SUCCESS → redirect
        navigate("/");
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md bg-white shadow-lg rounded-lg p-6"
        >
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">
                Login
            </h2>

            {/* Email */}
            <input
                type="email"
                placeholder="Email"
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                    },
                })}
                className="w-full mb-2 px-4 py-2 border rounded"
            />
            {errors.email && (
                <p className="text-red-500 text-sm mb-2">
                    {errors.email.message}
                </p>
            )}

            {/* Password */}
            <input
                type="password"
                placeholder="Password"
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Minimum 6 characters required",
                    },
                })}
                className="w-full mb-3 px-4 py-2 border rounded"
            />
            {errors.password && (
                <p className="text-red-500 text-sm mb-3">
                    {errors.password.message}
                </p>
            )}

            {/* Login Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
            >
                {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <p className="text-sm text-center mt-4 text-gray-500">
                Don’t have an account?{" "}
                <a href="/signup" className="text-blue-500">
                    Sign Up
                </a>
            </p>
        </form>
    );
};

export default LoginForm;
