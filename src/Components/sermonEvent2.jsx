import React from 'react'
import Img from '../assets/event2.png'

const SermonEvent2 = () => {
  return (
    <div className='mx-20 w-[550px]'>
        <img src={Img} className='w-full'/>
        <p className='text-orange-400 uppercase pt-10'>UPCOMING EVENT</p>
        <p className='text-3xl font-bold uppercase'>Faith is a process, not a destination</p>
        <p className='text-sm text-gray-600'>Faith is a journey that unfolds with every step we take, not a final destination we reach. It grows and evolves as we face life's challenges, guiding us through uncertainty. Embracing faith means trusting in God's plan, even when we cannot see the entire path. Remember, faith is about perseverance, growth, and trusting in the process rather than rushing to a conclusion.</p>
        <div className='flex gap-10 my-8'>
            <div className='w-1 h-16 bg-orange-300'/>
            <p className='text-sm text-gray-600'>Faith is a journey that unfolds over time, not a final destination. It grows through challenges and triumphs, guiding us through life's uncertainties. Embrace the process, trust in God's plan, and let your faith continue to evolve.</p>
        </div>
    </div>
  )
}

export default SermonEvent2
