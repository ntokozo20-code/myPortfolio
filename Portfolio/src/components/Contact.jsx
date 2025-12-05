import React from "react";

<div id="Contact"></div>
function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-10 py-16">
    {/* Heading ad intro */}
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-14 text-orange-400">Let's Connect and Create Together</h1> 
    <p className="text-lg text-gray-700 max-w-2xl text-center mb-10">
    Feel free to reach out to me for collaborations, project ideas, or just to say hi.
    I’m always open to connecting and building something amazing.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full max-w-5xl">
    {/* Contact Form */}
        <div className="border border-gray-300 p-8 rounded-2xl bg-white">
            <h2 className="text-3xl font-bold mb-6 text-orange-400">Send a Message</h2>
        <form className="flex flex-col gap-5">

    {/* Name section*/}
    <div className="flex flex-col">
        <label className="font-semibold mb-1">Your Name</label>
            <input type="text"className="border border-gray-300 p-3 rounded-xl focus:outline-none"placeholder="Enter your name"/></div>

    {/* Email Section */}
    <div className="flex flex-col">
        <label className="font-semibold mb-1">Your Email</label>
            < input type="email" className="border border-gray-300 p-3 rounded-xl focus:outline-none"placeholder="Enter your email"/></div>

    {/*Message Section*/}
        <div className="flex flex-col">
        <label className="font-semibold mb-1">Message</label>
            <textarea rows="5" className="border border-gray-300 p-3 rounded-xl resize-none focus:outline-none"placeholder="Write your message here"></textarea></div>

    {/*Button*/}
    <button className="bg-orange-400 text-white font-bold py-3 rounded-xl hover:bg-orange-700 transition">Send Message</button>
    </form>
    </div>

    {/*Connect Section*/}
    <div className="border border-gray-300 p-8 rounded-2xl bg-white">
    <h2 className="text-3xl font-bold mb-6 text-orange-400">Connect With Me</h2>
        <div className="space-y-5 text-lg">

            {/*Email Section */}
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-700">ntokozokhumza09@gmail.com</p>
              <p className="text-gray-700">khumalontokozoo@icloud.com</p>
            </div>

            {/*Phone section*/}
            <div>
              <p className="font-semibold">Phone</p><p className="text-gray-700">+27 83 555 6400</p>
            </div>

            {/*Linkedin Section*/}
            <div>
              <p className="font-semibold">LinkedIn</p>
              <a href="https://www.linkedin.com/in/ntokozo-khumalo-8064462b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBLIBuG5IQSurRXAD74cuvA%3D%3D"target="_blank"className="text-blue-500 underline">linkedin.com/in/ntokozo-khumalo-8064462b5</a>
            </div>

            {/*GitHub Section*/}
            <div>
              <p className="font-semibold">GitHub</p>
                <a href="https://github.com/ntokozo20-code"target="_blank"className="text-gray-800 underline">github.com/ntokozo20-code</a>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Contact;