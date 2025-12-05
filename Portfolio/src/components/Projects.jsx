import React from "react";

<div id="Projects"></div>

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
          <h2 className="text-2xl font-bold mb-3 text-orange-400 ">Web App</h2>
        <p className="text-gray-700 mb-4">A responsive web app built with React and Tailwind. Smooth UI and clean interactions.</p>
          <img src="/images/Project1.j"alt="Project 1"className="w-full h-48 object-cover rounded-xl"/>
        </div>

        {/*Project 2*/}
        <div className="border border-gray-300 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3 text-orange-400">Mobile UI</h2>
            <p className="text-gray-700 mb-4">A mobile interface concept showing clean layouts and animated-ready screens.</p>
                <img src="/images/project2.jpg"alt="Project 2"className="w-full h-48 object-cover rounded-xl"/></div>

        {/*Project 3*/}
        <div className="border border-gray-300 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3 text-orange-400">Dashboard</h2>
          <p className="text-gray-700 mb-4">A dashboard design with charts, metrics and admin controls. Smooth and modern.</p>
          <img src="/images/project3.jpg"alt="Project 3"className="w-full h-48 object-cover rounded-xl"/>
        </div>

      </div>

    </div>
  );
}

export default Projects;