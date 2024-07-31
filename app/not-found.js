import Link from 'next/link'
import React from 'react'
import { Lilita_One } from 'next/font/google'
import Image from 'next/image';

const lilita_one = Lilita_One({subsets:["latin"], weight:"400"});

const NotFound = () => {
  return (
    <div className='w-full h-[1080px] bg-gradient-6 flex justify-center items-center'>
      <Image width={800} height={700} src='/lemon2.png' className='w-[250px]'/>
      <div className='text-white'>
        <h1 className={`${lilita_one.className}  text-border-2 text-4xl md:text-7xl`} >Waduh, tidak ditemukan..</h1>
        <button className={`${lilita_one.className} w-[200px] h-[60px] md:w-[300px] md:h-[80px] border border-black rounded-[7px] bg-gradient-3 text-border-1 text-3xl md:text-5xl shadow-black/50 shadow-md hover:opacity-80 hover:transition`}>
          <a><Link href="/">Kembali</Link>
        </a></button>
      </div>
    
    </div>
  )
}

export default NotFound
