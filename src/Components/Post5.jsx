import React from 'react'
import Img from '../assets/post5.png'
import Img1 from '../assets/post51.png'

const Post5 = () => {
  return (
    <div>
        <div className='my-10 text-center'>
            <h1 className='uppercase'>RELATIONSHIP</h1>
            <p className='uppercase bg-gradient-to-t from-[#0d0d0d] to-[#A54E2B] text-transparent bg-clip-text text-4xl font-bold'>WHAT IT MEANS TO BE A DISCIPLE</p>
            <div className='flex items-center justify-center gap-8 text-sm my-3'>
                <p>12th May, 2024</p>
                <p>By ISHMAEL LAMPTEY</p>
            </div>
        </div>
        <img src={Img} className='w-[1000px] flex items-center justify-center mx-28 mb-10'/>
        <div className='text-center'>
            <h1 className='uppercase text-3xl font-bold'> being a disciple</h1>
        </div>
        <p className='mx-60 text-sm my-2'>Being a disciple of Christ is more than just an outward label; it is a profound commitment to follow Jesus in every aspect of our lives. To be a disciple means to adopt a lifestyle that mirrors His teachings and embodies His love. </p>
        <p className='mx-60 text-sm my-2'>Jesus’ call to discipleship is clear. In Luke 9:23, He says, “Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me.” This call requires self-denial and a willingness to endure hardships for the sake of the Kingdom. It’s a daily commitment to put aside our own desires and align ourselves with Christ’s mission.
        </p>
        <img src={Img1} className='w-[740px] h-[300px] mx-60 mb-6' />
        <p className='mx-60 text-sm my-2'>Discipleship also involves learning and growing in our relationship with God. In Matthew 28:19-20, Jesus instructs us to “go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.” This Great Commission highlights the importance of not only following Jesus but also guiding others to do the same, emphasizing a continual process of learning and teaching.</p>
        <p className='mx-60 text-sm my-2 mb-10'>Moreover, being a disciple means embodying the love of Christ in our interactions with others. In John 13:34-35, Jesus commands us to “love one another. As I have loved you, so you must love one another. By this everyone will know that you are my disciples, if you love one another.” Our love for others is the defining mark of our discipleship.</p>
        <p className='font-bold text-3xl mx-60'>CONCLUSION</p>
        <div className='flex gap-2 mx-60 my-10 mb-16'>
            <div className='w-1 h-16 bg-orange-400'/>
            <p className='text-sm'>In essence, being a disciple involves a deep, personal commitment to follow Christ, grow in His teachings, and love others as He loves us. It’s a journey of transformation that reflects His grace and truth in our daily lives.</p>
        </div>
    </div>
  )
}

export default Post5