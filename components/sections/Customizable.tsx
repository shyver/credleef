import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import { Lato } from 'next/font/google'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  


const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] })
const Customizable = () => {
  return (
    <SectionWrapper border={false}>
      <div className='flex flex-col items-center'>
        <h1 className={`text-black text-[32px] ${lato.className}`}>
          Showcase Reviews with Customizable Testimonial Widgets
        </h1>
        <h2 className={`text-[#747472] text-[24px] ${lato.className} text-center mt-4 w-[916px] mb-12`}>
          Select from a wide range of review and testimonial widgets to seamlessly display on your website
        </h2>
        <Tabs defaultValue="default" className="w-full h-[63px] flex flex-col items-center">
          <TabsList className='rounded-2xl  flex flex-row justify-between h-[63px] w-[701px]'>
          <TabsTrigger value="default" className={`text-[18px] rounded-2xl h-[53px] w-[25%] ${lato.className} peer data-[state=active]:bg-black data-[state=active]:text-white`}>Default</TabsTrigger>
            <TabsTrigger value="nameFirst" className={`text-[18px] rounded-2xl h-[53px] w-[25%] ${lato.className} peer data-[state=active]:bg-black data-[state=active]:text-white`}>Name First</TabsTrigger>
            <TabsTrigger value="centered" className={`text-[18px] rounded-2xl h-[53px] w-[25%] ${lato.className} peer data-[state=active]:bg-black data-[state=active]:text-white`}>Centered</TabsTrigger>
            <TabsTrigger value="videoTestimonial" className={`text-[18px] rounded-2xl h-[53px] w-[25%] ${lato.className} peer data-[state=active]:bg-black data-[state=active]:text-white`}>Video Testimonial</TabsTrigger>
         </TabsList>
          <TabsContent value="default" className='w-full' >
            <div className='w-full bg-[#f4f4f4] flex items-center flex-col'>

    <Carousel
      
      className=" w-[90%]  "
    >
      <CarouselContent >
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              {index}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
            </div>


          </TabsContent>
          <TabsContent value="nameFirst">Name First content here.</TabsContent>
          <TabsContent value="centered">Centered content here.</TabsContent>
          <TabsContent value="videoTestimonial">Video Testimonial content here.</TabsContent>
        </Tabs>
      </div>
    </SectionWrapper>                                                                                                       
  )
}

export default Customizable