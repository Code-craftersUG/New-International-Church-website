import React from 'react'
import Sermon from '../assets/sermon.png'
import Navbar from '../Components/Navbar'
import Banner from '../assets/sermon-banner.png'
import Footer from '../Components/Footer'


const info =[
    {title: "TODAY'S EVENT", topic: "HOW TO TRULY TRUST SOMEONE", details: "How sure do you trust God? Believe in him and you are saved", date: "20 JULY"},
    {title: "TODAY'S EVENT", topic: "Faith is a process, not a destination", details: " Embrace the process, trust in God's plan, and let your faith continue to evolve.", date: "20 JULY"},
    {title: "TODAY'S EVENT", topic: "there is nothing impossible", details: "With God, nothing is impossible. He turns our greatest challenges into victories.", date: "20 JULY"},
    {title: "TODAY'S EVENT", topic: "my worship is my weapon", details: "The word of God is a weapon", date: "20 JULY"},
]

const Sermons = () => {
  return (
    <div>
      <Navbar/>
      <img src={Sermon} alt='hero' />
      <div className='text-center my-10 pt-10'>
        <h2>UPCOMING SERMONS</h2>
        <h2 className='text-4xl font-bold mx-[300px]'>JOIN US AND BECOME PART OF SOMETHING GREAT</h2>
        <img src={Banner} alt='' className='mt-8 mx-16 w-[90%]'/>
        <p className='mt-4 absolute right-16'>View All Sermon</p>
      </div>
      <div className='text-center mt-20'>
        <p className='text-3xl font-bold'>VIEW ALL EVENTS</p>
      </div>
      <div className='grid grid-cols-4 gap-5 mx-12 my-10'>
            {
                info.map((item, id) => {
                    return(
                        <div key={id} className='bg-white p-2 px-5'>
                          <p className='text-lg font-semibold ml-48 pb-4 w-8 text-right'>{item.date}</p>
                          <p className='text-sm uppercase text-orange-400'>{item.title}</p>
                          <p className='text-xl font-semibold uppercase'>{item.topic}</p>
                          <p className='text-sm'>{item.details}</p>
                        </div>
                    )
                })
            }
        </div>
      <Footer/>
    </div>
  )
}

export default Sermons
