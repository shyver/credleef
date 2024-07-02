import React from 'react'
import { Lato } from 'next/font/google'
const lato = Lato({weight:['400','700'], subsets:["latin"]})
const TertiaryButton = ({title,onClick}:{title:String,onClick?:Function}) => {
  return (
    <button className={` ${lato.className} font-semibold underline `}
    onClick={()=>{
        onClick?onClick():null
    }}
    >{title}</button>
  )
}

export default TertiaryButton