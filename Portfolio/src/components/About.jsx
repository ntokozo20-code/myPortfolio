import React from "react";

<div id="About">#about</div>
function About() {
    return (
  <div className="flex items-center justify-center h-screen bg-white">
    <div className="flex flex-col items-center px-10">
      {/* Heading and into*/}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-orange-400">About</h1>
      <p className="text-gray-900 max-w-3xl text-center">
        I’m a developer and designer who believes great digital experiences come from the perfect balance of aesthetics and functionality. I’ve got a sharp eye for detail and a real love for clean, intentional code everything I build is crafted to look good and work even better.
        <br/>Right now, I’m a software development student at Melsoft Academy, sharpening my skills and learning how to turn ideas into real, working products. My process is simple: understand the problem, design with purpose, and build with precision. I focus on creating responsive, user-centered digital products that feel smooth, modern, and reliable.

I’m always eager to try new things, and I live for the thrill of discovery whether it’s a new framework, a fresh design style, or a challenge that pushes me out of my comfort zone.

And when it’s time to chill, you’ll catch me deep in my console games. Gaming isn’t just a hobby for me… it’s a lifestyle. It’s also one of the biggest reasons I code. I want to become a game developer and create the kind of worlds I grew up getting lost in.
      </p>

    </div>
  </div>
    )
}
export default About;