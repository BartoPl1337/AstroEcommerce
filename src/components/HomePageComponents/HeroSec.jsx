import React from 'react'

const HeroSec = () => {
  return (
    <div className='flex justify-center mt-10'>
        <img src="product.png" alt="HeroPicture" className='object-cover relative'/>
        <div className='absolute top-48 text-white space-y-10 flex flex-col items-center'>
            <h1 className='font-bold text-5xl'>Collection is here</h1>
            <span className='text-lg w-full max-w-[650px] text-center'>The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out</span>
            <button className='border rounded-md py-2 px-4 font-semibold'>Explore</button>
        </div>
    </div>
  )
}

export default HeroSec