
import React from 'react'
import { AiOutlineAntDesign } from "react-icons/ai";
// import './Style.css'


function Help() {
 
  return (
    <div>
      <p className="about-heading text-2xl text-center font-bold pt-11">What I do?</p>
      <p className="about-heading text-4xl text-center font-serif font-bold">How I can help your next project</p>

      <div className="content-cards flex justify-center flex-wrap ml-20 py-3 items-center">
        {/* Card 1 */}
        <div className="card h-96 w-80 md:w-72 lg:w-80 border-0 py-3 px-3 shadow-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#2eddcf] hover:to-[#006f6f]">
          <div className="content flex flex-col justify-center items-center">
            <div className="icon h-36 w-36 mb-4">
              <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]' />
            </div>
            <div className="details text-center leading-7">
              <h3 className="font-semibold text-xl">Web Development</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card h-96 w-80 md:w-72 lg:w-80 border-0 py-3 px-3 shadow-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#2eddcf] hover:to-[#006f6f]">
          <div className="content flex flex-col justify-center items-center">
            <div className="icon h-36 w-36 mb-4">
              <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]' />
            </div>
            <div className="details text-center leading-7">
              <h3 className="font-semibold text-xl">Graphic Design</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card h-96 w-80 md:w-72 lg:w-80 border-0 py-3 px-3 shadow-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#2eddcf] hover:to-[#006f6f]">
          <div className="content flex flex-col justify-center items-center">
            <div className="icon h-36 w-36 mb-4">
              <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]' />
            </div>
            <div className="details text-center leading-7">
              <h3 className="font-semibold text-xl">UI/UX Development</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card h-96 w-80 md:w-72 lg:w-80 border-0 py-3 px-3 shadow-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#2eddcf] hover:to-[#006f6f]">
          <div className="content flex flex-col justify-center items-center">
            <div className="icon h-36 w-36 mb-4">
              <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]' />
            </div>
            <div className="details text-center leading-7">
              <h3 className="font-semibold text-xl">App Design</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card h-96 w-80 md:w-72 lg:w-80 border-0 py-3 px-3 shadow-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#2eddcf] hover:to-[#006f6f]">
          <div className="content flex flex-col justify-center items-center">
            <div className="icon h-36 w-36 mb-4">
              <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]' />
            </div>
            <div className="details text-center leading-7">
              <h3 className="font-semibold text-xl">Business Analysis</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card h-96 w-80 md:w-72 lg:w-80 border-0 py-3 px-3 shadow-lg mb-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#2eddcf] hover:to-[#006f6f]">
          <div className="content flex flex-col justify-center items-center">
            <div className="icon h-36 w-36 mb-4">
              <AiOutlineAntDesign className='h-36 w-36 p-4 text-[#2eddcf]' />
            </div>
            <div className="details text-center leading-7">
              <h3 className="font-semibold text-xl">SEO Marketing</h3>
              <p className='text-gray-500 text-lg'>
                I can build websites using HTML, CSS, JavaScript, React, and Node.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );






 
}


export default Help
