'use client'
import React from 'react'
import { Lilita_One } from 'next/font/google'
import SigninBtn from './components/signinbtn'

const lilita_one = Lilita_One({subsets: ['latin'], weight: '400'})

const SigninPage = () => {
  return (
    <div className='w-full h-[800px] bg-gradient-6 grid justify-center items-center text-center md:h-[1080px]'>
      <div>
        <div>
          <h1 className={`${lilita_one.className} text-white text-border-1 text-4xl`}>Khusus Admin</h1>
        </div>
        <SigninBtn/>
      </div>
    </div>
  )
}

export default SigninPage

