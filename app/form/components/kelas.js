import React from 'react'
import { Lilita_One } from 'next/font/google'
import Image from 'next/image';

const lilita_one = Lilita_One ({ subsets:['latin'], weight:'400'});

const Kelas = () => {
  return (
    <div className='bg-gradient-9 w-full h-[900px] grid justify-center items-center text-center'>
        <div className='pt-5'>
            <h1 className={`${lilita_one.className} text-border-2 text-6xl md:text-8xl text-white`}>PILIH KELAS</h1>

        </div>
        <div className='grid md:flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <Image width={1000} height={1000} src='/Ara2.png' className='w-[80vh] hidden md:flex'/>
                <Image width={1000} height={1000} src='/nata2.png' className='w-[30vh] md:hidden'/>
            </div>
            <div>
                <ul>
                    <li className='grid gap-y-4'>
                        <a href='https://forms.gle/HkgJgLkwyjWSDfGa9'>
                            <button className={`${lilita_one.className} w-[350px] h-[100px] border border-black rounded-[7px] bg-gradient-3 border-2 text-border-1 text-5xl shadow-black/50 shadow-md hover:opacity-80 hover:transition text-white`}>KELAS X</button>
                        </a>
                        <a href='https://forms.gle/Cr6Wvi5pRwG8sGZR6'>
                            <button className={`${lilita_one.className} w-[350px] h-[100px] border border-black rounded-[7px] bg-gradient-3 border-2 text-border-1 text-5xl shadow-black/50 shadow-md hover:opacity-80 hover:transition text-white`}>KELAS XI</button>
                        </a>
                        <a href='https://forms.gle/jvD2o7rkFKzUucsV7'>
                            <button className={`${lilita_one.className} w-[350px] h-[100px] border border-black rounded-[7px] bg-gradient-3 border-2 text-border-1 text-5xl shadow-black/50 shadow-md hover:opacity-80 hover:transition text-white`}>KELAS XII</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Kelas
