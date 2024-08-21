'use client'
import React from 'react'
import Lottie from "lottie-react";

const Services = ({lottie,text,paragraph}) => {
    const style = {
        height: 200,
        width: 200,
      };
    
  return (
    <div className='bg-[#202025] group w-[400px] flex flex-col h-[260px] rounded-2xl '>
        <div className='flex justify-center'>
        <Lottie animationData={lottie} loop={true} style={style} />
        </div>
        <div className='mx-2 text-start'>
            <h1>{text}</h1>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Services