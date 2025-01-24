import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '../ui/carousel'

const WaitlistForm = () => {
    const autoplayOptions = { delay: 2000, stopOnInteraction: true }
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(autoplayOptions)])

    return (
        <div className='w-full h-[990px] bg-[#F4F4F4] flex flex-col'>
            <Carousel plugins={emblaRef}>
                {/* Add your carousel content here */}
            </Carousel>
        </div>
    )
}

export default WaitlistForm