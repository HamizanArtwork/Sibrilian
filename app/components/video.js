import React from 'react'
import Image from 'next/image'

const Video = () => {
  return (
    <div className='flex justify-center'>
        <div className='absolute'>
        <Image
            src='/transisi1.png'
            width={1831}
            height={20}
            alt='transisi1'

        />
      </div>
        <div className='w-full h-[400px] sm:h-[500px]  md:h-[800px] lg:h-[1080px] bg-gradient-4 bg-cover object-cover flex justify-center items-center'>
            <div className='flex justify-center items-center'>
                <iframe
                    src='https://www.youtube.com/embed/-9cAOPSoab8'
                    frameBorder='0'
                    allowFullScreen
                    className='flex justify-center items-center w-[320px] h-[190px] sm:w-[600px] sm:h-[330px] md:w-[800px] md:h-[500px] lg:w-[1237px] lg:h-[805px] rounded-3xl border border-white border-[5px]  '
                />
            </div>
        </div>
    </div>
   
  )
}

export default Video
