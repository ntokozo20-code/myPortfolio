import React from "react";

function Skills() {
  return (
  
    <div className="flex items-center justify-center h-screen bg-cream white">
      <div className="flex flex-col items-center px-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-10 text-orange-400">Skills & Expertise</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
{/*Frontend Skills*/}
          <div>
            <h2 className="text-2xl font-bold mb-4">Frontend</h2>
            <ul className="space-y-2 text-lg">
              <li>React</li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Tools</h2>
            <ul className="space-y-2 text-lg">
              <li>GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>


          <div>
            <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
            <ul className="space-y-2 text-lg">
              <li>Time Management</li>
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
              <li>Communication</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;