import React from 'react'
import Logo from '../assets/logo.png'
import FB from '../assets/fb.png'
import X from '../assets/x.png'
import LinkedIn from '../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='grid grid-cols-4 gap-4 px-20 bg-black text-white w-full py-10'>
      <div className='flex flex-col gap-3 text-[12px]'>
        <img src={Logo} alt='logo' className='w-44'/>
        <p className='uppercase'>@ Copyright Code Crafters 2024</p>
        <div>
            <p>+233 578976987</p>
            <p>Accra, Ghana</p>
            <p>CODECRAFTER111@GMAIL.COM</p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p>QUICK LINKS</p>
        <div className='flex flex-col gap-1 text-[12px]'>
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>SERMONS</p>
            <p>EVENTS</p>
            <p>BLOGS</p>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <p>CONNECT</p>
        <div className='flex flex-row gap-4'>
            <img src={FB} alt='fb' className='w-7'/>
            <img src={X} alt='x' className='w-7'/>
            <img src={LinkedIn} alt='linkedin' className='w-7'/>
        </div>
      </div>
      <div>
        <p className='font-bold text-2xl'>SUBSCRIBE TO GET LATEST UPDATES</p>
        <div className='flex flex-row items-center gap-0 mt-10'>
            <input type='search' placeholder='ghguhy@gmail.com' className='py-2 px-2 bg-transparent border border-gray-300 rounded-md'/>
            <p className='bg-orange-500 py-2 px-5 rounded-lg'>SUBSCRIBE</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
