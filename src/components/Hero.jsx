// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="bg-secondary text-center py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          Learn IT the Right Way
        </h2>
        <p className="text-lg text-gray-700">
          Discover the best resources, tools, and pathways to excel in your IT
          career.
        </p>
        <button className="mt-6 bg-primary text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-600">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
