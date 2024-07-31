'use client'
import React, { useState } from 'react'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { Lilita_One } from 'next/font/google'

const lilita_one = Lilita_One({ subsets: ["latin"], weight: "400" });


const Faq = () => {
    let [isClick, setIsClick] = useState(false);

    const toggleTurun = () => {
        setIsClick(!isClick);
    };
 
  return (
    <div className={`bg-gradient-6 w-full  ${isClick ? 'h-[700px]' : 'h-[600px]' } flex justify-center`}>
        <div className='grid justify-center items-center'>
            <div className='text-center mt-[70px]'>
                <h1 className={`${lilita_one.className} text-border-2 text-7xl sm:text-8xl text-white`}>FAQS</h1>
            </div>
            <div className='text-2xl text-white left-9 grid justify-center items-center -mt-[150px]'>
                <Accordion className={`${lilita_one.className} text-border-1 text-white bg-gradient-6 w-[300px] sm:w-[500px] md:w-[700px] border-2 border-black mt-6`}>
                    <AccordionItem key='1' aria-label='Faq 1' title='Apa itu tim literasi sekolah' className='text-white' onClick={toggleTurun}>
                        Tim literasi sekolah adalah sekumpulan siswa-siswi yang memiliki ketertarikan untuk meningkatkan literasi di sekolah. tim ini berisi siswa-siswi dengan skill hebat yang dimiliki individu dan saling melengkapi yang dapat membuat perkebambangan tim literasi begitu pesat
                    </AccordionItem>
                </Accordion>

                <Accordion className={`${lilita_one.className} text-border-1 text-white bg-gradient-6 w-[300px] sm:w-[500px] md:w-[700px] border-2 border-black mt-6`}>
                    <AccordionItem key='2' aria-label='Faq 2' title='Mengapa literasi itu penting?' onClick={toggleTurun}>
                        Era globalisasi dunia serasa cepat dan pesat, ini membuat kita susah untuk fokus. untuk itu kita perlu meningkatkan literasi sebagai bekal dalam kehidupan
                    </AccordionItem>
                </Accordion>

                <Accordion className={`${lilita_one.className} text-border-1 text-white bg-gradient-6 w-[300px] sm:w-[500px] md:w-[700px] border-2 border-black mt-6`}>
                    <AccordionItem key='3' aria-label='Faq 3' title='Apa tujuan program literasi di sekolah?' onClick={toggleTurun}>
                        untuk meningkatkan pemahaman murid terhadap informasi yang ada dan keterampilan membaca, menulis, serta berpikir kritis
                    </AccordionItem>
                </Accordion>

            </div>
            
           
            
        </div>
    </div>
    
  )
}

export default Faq
