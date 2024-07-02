import React from 'react'
import { Lato } from 'next/font/google'
const lato = Lato({weight:['400','700'], subsets:["latin"]})
const PrimaryButton = ({title,width,onClick}:{title:String, width?:String,onClick?:Function}) => {

  return (
    <button className={`bg-black flex justify-center items-center px-4 text-white h-[41px] ${width??null} rounded-[10px] ${lato.className} font-semibold`}
    onClick={()=>{
        onClick?onClick():null
    }}
    >{title}</button>
  )
}

export default PrimaryButton