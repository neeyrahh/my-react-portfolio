import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
    <form method='POST' action="https://getform.io/f/989e4088-8161-4d85-beb5-dc4a6c225295" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4  border-yellow-500 text-gray-300'>Contact</p>
           
        </div>
        <input className='bg-[#f1f2f5] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#f1f2f5]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#f1f2f5] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-[#ffb562] hover:border-[#ffb562] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
</div>
  )
}

export default Contact