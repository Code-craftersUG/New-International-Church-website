import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../assets/hero.png'
import Hand from '../assets/hand.png'
import Involve from '../assets/involve.png'
import Donate from '../assets/donate.png'
import Pic1 from '../assets/pic1.png'
import Pic2 from '../assets/pic2.png'
import Pic3 from '../assets/pic3.png'
import Advert from '../assets/advert.png'
import Banner from '../assets/banner.png'
import Logo from '../assets/logo.png'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className=''>
        <div className=''>
            <div className='absolute z-50 flex flex-col gap-4 justify-center h-full text-white px-28'>
                <div className=''>
                    <p className='uppercase'>Welcome to our Church</p>
                    <p className='uppercase text-5xl font-bold w-[500px]'>Become a part of our community</p>
                </div>
                <div className='bg-[#FB8910] px-6 py-2 rounded-lg w-fit text-black hover:scale-110 duration-300 ease-linear cursor-pointer'>Learn More</div>
                <div className='flex flex-row items-center gap-4'>
                    <div className='bg-[#FB8910] w-4 h-1'></div>
                    <p>NEW INTERNATIONAL CHURCH (NIC) <br/> GHANA</p>
                </div>
            </div>
            <img src={Logo} className='absolute right-0 z-50 bottom-0' />
            <img src={Hero} className='relative'/>
        </div>
      </div>
      <div className='my-12'>
        <div className='text-center '>
            <p>NIC</p>
            <p className='uppercase text-3xl font-bold'>a church that's relevant</p>
        </div>
        <div className='grid grid-cols-3 gap-8 mx-16 mt-8'>
            <div className='hover:scale-110 duration-300 ease-linear group'>
                <div className='bg-[#FFF5EB] p-12 flex flex-col gap-4'>
                    <img src={Hand} className='w-12 mt-12'/>
                    <div>
                        <h1 className='text-2xl font-bold uppercase'>About us</h1>
                        <p className='text-[14px]'>We are a vibrant community of faith in Accra, Ghana. We're dedicated to spreading God's love and serving our community. Join us on this journey of faith, hope, and love.</p>
                    </div>
                </div>
                <div className='bg-[#FFD2A4] h-4 group-hover:bg-orange-400 duration-300 ease-linear'></div>
            </div>
            <div className='hover:scale-110 duration-300 ease-linear group'>
                <div className='bg-[#FFF5EB] p-12 flex flex-col gap-4'>
                    <img src={Involve} className='w-12 mt-12'/>
                    <div>
                        <h1 className='text-2xl font-bold uppercase'>Get Involved</h1>
                        <p className='text-[14px]'>Join our community in serving others! Volunteer, participate in outreach programs, and engage in small groups to deepen your connection with God and our church family.</p>
                    </div>
                </div>
                <div className='bg-[#FFD2A4] h-4 group-hover:bg-orange-400 duration-400 ease-linear'></div>
            </div>
            <div className='hover:scale-110 duration-300 ease-linear group'>
                <div className='bg-[#FFF5EB] p-12 flex flex-col gap-4'>
                    <img src={Donate} className='w-12 mt-12'/>
                    <div>
                        <h1 className='text-2xl font-bold uppercase'>Give Back</h1>
                        <p className='text-[14px]'>Sharing God's love through service and generosity. Support our outreach programs, missions, and community initiatives, making a tangible difference in the lives of others.</p>
                    </div>
                </div>
                <div className='bg-[#FFD2A4] h-4 group-hover:bg-orange-400 duration-400 ease-linear'></div>
            </div>
            
        </div>
        
      </div>
      <div className='my-16'>
        <div className='text-center'>
            <p className='uppercase'>About Us</p>
            <h1 className='uppercase text-3xl font-bold'>love and compassion</h1>
            <p className='px-40 text-[14px] pt-6'>Embracing God's love, we extend compassion to all. Our doors are open to those seeking refuge, comfort, and support. Through prayer, counseling, and care, we share the healing power of love, fostering a sense of belonging and hope in our community</p>
        </div>
        <div className='grid grid-cols-3 gap-8 mx-40 mt-20'> 
            <div>
                <img src={Pic1} className='w-64'/>
            </div>
            <div>
                <div className='bg-[#FFD2A4] px-6 py-2 w-fit rounded-2xl mb-16 mx-auto cursor-pointer -mt-10 hover:scale-110 duration-300 ease-linear hover:bg-[#FB8910]'>Read More</div>
                <img src={Pic2} className=''/>
            </div>
            <div>
                <img src={Pic3} className='w-64'/>
            </div>
        </div>
      </div>
      <div className='text-center'>
        <div>
            <p className='uppercase '>our mission & vision</p>
            <p className='uppercase text-3xl font-bold'>celebrate WITH US</p>
        </div>
        <p className='mx-60 py-5'>Join us in joyful worship, special events, and milestones. Let's celebrate God's love and blessings together!</p>
        <p>Read More</p>
      </div>
      <div className='my-24'>
        <div className='text-center mb-12'>
            <p className='uppercase'>UPcoming Sermon</p>
            <h1 className='uppercase text-3xl font-semibold mx-[400px]'>join us and become part of something great</h1>
        </div>
        <img src={Advert} className='mx-16 w-[1090px]'/>
      </div>
      <div>
        <img src={Banner} />
      </div>
      <div className='my-10'>
        <div className='text-center'>
            <h1 className='uppercase'>Read Our Blogs</h1>
            <h3 className='uppercase text-3xl font-bold'>SHARE, INSPIRE, INNOVATE</h3>
        </div>
        <div className='grid grid-cols-4 mx-16 gap-6 my-8'>
            <div className='bg-[#FFF5EB] p-4'>
                <p className='text-orange-400 uppercase'>Relationship</p>
                <h1 className='text-xl font-semibold pt-2'>WATCH AND LISTEN TO OUR SERMONS</h1>
                <p className='text-[12px] pr-8'>Explore our library of sermons, where faith comes alive through inspiring messages and uplifting teachings.</p>
                <div className='mt-10'>
                    <p>By Ishmeal lamptey</p>
                    <p className='text-[14px]'>Senior Pastor   NIC (Legon)</p>
                </div>
            </div>
            <div className='bg-[#FFF5EB] p-4'>
                <p className='text-orange-400 uppercase'>Relationship</p>
                <h1 className='text-xl font-semibold pt-2'>WATCH AND LISTEN TO OUR SERMONS</h1>
                <p className='text-[12px] pr-8'>Explore our library of sermons, where faith comes alive through inspiring messages and uplifting teachings.</p>
                <div className='mt-10'>
                    <p>By Ishmeal lamptey</p>
                    <p className='text-[14px]'>Senior Pastor   NIC (Legon)</p>
                </div>
            </div>
            <div className='bg-[#FFF5EB] p-4'>
                <p className='text-orange-400 uppercase'>Relationship</p>
                <h1 className='text-xl font-semibold pt-2'>WATCH AND LISTEN TO OUR SERMONS</h1>
                <p className='text-[12px] pr-8'>Explore our library of sermons, where faith comes alive through inspiring messages and uplifting teachings.</p>
                <div className='mt-10'>
                    <p>By Ishmeal lamptey</p>
                    <p className='text-[14px]'>Senior Pastor   NIC (Legon)</p>
                </div>
            </div>
            <div className='bg-[#FFF5EB] p-4'>
                <p className='text-orange-400 uppercase'>Relationship</p>
                <h1 className='text-xl font-semibold pt-2'>WATCH AND LISTEN TO OUR SERMONS</h1>
                <p className='text-[12px] pr-8'>Explore our library of sermons, where faith comes alive through inspiring messages and uplifting teachings..</p>
                <div className='mt-10'>
                    <p>By Ishmeal lamptey</p>
                    <p className='text-[14px]'>Senior Pastor   NIC (Legon)</p>
                </div>
            </div>
        </div>
      </div>
        <Footer/>
    </div>

  )
}

export default Home
