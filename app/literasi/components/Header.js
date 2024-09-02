import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div className=' bg-gradient-10 w-full h-[400px] md:h-[700px] flex justify-center items-center'>
            <Image src={'/banner.jpg'} width={1700} height={700} className='border border-white border-4 md:border-8 ml-5 mr-5 rounded-xl shadow-2xl  w-[400px] lg:w-[1500px] md:w-[1000px] mt-[100px] '/>
        </div>
        <div>
            
        </div>
    </div>
    
  )
}

export default Header
