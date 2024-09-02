import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
        <Image src='/flow.png'
            className='absolute z-10 right-[0px] top-[580px] w-[260px] md:top-[400px] md:w-[380px] md:right-[24px]'
            width={380}
            height={380}
        />
        <div/>
        <div className='bg-gradient-10 w-full h-[920px] md:h-[920px] flex justify-center items-center'>
        </div>
        
    </div>
  )
}

export default Header
