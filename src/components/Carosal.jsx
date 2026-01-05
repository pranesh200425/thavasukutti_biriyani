import React from 'react'

import bir1 from '../assets/bir1.png';
import bir2 from '../assets/bir2.png';
import bir3 from '../assets/bir3.png';
import bir4 from '../assets/bir4.png';

import '../App.css'

const Carosal = () => {
  return (
    <div className='flex items-center justify-center mt-3 pt-1 pb-1' >
        <div className='flex min-h-80 min-w-[20rem] items-center justify-center  bg-amber-300 rounded-full relative pt-80 overflow-hidden ' >
            <div className='  flex flex-col overflow-visible relative items-center justify-center ' id='carousal' >
            <div className='absolute h-140 w-140 top-[-50%]' > <img src={bir1} alt="Biriyani 1" /> </div>
            <div className='absolute h-140 w-140 left-[-50%] ' > <img src={bir2} alt="Biriyani 2" /> </div>
            <div className='absolute h-140 w-140 right-[-50%] ' > <img src={bir3} alt="Biriyani 3" /> </div>
            <div className='absolute h-140 w-140 bottom-[-50%] ' > <img src={bir4} alt="Biriyani 4" /> </div>
            </div>
        </div>
    </div>
  )
}

export default Carosal