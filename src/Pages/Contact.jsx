import React from 'react'
import Banner from '../assets/contact.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />  
      <img src={Banner} />
      <div className='grid grid-cols-2 gap-6'>
        <div className='mx-10 my-10'>
            <h2 className='font-semibold text-xl'>CONTACT FORM:</h2>
            <form className='flex flex-col gap-2 my-6'>
                <input type='text' placeholder='Your Full Name' className='py-2 px-4 outline-none'/>
                <input type='email' placeholder='Your Email' className='py-2 px-4 outline-none'/>
                <input type='text' placeholder='Query Related' className='py-2 px-4 outline-none'/>
                <textarea placeholder='Message' rows={5} className='py-2 px-4 outline-none'></textarea>
                <input type='submit' name='SEND MESSAGE'  className='bg-white py-1 cursor-pointer hover:bg-orange-500 duration-500 ease-linear'/>
            </form>
        </div>
        <div className='mt-20 flex flex-col gap-12'>
            <div>
                <h3>Address</h3>
                <h3>Accra, Ghana</h3>
            </div>
            <div>
                <h3>Contact Details</h3>
                <h3>+233 596 842 918</h3>
                <h3>code.crafterz07@gmail.com</h3>
            </div>
            <div>
                <h3></h3>
                
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
