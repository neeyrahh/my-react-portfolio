import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-500'>ABOUT
            </p>
            </div>
            <div></div>
         </div>
         
        
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
       <div className='sm:text-right text-4xl font-bold'>
        <p>Hi, I'm Munirat, you can call me Neeyrah. Please take a look around.</p>
        </div>
        <div>
            <p>I am passionate about building software that improves the lives of people. I specialize in creating software for clients ranging from individual and small businesses. I write my thought and my feelings down,you could learn from it. I share my experience through writing.</p>
        </div>
        </div>
        </div>
     </div>
  )
}

export default About
