import React, { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/0_Abstract_3d_1920x1080.mp4" type="video/mp4" />
      </video>

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4  bg-opacity-60 relative z-10">
        <div className="text-xl font-bold text-white ml-12">
          <span className="text-blue-400 ">K</span>yptronix LLP
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-sm">
          {["Home", "About Us", "Services", "Package & Pricing", "Reviews", "Portfolio", "Blog", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-blue-400 no-underline">
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <button className="hidden md:block bg-transparent border border-cyan-400 mr-9 text-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition duration-200 text-sm">
          Contact Us
        </button>

        {/* Hamburger Icon (Mobile) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white z-20">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 px-6 py-4 flex flex-col gap-4 z-10 md:hidden">
            {["Home", "About Us", "Services", "Package & Pricing", "Reviews", "Portfolio", "Blog", "Contact"].map((item) => (
              <a key={item} href="#" className="text-white hover:text-blue-400">
                {item}
              </a>
            ))}
            <button className="mt-2 bg-transparent border border-cyan-400 text-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition duration-200 text-sm">
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* Main Section */}
      <main className="text-center px-4 pt-16 pb-10 md:pt-24 md:pb-20  bg-opacity-60">
        <h2 className="text-3xl font-bold tracking-widest mb-2">Kyptonix LLP -</h2>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          THE NEXT THING IN <br />
          <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-300 bg-clip-text text-transparent">DIGITAL INDUSTRY</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-base md:text-lg">
          At Kyptronix LLP, we’re not just building websites, apps, or marketing strategies —
          we’re creating business success. Based in Delaware, we help companies across the U.S.
          scale rapidly, increase conversions, and dominate their industries.
        </p>

        <p className="mt-4 text-gray-400 text-sm">
          Don’t just compete — <strong>lead.</strong> Ready to see what Kyptronix can do for you?
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition duration-300">
            Get Started Today
            <span className="bg-white text-black p-1 rounded-full">
              <ChevronRight size={18} />
            </span>
          </button>

          <button className="flex items-center gap-2 text-cyan-300 font-medium hover:text-cyan-200 transition duration-300">
            View Our Work <ChevronRight size={18} />
          </button>
        </div>

        {/* Image Stack */}
        

      {/* Image Stack */}
{/* Image Stack */}
<div className="relative mt-20 flex justify-center items-end gap-[-80px]">
  {/* Left Image */}
  <div className="relative w-56 h-80 rounded-2xl overflow-hidden shadow-xl transform rotate-[-10deg] z-0 border border-gray-700 scale-90 -mr-16
    transition duration-500 ease-in-out hover:scale-100 hover:rotate-[-5deg] hover:z-20 hover:shadow-2xl">
    <img src={img1} alt="Preview Left" className="w-full h-full object-cover" />
  </div>

  {/* Center Image */}
  <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-500 z-10 bg-black bg-opacity-40 backdrop-blur-md
    transition duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_40px_#00FFFF]">
    <img src={img2} alt="Preview Center" className="w-full h-full object-cover" />
  </div>

  {/* Right Image */}
  <div className="relative w-56 h-80 rounded-2xl overflow-hidden shadow-xl transform rotate-[10deg] z-0 border border-gray-700 scale-90 -ml-16
    transition duration-500 ease-in-out hover:scale-100 hover:rotate-[5deg] hover:z-20 hover:shadow-2xl">
    <img src={img3} alt="Preview Right" className="w-full h-full object-cover" />
  </div>
</div>

          
  
          


      </main>
    </div>
  );
}