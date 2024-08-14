import React from 'react'
import Img from '../assets/post4.png'
import Img1 from '../assets/post41.png'

const Post4 = () => {
  return (
    <div>
        <div className='my-10 text-center'>
            <h1 className='uppercase'>RELATIONSHIP</h1>
            <p className='uppercase bg-gradient-to-t from-[#0d0d0d] to-[#A54E2B] text-transparent bg-clip-text text-4xl font-bold'>service to mankind is service to god </p>
            <div className='flex items-center justify-center gap-8 text-sm my-3'>
                <p>16th May, 2024</p>
                <p>By ISHMAEL LAMPTEY</p>
            </div>
        </div>
        <img src={Img} className='w-[1000px] flex items-center justify-center mx-28 mb-10'/>
        <div className='text-center'>
            <h1 className='uppercase text-3xl font-bold'> The need to serve</h1>
        </div>
        <p className='mx-60 text-sm my-2'>The concept that service to others is service to God is deeply embedded in Christian teachings. Jesus made this clear in Matthew 25:40 when He said, “Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.” This powerful statement underscores that our actions toward others are a reflection of our relationship with God. </p>
        <p className='mx-60 text-sm my-2'>Serving others is not just a kind gesture but a spiritual duty. In Galatians 5:13, Paul encourages us to “serve one another humbly in love.” Our service should be motivated by love and humility, mirroring the way Christ served humanity. Whether it’s through acts of kindness, providing for those in need, or offering a listening ear, every act of service is a way to honor God.
        </p>
        <img src={Img1} className='w-[740px] h-[300px] mx-60 mb-6' />
        <p className='mx-60 text-sm my-2'>Additionally, serving others allows us to live out the Great Commandment, where Jesus teaches us to love our neighbors as ourselves (Mark 12:31). This love is not just an emotion but is expressed through our willingness to help and support others, reflecting God’s love for all.

Furthermore, service to mankind is a way of fulfilling our calling as Christians. Ephesians 2:10 reminds us, “For we are God’s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.” These good works include serving others, and through them, we live out our purpose in God’s plan.</p>
        <p className='mx-60 text-sm my-2 mb-10'>"When we serve others, we become conduits of God's love and compassion. Each act of service, no matter how small, reflects our commitment to embodying Christ's teachings. By putting others’ needs before our own, we are engaging in a divine exchange where our actions become a form of worship. This selfless service strengthens our faith, deepens our relationship with God, and inspires others to follow in His footsteps. Ultimately, serving others is not just an obligation but a profound way to live out the gospel, turning our daily lives into a testimony of God's enduring love and grace."</p>
        <p className='font-bold text-3xl mx-60'>CONCLUSION</p>
        <div className='flex gap-2 mx-60 my-10 mb-16'>
            <div className='w-1 h-16 bg-orange-400'/>
            <p className='text-sm'>In conclusion, when we serve others, we are serving God. It is a profound expression of our faith and a testament to the love and grace that God has shown us. By serving mankind, we not only help those in need but also draw closer to God, fulfilling His will in our lives.</p>
        </div>
    </div>
  )
}

export default Post4