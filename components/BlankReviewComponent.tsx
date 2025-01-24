import { icon, stars } from '@/public/images'
import Image from 'next/image'
import React from 'react'
import Tilt from 'react-next-tilt'

const BlankReviewComponent = () => {
  return (
    <Tilt className='' >
    <div className='w-[255px] h-[176px] bg-white rounded-[20px] shadow-[0_0px_30px_-5px_rgba(0,0,0,0.3)] flex flex-col justify-between  '
    >
      <div className='flex flex-col px-4 py-2 gap-3'>

        <Image src={stars} alt='stars'  />
        
        <div className='w-[153px] h-[12px] bg-[#D9D9D9] rounded-[4px] mb-1 ' />
        <div className='w-[205px] h-[12px] bg-[#D9D9D9] rounded-[4px] ' />
        <div className='w-[205px] h-[12px] bg-[#D9D9D9] rounded-[4px] ' />
        <div className='w-[205px] h-[12px] bg-[#D9D9D9] rounded-[4px] ' />
      </div>

      <div className='w-full flex items-end justify-end'>
      <Image src={icon} alt='icon' height={33} className='' />
      </div>

    </div>
    </Tilt>
  )
}

export default BlankReviewComponent