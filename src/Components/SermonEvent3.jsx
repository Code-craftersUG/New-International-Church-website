import React from 'react'
import Img from '../assets/event3.png'

const SermonEvent3 = () => {
  return (
    <div className='mx-20 w-[550px]'>
        <img src={Img} className='w-full'/>
        <p className='text-orange-400 uppercase pt-10'>UPCOMING EVENT</p>
        <p className='text-3xl font-bold uppercase'>there is nothing impossible</p>
        <p className='text-sm text-gray-600'>With God, all things are possible. Our limitations are not His, and what seems insurmountable to us is well within His power. When we face trials, it is crucial to remember that God's strength is made perfect in our weakness. There is no obstacle too great, no situation too dire that He cannot overcome. Trust in Him, for with God, there is nothing impossible.</p>
        <div className='flex gap-10 my-8'>
            <div className='w-1 h-16 bg-orange-300'/>
            <p className='text-sm text-gray-600'>With God, nothing is impossible. He turns our greatest challenges into victories and our darkest moments into light. When we trust in His power, no obstacle is too great to overcome. Have faith—God makes the impossible possible.</p>
        </div>
    </div>
  )
}

export default SermonEvent3
