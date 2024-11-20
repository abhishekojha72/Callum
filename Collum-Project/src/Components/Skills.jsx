
import React from 'react'
import './Style.css'

function Skills() {
  return (
    <div>
<h1 className='text-4xl text-center font-bold pt-16'>My Skills</h1>

<div className='cards flex flex-wrap justify-center mt-5 gap-5'>
  <div className="card w-5/12 md:w-4/12 lg:w-3/12 bg-base-100 border-0 p-4">
    <div className="card-body flex justify-between text-lg font-serif font-bold">
      <p>Web Design</p>
      <p>75%</p>
    </div>
    <div className="range w-full bg-slate-300 rounded-md h-3">
      <div className="upper-range w-3/4 bg-[#2eddcf] h-full rounded-l-md"></div>
    </div>
  </div>

  <div className="card w-5/12 md:w-4/12 lg:w-3/12 bg-base-100 border-0 p-4">
    <div className="card-body flex justify-between text-lg font-serif font-bold">
      <p>HTML/CSS</p>
      <p>91%</p>
    </div>
    <div className="range w-full bg-slate-300 rounded-md h-3">
      <div className="upper-range w-11/12 bg-[#2eddcf] h-full rounded-l-md"></div>
    </div>
  </div>

  <div className="card w-5/12 md:w-4/12 lg:w-3/12 bg-base-100 border-0 p-4">
    <div className="card-body flex justify-between text-lg font-serif font-bold">
      <p>JavaScript</p>
      <p>80%</p>
    </div>
    <div className="range w-full bg-slate-300 rounded-md h-3">
      <div className="upper-range w-4/5 bg-[#2eddcf] h-full rounded-l-md"></div>
    </div>
  </div>

  <div className="card w-5/12 md:w-4/12 lg:w-3/12 bg-base-100 border-0 p-4">
    <div className="card-body flex justify-between text-lg font-serif font-bold">
      <p>React Js</p>
      <p>65%</p>
    </div>
    <div className="range w-full bg-slate-300 rounded-md h-3">
      <div className="upper-range w-8/12 bg-[#2eddcf] h-full rounded-l-md"></div>
    </div>
  </div>

  <div className="card w-5/12 md:w-4/12 lg:w-3/12 bg-base-100 border-0 p-4">
    <div className="card-body flex justify-between text-lg font-serif font-bold">
      <p>Node Js</p>
      <p>65%</p>
    </div>
    <div className="range w-full bg-slate-300 rounded-md h-3">
      <div className="upper-range w-2/3 bg-[#2eddcf] h-full rounded-l-md"></div>
    </div>
  </div>

  <div className="card w-5/12 md:w-4/12 lg:w-3/12 bg-base-100 border-0 p-4">
    <div className="card-body flex justify-between text-lg font-serif font-bold">
      <p>Bootstrap</p>
      <p>90%</p>
    </div>
    <div className="range w-full bg-slate-300 rounded-md h-3">
      <div className="upper-range w-11/12 bg-[#2eddcf] h-full rounded-l-md"></div>
    </div>
  </div>
  
  <div className="btn flex justify-center items-center w-full mt-5">
    <button className='py-3 px-4 bg-[#2eddcf] font-bold hover:bg-black hover:text-white transition-transform transform hover:translate-y-[-4px] duration-300'>
      Download CV
    </button>
  </div>
</div>


    </div>
  )
}

export default Skills
