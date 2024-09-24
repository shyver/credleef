'use client'
import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import IntroVisual from '../IntroVisual'
import { Lato } from 'next/font/google'
import TickBox from '../TickBox'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'
const lato = Lato({weight:['400','700'], subsets:["latin"]})
const Intro = () => {
  return (
    <SectionWrapper border={true}>
      <div className='w-full h-full flex flex-row'>
        <IntroVisual/>
        <div className='w-[50%] '>
          <h1 className={`text-[62px] ${lato.className} text-black w-[80%] leading-tight mb-4`}>
          Boost Credibility with Automated Testimonial Displays
          </h1>
          <h2 className={`text-[#747472] text-[24px] ${lato.className} mb-4`}>
          Seamlessly gather and showcase authentic customer feedback to enhance trust and drive conversions.
          </h2>
          <div className='flex flex-wrap px-8 gap-x-4 gap-y-2 mb-4'>
            <TickBox text='Attract new customers' />
            <TickBox text='Collect new reviews on autopilot' />
            <TickBox text='Drive brand awareness' />
            <TickBox text='Showcase reviews on your website' />
          </div>
          <div className='flex flex-row gap-2'>
          <PrimaryButton title='Join Waitlist' onClick={()=>{}} width='w-[180px]'/>
          <SecondaryButton title='Contact Us'/>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}

export default Intro