import React from 'react'
import { assets } from '../assets/assets'

const GenerateButton = () => {
  return (
    <div className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-natural-800 py-6 md:py-16'>See the Magic, Generate whatever you Imagine</h1>

      <button className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-400'>
        Generate Images
        <img src={assets.star_group} alt="" className='h-6'/>
      </button>
    </div>
  )
}

export default GenerateButton
