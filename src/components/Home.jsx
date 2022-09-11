import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className=' w-full h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-[#FFB562]' >My name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#F5EDDC]'>Somoye Munirat</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#E9D5CA]'>I am a software Developer</h2>
          <p className='text-[#CDC2AE] py-4 max-w-[700px]'>I am a software developer specializing in building scalable and effective produts. Currently, I'm focused on building responsive softwares web applications.  </p>
          <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ffb562] hover:border-[#ffb562] '>View More<HiArrowNarrowRight className='ml-3'/></button>
          </div>
        </div>
    </div>
  )
}

export default Home
