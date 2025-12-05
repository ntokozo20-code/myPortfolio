import React from "react";

function NavBar() {
    return (
        <div className="flex items-center p-4 bg-white-200">
            {/*NavBar With components */}
            <div className="text-2xl font-bold text-orange-400 ">Portfolio</div>
            <div className="flex-1"></div>
          <ul className="hidden md:flex items-center gap-6">
            <a href="#home"><li className="inline-block mx-4 hover:text-orange-500 cursor-pointer">Home</li></a>
            <a href="#about"><li className="inline-block mx-4 hover:text-orange-500 cursor-pointer">About</li></a>
            <a href="#skills"><li className="inline-block mx-4 hover:text-orange-500 cursor-pointer">Skills</li></a>
            <a href="#projects"><li className="inline-block mx-4 hover:text-orange-500 cursor-pointer">Projects</li></a>
            <a href="#contact"><li className="inline-block mx-4 hover:text-orange-500 cursor-pointer">Contact</li></a>
        </ul>
             {/*button*/}
            <div className="flex-1"></div>
            <button className="px-5 py-2 bg-orange-400 text-white font-semibold rounded-full hover:bg-orange-800 transition">
            Contact Me
            </button>
        </div>
        
    )
}
export default NavBar;