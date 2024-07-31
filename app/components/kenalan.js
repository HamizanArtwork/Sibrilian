import React from 'react'
import Image from 'next/image'
import { Lilita_One } from 'next/font/google'

const lilita_one = Lilita_One({ subsets: ["latin"], weight: "400" });


const Kenalan = () => {
  return (
    <div className='grid md:flex w-full h-[720px] md:h-[450px] bg-gradient-2 items-center justify-center px-[5%] md:gap-[30px]'>
      <div>
        <Image
        src='/fotbar.png'
        width={600}
        height={100}
        alt='fotbar'
        quality={100}
        />
      </div>
      <div className='text-white -mt-[150px] md:-mt-[0px]'>
        <h1 className={`${lilita_one.className} text-border-2 text-5xl md:text-6xl`}>KENALAN YUK</h1>
        <div className='text-xl py-2 lg:text-2xl'>
            <p>SI BRILIAN adalah Sistem Informasi Berbasis</p>
            <p>Digital Literasi di SMA Negeri 1 Sragen yang</p>
            <p>dibuat oleh Tim Literasi SMAN 1 Sragen</p>
        </div>
        <button className={`${lilita_one.className} w-[200px] h-[60px] border border-black rounded-[7px] bg-gradient-3 border-2 text-border-1 text-2xl shadow-black/50 shadow-md hover:opacity-80 hover:transition`}>YUK!</button>
      </div>
    </div>
    
  )
}

export default Kenalan
