import React from "react";



function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-10 py-16">

      {/* Heading and intrp */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-14 text-orange-400">Featured Projects</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-10">
    These are some of the projects I’ve worked on in the last 2 weeks… I’ve been testing different designs, building cleaner interfaces, and polishing my frontend skills..
    </p>

      {/* Project Section*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">

        {/*Project 1*/}
        <div className="border border-gray-300 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3 text-orange-400 ">Reinvented Resturant</h2>
        <p className="text-gray-700 mb-4">A responsive web app built with Bootstrap and CSS. Smooth UI and clean interactions.</p>
          <img src="Portfolio/src/components/images/Project1.png"alt="Project 1"className="w-full h-50 object-cover rounded-xl"/>
        </div>

        {/*Project 2*/}
        <div className="border border-gray-300 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3 text-orange-400">Clock</h2>
            <p className="text-gray-700 mb-4">Clock built with JavaScript and CSS (analog + digital, animated-ready).</p>
                <img src="Portfolio/src/components/images/Project2.png"alt="Project 2"className="w-full h-50 object-cover rounded-xl"/></div>

        {/*Project 3*/}
        <div className="border border-gray-300 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3 text-orange-400"> Business Landing Page</h2>
          <p className="text-gray-700 mb-4">Landing page built with Bootstrap showcasing a smooth, modern website with charts admin controls.</p>
          <img src="Portfolio/src/components/images/Project3.png"alt="Project 3"className="w-full h-50 object-cover rounded-xl"/>
        </div>

      </div>

    </div>
  );
}

export default Projects;