import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Img from '../assets/sermon1.png'
import Footer from '../Components/Footer'
import { GrLocationPin } from 'react-icons/gr'
import { IoTimeOutline } from 'react-icons/io5'


const data = [
    {id: 0, image: Img, message: "MESSAGE"},
    {id: 1, image: Img, message: "MESSAGE"},
    {id: 2, image: Img, message: "MESSAGE"},
    {id: 3, image: Img, message: "MESSAGE"},
]
const SermonEvents = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex gap-16 my-10'>
        <main>
            <Outlet/>
        </main>
        <div className='bg-white rounded-3xl py-10 px-4 h-fit'>
            <h1 className='text-2xl font-bold'>REGISTER NOW</h1>
            <div className='flex items-center gap-8 my-8'>
                <p className='flex items-center gap-1 text-sm'><GrLocationPin /> ACCRA, GHANA</p>
                <p className='flex items-center gap-1 text-sm'><IoTimeOutline /> 14th August, 2024</p>
            </div>
            <form>
                <label className='text-sm text-gray-700 py-2'>Full Name</label><br/>
                <input placeholder='Leonard Doe' type='name' className='border-b outline-none border-gray-500 w-full mb-4'/><br/>
                <label className='text-sm text-gray-700 py-2'>Email</label><br/>
                <input placeholder='abc@gmail.com' type='email' className='border-b outline-none border-gray-500 w-full mb-4'/>
                <div className='bg-orange-300 py-2 text-center px-6 rounded-md cursor-pointer hover:bg-orange-500 duration-300 ease-linear w-fit'> REGISTER NOW </div>
            </form>
        </div>
      </div>
      <div className=''>
        <div className='text-center my-10'>
            <h1 className='mt-10'>MINISTER</h1>
            <p className='text-5xl font-bold'>UPCOMING SERMON</p>
        </div>
        <div className='flex items-center gap-8 justify-center mb-10'>
            {
                data.map((item) => {
                    return(
                    <div key={item.id} className='bg-orange-200 px-16 py-2'>
                        <img src={item.image} className='w-32'/>
                        <p className='text-center'>{item.message}</p>
                    </div>
                    )
                })
            }
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SermonEvents
