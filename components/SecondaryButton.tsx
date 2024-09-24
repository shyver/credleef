import React from 'react'
import { Lato } from 'next/font/google'
const lato = Lato({weight:['400','700'], subsets:["latin"]})
const SecondaryButton = ({title,width,onClick}:{title:String, width?:String,onClick?:Function}) => {

  return (
    <button className={`text-black flex justify-center items-center px-4  h-[41px] ${width??null} rounded-[10px] ${lato.className} font-semibold border border-black`}
    onClick={()=>{
        onClick?onClick():null
    }}
    >{title}</button>
  )
}

export default SecondaryButton