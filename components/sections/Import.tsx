import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { Lato } from 'next/font/google'
import Image from 'next/image'
import { capterra, facebook, g2, google, googlePlayStore, importPad, yelp } from '@/public/images'
import TickBox from '../TickBox'

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })

const Import = () => {
  return (
    <SectionWrapper border={false}>
      <div className='flex flex-col items-center'>
        <h1 className={`text-black text-[32px] ${lato.className}`}>
          Effortlessly Import and Showcase Testimonials from Any Review Platform on the Web
        </h1>
        <h2 className={`text-[#747472] text-[24px] ${lato.className} text-center mt-4 w-[916px] mb-12`}>
          Transform scattered reviews into a powerful marketing tool by seamlessly integrating testimonials from various platforms across the web.
        </h2>
        <div className='relative'>
          <Image src={importPad} alt="import pad" className='pb-10 px-4' />
          <div className='absolute bottom-0 left-0 right-0 flex flex-row justify-between p-4'>
            <Image src={google} alt="google" />
            <Image src={g2} alt="g2" />
            <Image src={facebook} alt="facebook" />
            <Image src={capterra} alt="capterra" />
            <Image src={yelp} alt="yelp" />
            <Image src={googlePlayStore} alt="play store" />
          </div>
        </div>
        <h2 className={`text-[#747472] text-[24px] ${lato.className} text-center mt-8 w-[1100px] mb-12 `}>
        Credleef unifies your customer feedback from various platforms like Google, Facebook, Excel, and more, all in one place!
        </h2>
        <div className='flex flex-wrap gap-x-14 gap-y-8 w-full items-center justify-center'>
          <TickBox title="Instant Import " text=" Just enter your review source URL"/>
          <TickBox title="Unified Reviews" text="Access all your reviews in one place."/>
          <TickBox title="Enhanced Scoring with AI" text=" Credleef's AI identifies and highlights your top reviews."/>

        </div>
      </div>
    </SectionWrapper>
  )
}

export default Import