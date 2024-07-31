import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div className=' bg-gradient-10 w-full h-[400px] md:h-[700px] flex justify-center items-center'>
          <a href='https://mavissa.sman1sragen.sch.id/category/berita/'>
            <Image src={'/banner.png'} width={1700} height={700} className='border border-white border-4 md:border-8 ml-5 mr-5 rounded-xl shadow-2xl  w-[300px] lg:w-[1500px] md:w-[1000px] mt-[100px] '/>
          </a>
        </div>
        <div>
            
        </div>
    </div>
    
  )
}

export default Header
