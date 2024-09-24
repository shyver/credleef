import { tick } from '@/public/images'
import Image from 'next/image'
import React from 'react'
import { Lato } from 'next/font/google'
const lato = Lato({weight:['400','700'], subsets:["latin"]})

const TickBox = ({text,title}:{text?:String,title?:String}) => {
  return (
    <div className='flex flex-row items-start'>

        <Image src={tick} alt='tick'  />
        <h3 className={`text-[18px] text-black ${lato.className} font-medium flex-1 `}>
        {
            title?         <span className={`text-[18px] text-black ${lato.className} font-bold mr-1 `}>{title} :</span> : null
        }
        &nbsp; {text}</h3>
    </div>
  )
}

export default TickBox