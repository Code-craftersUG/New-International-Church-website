import React from 'react'
import Img from '../assets/post2.png'
import Img1 from '../assets/post22.png'

const Post2 = () => {
  return (
    <div>
        <div className='my-10 text-center'>
            <h1 className='uppercase'>RELATIONSHIP</h1>
            <p className='uppercase bg-gradient-to-t from-[#0d0d0d] to-[#A54E2B] text-transparent bg-clip-text text-4xl font-bold'>HOW TO SHOW COMPASSION</p>
            <div className='flex items-center justify-center gap-8 text-sm my-3'>
                <p>12th May, 2024</p>
                <p>By ISHMAEL LAMPTEY</p>
            </div>
        </div>
        <img src={Img} className='w-[1000px] flex items-center justify-center mx-28 mb-10'/>
        <div className='text-center'>
            <h1 className='uppercase text-3xl font-bold'> The Heart of Compassion</h1>
        </div>
        <p className='mx-60 text-sm my-2'>Text: Matthew 9:36-38<br />
            Introduction:Compassion is a fundamental aspect of Christian living. It's a virtue that Jesus exemplified throughout his ministry, and it's a quality that we are called to emulate as his followers. In this sermon, we'll explore the heart of compassion, its importance, and practical ways to demonstrate it.
        </p>
        <p className='mx-60 text-sm my-2'>I. The Definition of Compassion<br />
            - Compassion is a deep feeling of empathy and concern for those who are suffering or in need.<br />
            II. The Example of Jesus<br />
            - Jesus was moved with compassion whenever he saw people in need (Matthew 9:36, Mark 1:41, Luke 7:13).<br />
            - He demonstrated compassion through his teachings, miracles, and interactions with outcasts and marginalized people.</p>
        <img src={Img1} className='w-[740px] h-[300px] mx-60 mb-6' />
        <p className='mx-60 text-sm my-2'>III. The Importance of Compassion<br />
            - Compassion reflects God's character and love (Psalm 103:13, Isaiah 30:18).<br />
            - It's a way to fulfill Jesus' commandment to love our neighbors as ourselves (Mark 12:31).<br />
            - Compassion brings hope and healing to those who are hurting (Psalm 34:18, 2 Corinthians 1:3-4).<br />
        </p>
        <p className='mx-60 text-sm my-2 mb-10'>IV. Barriers to Compassion<br />
            - Lack of empathy and understanding (Matthew 25:31-46).<br />
            - Self-centeredness and busyness (Luke 10:30-37).<br />
            - Fear and prejudice (John 4:9).<br />
        </p>
        <p className='font-bold text-3xl mx-60'>CONCLUSION</p>
        <div className='flex gap-2 mx-60 my-10 mb-16'>
            <div className='w-1 h-16 bg-orange-400'/>
            <p className='text-sm'>Compassion is a powerful force that can transform lives and communities. As followers of Jesus, let us ask God to give us compassionate hearts, and let us be willing to be used by Him to bring hope and healing to those around us.
            </p>
        </div>
    </div>
  )
}

export default Post2