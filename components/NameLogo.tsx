
import React from 'react'
import { Lato } from 'next/font/google'
import { icon } from '@/public/images'
import Image from 'next/image'

const lato = Lato({weight:['400','700'], subsets:["latin"]})
const NameLogo = ({onClick}:{onClick?:Function}) => {
  return (
    <div className='flex flex-row cursor-pointer items-center' onClick={()=>{
      onClick?onClick():null
    }}>
      <div className={`text-[36px] ${lato.className} font-bold`}>
      Credleef
      </div>
      <Image src={icon} alt="Credleef Icon" className='ml-[-5px] mb-[-5px] h-[47px] w-[47px]' />
    </div>
  )
}

export default NameLogo