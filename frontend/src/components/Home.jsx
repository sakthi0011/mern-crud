import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex gap-5 items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">C</h1>
      <h1 className="text-5xl font-bold text-gray-800 mb-6">R</h1>
      <h1 className="text-5xl font-bold text-gray-800 mb-6">U</h1>
      <h1 className="text-5xl font-bold text-gray-800 mb-6">D</h1>

      <div className="-mt-5">
        <Link to="/create">
          <button class="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white font-semibold rounded-md shadow-md hover:from-purple-500 hover:to-pink-600 hover:shadow-lg transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
