import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../assets/about.png'
import Im from '../assets/about-img.png'
import Joy from '../assets/joy.png'
import Value from '../assets/value.png'
import Charity from '../assets/charity.png'
import Invite from '../assets/invite.png'
import Footer from '../Components/Footer'
import Pastor1 from '../assets/goerge.png'
import Pastor2 from '../assets/david.png'
import Pastor3 from '../assets/ishmeal.png'
import Pastor4 from '../assets/john.png'

const About = () => {
  return (
    <div>
      <Navbar/>
      <img src={Hero} alt='hero' />
      <div>
        <div className='pt-20 text-center flex flex-col gap-3'>
            <p className='uppercase'>Welcome to our Church</p>
            <p className='font-bold text-4xl uppercase'>Love and compassion</p>
            <p className='mx-52 text-[16px] text-gray-600'>Embracing God's love, we extend compassion to all. Our doors are open to those seeking refuge, comfort, and support. Through prayer, counseling, and care, we share the healing power of love, fostering a sense of belonging and hope in our community</p>
        </div>
        <img src={Im} alt='' className='mx-28 w-[80vw] my-6'/>
      </div>
      <div className='grid grid-cols-2 gap-5 mx-52 py-6'>
        <div className='flex flex-col gap-2'>
            <p>OUR MISSION & VISION</p>
            <p className='font-bold text-2xl'>STRIVING FOR A BETTER TOMORROW</p>
            <p className='text-[14px]'>Our mission is to share the love of God with all, empowering individuals to become disciples of Christ. Our vision is to build a compassionate community, united in faith, hope, and love, where everyone can find purpose, belonging, and spiritual growth, transforming lives and the world around us.</p>
        </div>
        <div className='flex flex-col gap-2'>
            <p>WHAT WE DO</p>
            <p className='font-bold text-2xl uppercase'>BRINgING PEACE AND JOY TO THE WORLD</p>
            <p className='text-[14px]'>We are a vibrant community of believers, dedicated to spreading God's love and message. Through worship, outreach, and service, we strive to make a positive impact in our world. We nurture spiritual growth, foster meaningful connections, and provide support for one another, glorifying God in all we do.</p>
        </div>
        
      </div>
        <div className='my-4 flex-col flex gap-2'>
            <div className='text-center py-12 flex flex-col gap-3'>
                <p>BENEFITS</p>
                <p className='uppercase text-4xl font-bold'>THE benefits of joining our church</p>
            </div>
            <div className='flex flex-col gap-8'>
            <div className='flex flex-row gap-8 items-center justify-center mx-32'>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-2xl font-bold'>Find Fullfillment and Joy</p>
                    <p>Experience the joy of serving others and deepening your faith. Find purpose and meaning in our community, and discover the fulfillment that comes from living a life of love, compassion, and service to others</p>
                </div>
                <img src={Joy} alt='joy' className='w-[500px]'/>
            </div>
            
            <div className='flex flex-row-reverse gap-8 items-center justify-center mx-32'>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-2xl font-bold'>Shared Values</p>
                    <p>Together, we share values of love, respect, and compassion, creating a supportive community that uplifts and inspires one another. Our shared values foster a sense of belonging, unity, and purpose, guiding us to live with integrity and make a positive impact in the world.</p>
                </div>
                <img src={Value} alt='value' className='w-[500px]'/>
            </div>
            <div className='flex flex-row gap-8 items-center justify-center mx-32'>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-2xl font-bold'>Charity Events</p>
                    <p>With compassion and love, we organize regular charity events, providing food and essentials to those in need. Join us in sharing the blessings, spreading hope and kindness, and making a difference in the lives of our community's most vulnerable members.</p>
                </div>
                <img src={Charity} alt='joy' className='w-[500px]'/>
            </div>
            <div className='flex flex-row-reverse gap-8 items-center justify-center mx-32'>
                <div className='flex flex-col gap-2'>
                    <p className='uppercase text-2xl font-bold'>All are welcomed</p>
                    <p>Regardless of background, race, gender, or circumstance, all are welcome in our community. We embrace diversity and inclusivity, creating a safe space for everyone to feel valued, respected, and loved. Come as you are, and experience the warmth and acceptance of our loving community.</p>
                </div>
                <img src={Invite} alt='joy' className='w-[500px]'/>
            </div>
            </div>
        </div>
        <div className='my-12 '>
            <div className='text-center uppercase flex flex-col gap-4'>
                <p>Church Members</p>
                <p className='text-4xl font-bold'>Meet our inspirational team</p>
            </div>
            <div className='grid grid-cols-4 gap-5 mx-10 mt-5'>
                <div className='bg-white rounded-md flex items-center flex-col p-2'>
                    <img src={Pastor1} alt='' className='w-[150px]'/>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <p className='font-bold text-xl'>PASTOR GOERGE</p>
                        <p>Pastor, Church</p>
                        {/* <div>
                            <img src={} alt='' />
                            <img src={} alt='' />
                            <img src={} alt='' />
                        </div> */}
                    </div>
                </div>
                <div className='bg-white rounded-md flex items-center flex-col p-2'>
                    <img src={Pastor2} alt='' className='w-[150px]'/>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <p className='font-bold text-xl'>DAVID AWUDI</p>
                        <p>NIC ADENTA</p>
                        {/* <div>
                            <img src={} alt='' />
                            <img src={} alt='' />
                            <img src={} alt='' />
                        </div> */}
                    </div>
                </div>
                <div className='bg-white rounded-md flex items-center flex-col p-2'>
                    <img src={Pastor3} alt='' className='w-[200px]'/>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <p className='font-bold text-xl'>ISHMAEL LAMPTEY</p>
                        <p>NIC LEGON</p>
                        {/* <div>
                            <img src={} alt='' />
                            <img src={} alt='' />
                            <img src={} alt='' />
                        </div> */}
                    </div>
                </div>
                <div className='bg-white rounded-md flex items-center flex-col p-2'>
                    <img src={Pastor4} alt='' className='w-[150px]'/>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <p className='font-bold text-xl'>APOSTLE JOHN E. SAGOE</p>
                        <p>NIC SWITZERLAND</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About
