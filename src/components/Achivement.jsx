import React from 'react'
const Achivement = () => {
  return (
    <div className='items-center text-center text-white'>
        <div className='ml-3 uppercase text-[#BEFB7C]'>
            Achivement
        </div>
        <div >
            <h1 className='font-semibold uppercase text-9xl'>Showcase</h1>
            <h1 className='font-semibold uppercase text-9xl'>Design</h1>
        </div>
        <div className='flex justify-center mt-24 gap-44'>
            <div className='flex flex-col '>
                <h1 className='font-bold text-[150px] text-[#BEFB7C]'>116</h1>
                <p className='-mt-4 tracking-wider uppercase'>Project</p>
            </div>

            <div className='flex flex-col '>
                <h1 className='font-bold text-[150px] text-[#BEFB7C] text'>98</h1>
                <p className='-mt-4 tracking-wider uppercase'>clients</p>
            </div>

            <div className='flex flex-col '>
                <h1 className='font-bold text-[150px] text-[#BEFB7C]'>8</h1>
                <p className='-mt-4 tracking-wider uppercase'>experience</p>
            </div>
        </div>
    </div>
  )
}

export default Achivement