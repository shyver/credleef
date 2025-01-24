import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '../ui/carousel'

const WaitlistForm = () => {
    const autoplayOptions = { delay: 2000, stopOnInteraction: true }


    return (
        <div className='w-full h-[990px] bg-[#F4F4F4] flex flex-col'>
            {/* <Carousel className="w-full "
              opts={{
        align: "center",
        
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      
      
      >

            </Carousel> */}
        </div>
    )
}

export default WaitlistForm