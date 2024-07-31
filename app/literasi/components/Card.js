import React from 'react'
import Image from 'next/image'
import { blog_data } from '../../../public/assets'
import Link from 'next/link'
import { Poppins } from 'next/font/google'
import { Signika_Negative } from 'next/font/google'

const signika  = Signika_Negative({subsets:['latin'], weight:"600"});
const signika1  = Signika_Negative({subsets:['latin'], weight:"400"});


const Card = ({title, author, category, image, id}) => {
  return (
    <div className= 'max-w-[330px] sm:max-[300px] bg-white border-black rounded-2xl border-[3px]'>
      <Link href={`literasi/karya/${id}`}>
      <Image src={image} alt='' width={400} height={400} className=' rounded-t-xl'/>
      </Link>
      <p className={`${signika1.className} ml-5 mt-5 px-1 inline-block bg-green-600 border border-black border-[2px] rounded-md text-white text-sm`}>{category}</p>
      <div className='p-5'>
        <h5 className={`${signika.className} text-xl tracking-tight text-gray-900`}>{title}</h5>
        <p className={`${signika1.className} text-base mb-2`}>{author}</p>
        <Link href={`literasi/karya/${id}`} className={`${signika.className} inline-flex items-center py-2 text-lg text-center`}>
            Lanjut baca <Image src='/arrow.svg' width={20} height={20} alt=''/>
        </Link>
      </div>
    </div>
  )
}

export default Card
