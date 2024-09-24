'use client'
import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import Image from 'next/image'
import { formBuilder } from '@/public/images'
import { Lato } from 'next/font/google'
import TickBox from '../TickBox'
import SecondaryButton from '../SecondaryButton'
import PrimaryButton from '../PrimaryButton'
import Tilt from 'react-next-tilt'

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

const FormBuilder = () => {
  return (
    <SectionWrapper border={true}>

        <div className='flex flex-row w-full items-center' >
            <div className='flex flex-col items-start' >
            <h1 className={`text-black text-[32px] ${lato.className} mb-2`}>
            Capture Authentic Feedback with Ease Using Credleef&apos;s Review Form Builder
            </h1>

            <div className='w-[570px] flex flex-col items-start gap-6' >
            <h2 className={`text-[#747472] text-[24px] ${lato.className}  mt-4  mb-12`}>
            Empower Your Customers to Share Their Experiences Directly on Your Website with Customizable Review Forms
            </h2>
            <TickBox title={'Customizable Review Forms'} text={'Design tailored review forms with specific scenarios and actions to fit your needs'} />
            <TickBox title={'Ready-to-Use Templates'} text={'Utilize optimized forms and campaigns for quick and efficient review collection.'} />
            <TickBox title={'Real-Time Updates'} text={' Automatically sync and display the latest reviews from multiple platforms in real time.'} />
            <TickBox title={'Automatic Review Filtering'} text={'Display only positive reviews on your website'} />
            </div>
            <div className='flex flex-row gap-4 mt-10'>

            <SecondaryButton title='Contact Us' onClick={()=>{}} />
            <PrimaryButton title='Join Waitlist' width='w-[180px]'/>
            </div>
            </div>

            <Image src={formBuilder} alt="formbuilder" />
        </div>
    </SectionWrapper>
  )
}

export default FormBuilder