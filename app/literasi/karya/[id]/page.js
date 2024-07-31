'use client'
import React, { useEffect, useState } from 'react'
import { assets, blog_data } from '../../../../public/assets';
import Image from 'next/image';
import axios from 'axios';
import { Signika_Negative } from 'next/font/google';

const signika  = Signika_Negative({subsets:['latin'], weight:"400"});
const signika2  = Signika_Negative({subsets:['latin'], weight:"700"});


const Page = ({params}) => {

    const [data, setData] = useState(null);

    const fetchKaryaData = async () => {
        const response = await axios.get('/api/karya',{
            params:{
                id:params.id
            }
        })
        setData(response.data);
    }

    useEffect(()=>{
        fetchKaryaData();
    },[])

  return (data?<>
    <div className='bg-amber-50 py-5 px-5 md:px-12 lg:px-12'>
        <div className=' items-center text-center my-[130px] md:my-[150px]'>
            <h1 className={`${signika2.className} text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto`}>{data.title}</h1>
            <p className={`${signika.className} mt-1 pb-2 text-xl md:text-2xl max-w-[740px] mx-auto`}>{data.author}</p>
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image className='border-[3px] border-black rounded-3xl' src={data.image} width={1280} height={720} alt=''/>
            <h1 className='mt-8 text-[27px] font-semibold'></h1>
            <p className={`${signika.className} blog-content`} dangerouslySetInnerHTML={{__html:data.text}}></p>
        </div>
    </div>
    </>:<></>
  )
}

export default Page
