import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8  '>Turn your imagination into reality, you imagine we create</p> 

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg ' />
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducig the most powerful Text to AI Image Generator, <span className='text-blue-600'>Imagine</span></h2>
            <p className='text-gray-600 mb-4'>Easily Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat aspernatur ut nemo? Unde tenetur et, numquam labore ducimus autem cupiditate ab omnis ipsa placeat. Vel natus magnam earum. Voluptatum sint consequuntur dignissimos quaerat.</p>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quia debitis iusto architecto nihil ducimus consequatur totam, odio esse rem aspernatur impedit aliquam corporis voluptatem rerum dolorem! Hic delectus ea dolorum doloribus, odit a veritatis.</p>
        </div>
      </div>

    </div>
  )
}

export default Description
