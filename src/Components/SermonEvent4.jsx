import React from 'react'
import Img from '../assets/event4.png'

const SermonEvent4 = () => {
  return (
    <div className='mx-20 w-[550px]'>
        <img src={Img} className='w-full'/>
        <p className='text-orange-400 uppercase pt-10'>UPCOMING EVENT</p>
        <p className='text-3xl font-bold uppercase'>my worship is my weapon </p>
        <p className='text-sm text-gray-600'>Worship is not merely a Sunday activity or a routine; it is a powerful expression of our faith and trust in God. When we worship, we declare the greatness of God and align our hearts with His divine will. It becomes a tool for victory, a means of overcoming the adversities that life throws our way.
        Consider the story of King Jehoshaphat in 2 Chronicles 20. When faced with a vast army, Jehoshaphat did not resort to conventional means of defense. Instead, he turned to worship. He appointed singers to lead the army, proclaiming the beauty of holiness. As they began to sing and praise, the Lord set ambushes against their enemies, and victory was granted without a single weapon being raised.</p>
        <div className='flex gap-10 my-8'>
            <div className='w-1 h-16 bg-orange-300'/>
            <p className='text-sm text-gray-600'> In our praise, we find strength, victory, and the assurance that God is with us, fighting our battles and leading us to triumph.</p>
        </div>
    </div>
  )
}

export default SermonEvent4
