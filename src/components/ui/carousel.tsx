'use client'
import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './carouselDot'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
type PropType = {
        slides: ReactNode[]
        options?: EmblaOptionsType
        className: string
}

const EmblaCarousel: React.FC<PropType> = ({ className, ...props }) => {
        const { slides, options } = props
        const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })])

        const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
        return (
                <div className={'embla w-full height-76 ' + className}>
                        <div className='overflow-hidden embla__viewport' ref={emblaRef}>
                                <div className='flex w-full gap-5 mx-auto embla__container jusify-center'>
                                        {slides.map((index, i) => (
                                                <div className='w-1/4 embla__slide max-md:w-5/6 shrink-0' key={i}>
                                                        {index}
                                                </div>
                                        ))}
                                </div>
                        </div>

                        <div className='embla__controls'>
                                <div className='flex items-center justify-center pt-5 embla__dots'>
                                        {scrollSnaps.map((_, index) => (
                                                <DotButton
                                                        key={index}
                                                        onClick={() => onDotButtonClick(index)}
                                                        className={'embla__dot w-4 after:cursor-pointer after:h-2 after:w-2 after:flex after:bg-[#d9d9d9] after:rounded-4xl'.concat(
                                                                index === selectedIndex ? ' embla__dot--selected after:scale-150 after:bg-black dark:after:bg-gray-700' : ''
                                                        )}
                                                />
                                        ))}
                                </div>
                        </div>
                </div>
        )
}

export default EmblaCarousel
