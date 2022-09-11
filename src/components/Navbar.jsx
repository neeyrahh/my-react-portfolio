import React from 'react'
import { useState } from 'react';
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaMedium} from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {logo} from '../assets';

const Navbar = () => {
  const[nav,setNav] =useState(false)
  const handleClick = () =>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
      <img src={logo} alt='Logo Image'  className ='h-[70px]' />
    </div>
        
          <ul className='hidden md:flex '>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact Us</li>
          </ul>
     
         {/* Hamburger */}
       
        <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
        {/* mobile menu */}
      
            <ul  className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact Us</li> 
            </ul>
       

        {/* social icon */}
        <div className='hidden lg:flex  fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between w-full items-center text-gray-200' href='/'>LinkedIn<FaLinkedin size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between w-full items-center text-gray-200' href='/'>GitHub<FaGithub size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c21010]'>
            <a className='flex justify-between w-full items-center text-gray-200' href='/'>Email<HiOutlineMail size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4c3a51]'>
            <a className='flex justify-between w-full items-center text-gray-200' href='/'>Resume<BsFillPersonLinesFill size={30}/></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#383a3d]'>
            <a className='flex justify-between w-full items-center text-gray-200' href='/'>Medium<FaMedium size={30}/></a>
          </li>
        </ul>
        </div>
      
    </div>
  )
}

export default Navbar
