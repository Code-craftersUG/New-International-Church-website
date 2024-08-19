import React from 'react'
import Navbar from '../Components/Navbar'
import Blog1 from '../assets/blog.png'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import Post5 from '../Components/Post5'


const info =[
    {header: "Relationship", title: "THE BEST WAY TO INSPIRE PEOPLE", body: "Inspiring others through love, encouragement, example, service, and prayer not only brings them closer to God but also spreads His light in the world.", link: "blogPost/post1"},
    {header: "Relationship", title: "HOW TO SHOW COMPASSION", body: " As followers of Jesus, let us ask God to give us compassionate hearts, and let us be willing to be used by Him to bring hope and healing to those around us.", link: "blogPost/post2"},
    {header: "Relationship", title: "THE BIBLICAL PURPOSE OF MONEY", body: "The biblical purpose of money is to provide, make sure to give generously, support the work of God, and avoid greed, always using it in ways that honor Him.", link: "blogPost/post3"},
    {header: "Relationship", title: "SERVICE TO MANKIND IS SERVICE TO GOD", body: " By serving mankind, we not only help those in need but also draw closer to God, fulfilling His will in our lives.This selfless service strengthens our faith, deepens our relationship with God.", link: "blogPost/post4"},
    {header: "Relationship", title: "WHAT IT MEANS TO BE A DISCIPLE", body: "In essence, being a disciple involves a deep, personal commitment to follow Jesus Christ, grow in His good teachings as well as love others as He loves us.", link: "blogPost/Post5"},
    {header: "Relationship", title: "WHAT IT MEANS TO BELIEVE", body: "We both celebrate and challenge the culture around us as we orient our lives around Jesus.There is indeed a need to believe in the Lord, to strenghten your  faith, you have to believe.", link: "blogPost/Post6 "},
    {header: "Relationship", title: "THE MODERN CHURCH IN 2024", body: "The modern church in 2024 is a vibrant, adaptable body of believers committed to using every available resource to spread the gospel and live out the love of Christ in today’s world.", link: "blogPost/Post7 "}
]

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <div className='my-12 text-center'>
        <h2>OUR BLOGS</h2>
        <h2 className='text-3xl font-semibold'>MOST RECENT POST</h2>
      </div>
      <img src={Blog1} alt='' className='mx-auto flex items-center w-[990px] my-20'/>
      <div>
        <h2 className='text-center my-10 text-3xl font-semibold'>ALL BLOG POST</h2>
      </div>
      <div className='grid grid-cols-4 gap-3 mx-10 mb-10'>
        {info.map((item, id) => {
            return(
            <Link to={item.link} key={id}>
              <div className='bg-white p-4'>
                  <p className='uppercase text-sm text-orange-400 pt-3'>{item.header}</p>
                  <p className='text-xl font-semibold'>{item.title}</p>
                  <p className='text-sm'>{item.body}</p>
                  <div className='pt-6'>
                      <p>By ISHMAEL LAMPTEY</p>
                      <p>13th March, 2024</p>
                  </div>
              </div>
            </Link>
            )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Blog
