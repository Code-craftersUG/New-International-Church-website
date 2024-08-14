import React from 'react'
import Img from '../assets/post3.png'
import Img1 from '../assets/post31.png'

const Post3 = () => {
  return (
    <div>
        <div className='my-10 text-center'>
            <h1 className='uppercase'>RELATIONSHIP</h1>
            <p className='uppercase bg-gradient-to-t from-[#0d0d0d] to-[#A54E2B] text-transparent bg-clip-text text-4xl font-bold'>the biblical purpose of money</p>
            <div className='flex items-center justify-center gap-8 text-sm my-3'>
                <p>12th May, 2024</p>
                <p>By ISHMAEL LAMPTEY</p>
            </div>
        </div>
        <img src={Img} className='w-[1000px] flex items-center justify-center mx-28 mb-10'/>
        <div className='text-center'>
            <h1 className='uppercase text-3xl font-bold'> THE USE OF THE MONEY OF THE BIBLE</h1>
        </div>
        <p className='mx-60 text-sm my-2'>Money, in itself, is neither good nor evil, but a tool given by God for specific purposes. The Bible provides clear guidance on how we should view and use money, emphasizing that it is meant to serve God’s kingdom and bless others. </p>
        <p className='mx-60 text-sm my-2'>Firstly, money is a resource to provide for our needs and the needs of our families. In 1 Timothy 5:8, Paul writes, “But if anyone does not provide for his own, and especially for those of his household, he has denied the faith and is worse than an unbeliever.” This underscores the responsibility we have to ensure the well-being of those under our care.
        </p>
        <img src={Img1} className='w-[740px] h-[300px] mx-60 mb-6' />
        <p className='mx-60 text-sm my-2'>Additionally, money is a means to support the work of the Church and the spread of the Gospel. In 2 Corinthians 9:7, Paul encourages believers to give cheerfully: “Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.” Our financial contributions help to further God’s mission on earth.</p>
        <p className='mx-60 text-sm my-2 mb-10'>Lastly, the Bible warns against the love of money. 1 Timothy 6:10 cautions, “For the love of money is a root of all kinds of evil.” Money should never become an idol or a source of greed, but rather a tool used wisely for God’s purposes.</p>
        <p className='font-bold text-3xl mx-60'>CONCLUSION</p>
        <div className='flex gap-2 mx-60 my-10 mb-16'>
            <div className='w-1 h-16 bg-orange-400'/>
            <p className='text-sm'>In conclusion, the biblical purpose of money is to provide, give generously, support God’s work, and avoid greed, always using it in ways that honor Him.</p>
        </div>
    </div>
  )
}

export default Post3