import { stars } from '@/public/images'
import Image from 'next/image'
import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

const ReviewComponent = () => {
  return (
    <div className='w-[328px] h-[272px] rounded-[16px] bg-white py-6 px-4 flex flex-col justify-between '>
      <div>

        <div className='flex flex-row justify-between' >
        <Image src={stars} alt ="stars"/>
        <h3 className={`text-[#5F7482] text-[16px] font-medium ${roboto.className} `}>
          1 month ago
        </h3>
        </div>
        <div className={`text-[16px] font-medium ${roboto.className} mt-4 px-3 `} >
        The customer service was quick and
        gave me the right answer
        </div>
      
      </div>
      <div className='flex flex-row '>
      <div className={`w-12 h-10 text-[14px] font-bold ${roboto.className} text-[#2F8E60]  flex items-center justify-center`} >
        M
      </div>
      <div className='flex flex-col'>
        <div className={`text-[16px] font-bold ${roboto.className} text-[#2F8E60]`} >
        Mickey Raymond
        
        </div>
        <div className={`text-[16px] font-medium ${roboto.className} text-[#5F7482]`}>
        Cornwall • PigeonWare
        </div>
      </div>
      </div>
    </div>
  )
}

export default ReviewComponent