import { model } from '@/public/images'
import Image from 'next/image'
import React from 'react'
import ReviewComponent from './ReviewComponent'
import Tilt from 'react-next-tilt'

const IntroVisual = () => {
  return (
    
    <div className='w-[60%] flex items-center justify-center '>
      
    <div className=' h-[600px] w-[277px] border-[#2ECC71] border-[6px] rounded-[37px] overflow-hidden '>
    <Image src={model} alt='model' className='object-cover h-full select-none' />
    </div>
    
    <div className=' absolute flex flex-row gap-32 '>
            <div className='flex flex-col justify-start items-start'>
              <Tilt>
        <ReviewComponent/>
        </Tilt>
        <div className='h-20'/>
        <ReviewComponent/>
        <div className='h-32'/>

            </div>
            <div className='flex flex-col justify-start items-start'>
            <div className='h-32'/>
        <ReviewComponent/>
        <div className='h-20'/>
        <ReviewComponent/>

            </div>
            
        </div>
        
    </div>


  )
}

export default IntroVisual