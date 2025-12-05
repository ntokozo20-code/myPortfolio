import React from "react";

function Hero() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center text-center">
        {/* Hero Section Heading and Ino */}
        <h1 className="text-4xl sm:text-7xl lg:text-7xl font-bold tracking-tight mb-6 text-orange-400"> Shaping Innovative Digital Experiences</h1>
        <p className="text-gray-900 max-w-md mb-8">
          I’m an aspiring creative developer, building exquisite, user-centered digital experiences. Always learning, experimenting, and stacking skills, I’m shaping a future where creativity and code move together.
        </p>
        {/*Button*/}
        <button className="px-5 py-2 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-800 transition">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default Hero;