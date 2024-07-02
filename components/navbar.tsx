'use client'
import React from 'react'
import NameLogo from './NameLogo'
import PrimaryButton from './PrimaryButton'
import TertiaryButton from './TertiaryButton'

const Navbar = () => {
  const sections = ['Intro', 'Import', 'Create', 'Showcase', 'Waitlist']
  const sectionButtons = () => {
    return (
      <div className='flex flex-row  gap-10'>
        {sections.map((section, index) => (
          <div key={index} className='text-[18px] font-bold cursor-pointer'>
            {section}
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className='bg-white h-[70px] w-full text-black flex flex-row items-center justify-between fixed px-20 '>
        <NameLogo/>
        {sectionButtons()}
        <div className='flex gap-2 items-center'>
          <TertiaryButton title='Contact Us'/>
          <PrimaryButton title='Join Waitlist' width='w-[180px]'/>
        </div>
        </div>
  )



}

export default Navbar