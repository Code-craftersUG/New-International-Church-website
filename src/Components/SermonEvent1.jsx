import React from 'react'
import Img from '../assets/event1.png'

const SermonEvent1 = () => {
  return (
    <div className='mx-20 w-[550px]'>
        <img src={Img} className='w-full'/>
        <p className='text-orange-400 uppercase pt-10'>UPCOMING EVENT</p>
        <p className='text-3xl font-bold'>HOW TO TRULY TRUST SOMEONE</p>
        <p className='text-sm text-gray-600'>Trusting someone requires vulnerability, faith, and wisdom. It means surrendering your fears, doubts, and control, and choosing to believe in their goodness and intentions. Trust is built through consistent actions, honest communication, and empathy. When you truly trust someone, you create a safe space for deep connection, growth, and unwavering support.</p>
        <div className='flex gap-10 my-8'>
            <div className='w-1 h-16 bg-orange-300'/>
            <p className='text-sm text-gray-600'> Trusting someone means being willing to take risks, to be vulnerable, and to believe in their ability to catch you when you fall. It's a choice that requires effort, patience, and understanding, but yields a harvest of strong relationships, inner peace, and joy</p>
        </div>
    </div>
  )
}

export default SermonEvent1
