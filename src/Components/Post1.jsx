import React from 'react'
import Img from '../assets/post1.png'
import Img1 from '../assets/post13.png'

const Post1 = () => {
  return (
    <div>
        <div className='my-10 text-center'>
            <h1 className='uppercase'>RELATIONSHIP</h1>
            <p className='uppercase bg-gradient-to-t from-[#0d0d0d] to-[#A54E2B] text-transparent bg-clip-text text-4xl font-bold'>the best way to inspire people</p>
            <div className='flex items-center justify-center gap-8 text-sm my-3'>
                <p>12th May, 2024</p>
                <p>By ISHMAEL LAMPTEY</p>
            </div>
        </div>
        <img src={Img} className='w-[1000px] flex items-center justify-center mx-28 mb-10'/>
        <div className='text-center'>
            <h1 className='uppercase text-3xl font-bold'>The Best Way to Inspire People</h1>
        </div>
        <p className='mx-60 text-sm my-2'>Inspiring others is a vital part of our Christian walk, deeply rooted in love and compassion. Jesus’ teachings offer us the perfect blueprint for how to inspire those around us. In John 13:34, He says, “A new command I give you: Love one another. As I have loved you, so you must love one another.” Love is the foundation of true inspiration, encouraging others through genuine care and concern.</p>
        <p className='mx-60 text-sm my-2'>Encouragement is also crucial. Paul writes in 1 Thessalonians 5:11, “Therefore encourage one another and build each other up, just as in fact you are doing.” Words of encouragement can uplift a weary heart and provide the motivation needed to overcome challenges. By speaking life into others, we remind them of their worth and potential in God’s eyes.
        <br/>
        Living by example is another powerful way to inspire. In 1 Timothy 4:12, Paul urges us to “set an example for the believers in speech, in conduct, in love, in faith and in purity.” When we embody Christ’s teachings in our daily lives, we become a beacon of light that others can follow.</p>
        <img src={Img1} className='w-[740px] h-[300px] mx-60 mb-6' />
        <p className='mx-60 text-sm my-2'>Furthermore, being a source of inspiration often means serving others selflessly. Jesus demonstrated this when He washed His disciples' feet, teaching us that true leadership and inspiration come from a place of humility and service (John 13:14-15).</p>
        <p className='mx-60 text-sm my-2 mb-10'>Finally, prayer is a powerful tool for inspiration. By praying for others, we invite God to work in their lives, helping them to see His love and purpose. James 5:16 reminds us, “The prayer of a righteous person is powerful and effective.”</p>
        <p className='font-bold text-3xl mx-60'>CONCLUSION</p>
        <div className='flex gap-2 mx-60 my-10 mb-16'>
            <div className='w-1 h-16 bg-orange-400'/>
            <p className='text-sm'>Inspiring others through love, encouragement, example, service, and prayer not only brings them closer to God but also spreads His light in the world.</p>
        </div>
    </div>
  )
}

export default Post1