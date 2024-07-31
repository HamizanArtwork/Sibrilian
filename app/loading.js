import React from 'react'
import { Lilita_One } from 'next/font/google'

const lilita_one = Lilita_One ({subsets:["latin"], weight:"400"})

const loading = () => {
  return (
    <div className='w-full h-[1080px] bg-gradient-6 flex justify-center items-center'>
      <h1 className={`${lilita_one.className} text-white text-border-2 text-3xl md:text-6xl`}>LOADING...</h1>
    </div>
  )
}

export default loading
