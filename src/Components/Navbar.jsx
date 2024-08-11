import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black flex items-center justify-between px-6 pr-16'>
      <img src={Logo} className='w-32' />
      <div className='text-white flex items-center gap-8'>
        <Link to='/'>
          <li className=' list-none cursor-pointer hover:text-[#FB8910] duration-300 ease-linear'>Home</li>
        </Link>
        <Link to='/about'>
          <li className=' list-none cursor-pointer hover:text-[#FB8910] duration-300 ease-linear'>About Us</li>
        </Link>
        <Link to='/sermon'>
          <li className=' list-none cursor-pointer hover:text-[#FB8910] duration-300 ease-linear'>Sermon</li>
        </Link>
        <Link to='/blog'>
          <li className=' list-none cursor-pointer hover:text-[#FB8910] duration-300 ease-linear'>Blogs</li>
        </Link>
      </div>
      <Link to="/contact">
        <div className='bg-[#FB8910] px-3 py-2 rounded-lg cursor-pointer hover:scale-110 duration-300 ease-linear'>Contact Us</div>
      </Link>
    </div>
  )
}

export default Navbar
