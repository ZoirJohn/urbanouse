'use client'
import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './carouselDot'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
        slides: ReactNode[]
        options?: EmblaOptionsType
        className: string
}

const Feedback: React.FC<PropType> = ({ className, ...props }) => {
        const { slides, options } = props
        const [emblaRef, emblaApi] = useEmblaCarousel(options)

        const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

        return (
                <div className={'embla w-full' + className}>
                        <div className='embla__viewport overflow-hidden' ref={emblaRef}>
                                <div className='embla__container flex jusify-center gap-5 mx-auto w-full'>
                                        {slides.map((index, i) => (
                                                <div className='embla__slide w-full shrink-0' key={i}>
                                                        {index}
                                                </div>
                                        ))}
                                </div>
                        </div>

                        <div className='embla__controls'>
                                <div className='embla__dots flex justify-center items-center pt-5'>
                                        {scrollSnaps.map((_, index) => (
                                                <DotButton
                                                        key={index}
                                                        onClick={() => onDotButtonClick(index)}
                                                        className={'embla__dot w-4 after:cursor-pointer after:h-2 after:w-2 after:flex after:bg-[#d9d9d9] after:rounded-4xl'.concat(
                                                                index === selectedIndex ? ' embla__dot--selected after:scale-150 after:bg-black' : ''
                                                        )}
                                                />
                                        ))}
                                </div>
                        </div>
                </div>
        )
}

export default Feedback
