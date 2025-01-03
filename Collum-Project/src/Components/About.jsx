
import React from 'react';

import './About.css'
function About() {
  return (
    <div>
      <p className="about-heading-main text-2xl text-center font-bold pt-11">About</p>
      <p className="about-heading-sub text-4xl text-center font-serif font-bold">Know me better</p>
      
      <div className="about-section py-4 flex justify-around flex-wrap">
        <div className="about-text w-full md:w-1/2">
          <p className='text-4xl'>Hii, I'm a <span className='font-bold font-serif border-b-4 border-[#2eddcf]'>Harish Ojha</span></p>
          <p className="about-para text-2xl leading-loose">
            I'm a frontend developer with a particular interest in making things simple and automating daily tasks. 
            I try to keep up with security, best practices, and am always looking for new things to learn.
          </p>
        </div>

        <div className="about-image flex flex-col items-center">
          <div className='h-28 w-28 bg-[#2eddcf] rounded-full text-center text-8xl font-bold'>
            <span>6</span>
          </div>
          <p className="about-para1 text-4xl pt-4">
            Months of <span className='font-bold font-serif text-4xl border-b-4 border-[#2eddcf]'>Experience</span>
          </p>
        </div>
      </div>

      <div className='contact-me pt-2 flex justify-around text-xl flex-wrap text-gray-600'>
        <p>Name:<br/> <span className='text-black'>Harish Ojha</span></p>
        <p>Email:<br/> <span className='text-black'>ojhah96@gmail.com</span></p>
        <p>Date of Birth:<br/> <span className='text-black'>13/12/2004</span></p>
        <p>From:<br/> <span className='text-black'>Prayagraj UP</span></p>
      </div>
    </div>
  );
}

export default About;

