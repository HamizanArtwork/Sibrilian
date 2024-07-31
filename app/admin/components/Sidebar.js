import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SignOutBtn from './signoutbtn'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-gradient-6'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
          sibrilian
        </div>
        <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
          <div className='w-[50%] sm:w-[80%] absolute right-0'>
            <Link href='/admin/addKarya' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow'>
              <Image src='/add_icon.png' width={28} height={28} alt=''/>
              <p>Tambah Karya</p>
            </Link>
            <Link href='/admin/karyaList' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow'>
              <Image src='/blog_icon.png' width={28} height={28} alt=''/>
              <p>List Karya</p>
            </Link>
            <div className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow'>
              <Image src='/email_icon.png' width={28} height={28} alt=''/>
              <p>Lihat Data</p>
            </div>
            <div className='mt-5 flex'>
              <SignOutBtn/>
            </div>
          </div>
          

        </div>
    </div>
  )
}

export default Sidebar
