import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-black w-full h-[200px] text-white justify-center items-center md:gap-[70px]'>
      <Image width={200} height={100} alt='logo' src='/logo_white.png' className='px-5 md:mb-0 flex justify-center items-center'/>
      <h1 className='opacity-55 text-sm md:text-xl md:mt-0'>Developed by Hamizan Ihkamuddin Raharjo</h1>
    </div>
  )
}

export default Footer
