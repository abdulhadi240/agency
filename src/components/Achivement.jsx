import React from 'react'
const Achivement = () => {
  return (
    <div className='items-center text-center text-white'>
        <div className='ml-3 text-sm uppercase text-[#BEFB7C]'>
            Achivement
        </div>
        <div >
            <h1 className='text-6xl font-semibold uppercase sm:text-7xl'>Showcase</h1>
            <h1 className='text-6xl font-semibold uppercase sm:text-7xl'>Design</h1>
        </div>
        <div className='flex flex-col justify-center gap-16 mt-24 sm:flex-row sm:gap-24 lg:gap-44'>
            <div className='flex flex-col '>
                <h1 className='font-bold text-[100px] text-[#BEFB7C]'>116</h1>
                <p className='-mt-4 tracking-wider uppercase'>Project</p>
            </div>

            <div className='flex flex-col '>
                <h1 className='font-bold text-[100px] text-[#BEFB7C] text2'>98</h1>
                <p className='-mt-4 tracking-wider uppercase'>clients</p>
            </div>

            <div className='flex flex-col '>
                <h1 className='font-bold text-[100px] text-[#BEFB7C]'>8</h1>
                <p className='-mt-4 tracking-wider uppercase'>experience</p>
            </div>
        </div>
    </div>
  )
}

export default Achivement