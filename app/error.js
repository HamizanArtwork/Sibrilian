'use client'
import React from 'react'
import { Lilita_One } from 'next/font/google'

const lilita_one = Lilita_One ({ subsets:["latin"], weight:"400"})

const error = () => {
  return (
    <div className='w-full h-[1080px] bg-gradient-6'>
       <h1 className={`${lilita_one.className}  text-border-2 text-4xl md:text-7xl z-40`} >Ada yang error nih..</h1>
    </div>
  )
}

export default error
