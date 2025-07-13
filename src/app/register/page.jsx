'use client'; // Only for Next.js App Router

import { FaGoogle, FaFacebookF } from 'react-icons/fa';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 px-4 py-12">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-700">Create Your Account</h2>
        <p className="text-center text-gray-500">Register to access EduHub features</p>

        {/* Social Login */}
        <div className="flex flex-col gap-3">
          <button className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
            <FaGoogle className="text-red-500" /> Sign Up with Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
            <FaFacebookF className="text-blue-600" /> Sign Up with Facebook
          </button>
        </div>

        <div className="flex items-center gap-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-purple-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-purple-600 hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
