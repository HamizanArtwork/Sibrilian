import React from 'react'
import { Lilita_One } from 'next/font/google'

const lilita_one = Lilita_One({subsets: ['latin'], weight: '400'})

const HalamanAgenda = () => {
  return (
    <div className='flex justify-center items-center'>
      <div>
        <h1 className={`${lilita_one.className} text-border-2 text-white text-4xl`}>Agenda</h1>
        <table>
          <ul className='flex mt-7 border border-white'>
            <li className='border border-white w-[300px]'>
              <a>Agustus</a>
            </li>
            <li>
              <a>Mavissa</a>
            </li>
          </ul>
          <ul className='flex border border-white'>
            <li className='border border-white'>
              <a>Agustus</a>
            </li>
            <li>
              <a>Mavissa</a>
            </li>
          </ul>
          <ul className='flex border border-white'>
            <li className='border border-white'>
              <a>September</a>
            </li>
            <li>
              <a>Mavissa</a>
            </li>
          </ul>
          <ul className='flex border border-white'>
            <li className='border border-white'>
              <a>Oktober</a>
            </li>
            <li>
              <a>Mavissa</a>
            </li>
          </ul>
        </table>
      </div>
    </div>
  )
}

export default HalamanAgenda
