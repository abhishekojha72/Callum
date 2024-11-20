

import React, { useEffect, useState } from 'react';
import './Hero.css'


function Hero() {
  const phrases = ["Developer", "Designer", "Creator"];
  const [currentText, setCurrentText] = useState(phrases[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Increment by 1, not 2
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(phrases[index]);
  }, [index]);

  return (
    <div className="hero-section bg-[#2eddcf] flex flex-col md:flex-row justify-around items-center py-32 px-5">
      <div className="hero-text text-center md:text-left">
        <p className='para1 text-5xl md:text-7xl transition-all duration-1000'>
          I'm a Freelancer,
        </p>
        <p className='d-para text-6xl md:text-8xl font-bold'>
          {currentText}
        </p>
        <p className='b-para text-lg md:text-3xl'>
          Based in GPM Mahoba
        </p>
        <div className='bottom flex flex-col md:flex-row py-3'>
          <button className='hero-btn bg-slate-800 text-xl px-4 py-3 text-white rounded-md hover:bg-gray-700 font-bold'>
            View My Works
          </button>
          <p className='bottom-para text-lg md:text-2xl  border-black hover:opacity-30 cursor-pointer mt-2 md:mt-0 md:ml-5'>
            Contact Me
          </p>
        </div>
      </div>
      <div className="hero-image mt-8 md:mt-0">
        <img src="./harish.jpg" alt="Hero" className='w-[250px] md:w-[350px] border-8 border-white rounded-full' />
      </div>
    </div>
  );
}

export default Hero;

