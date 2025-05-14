'use client'
import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './carouselDot'
import useEmblaCarousel from 'embla-carousel-react'
import '@/app/embla.css'

type PropType = {
        slides: ReactNode[]
        options?: EmblaOptionsType
        className: string
}

const EmblaCarousel: React.FC<PropType> = ({ className, ...props }) => {
        const { slides, options } = props
        const [emblaRef, emblaApi] = useEmblaCarousel(options)

        const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

        return (
                <section className={'embla w-full ' + className}>
                        <div className='embla__viewport overflow-hidden' ref={emblaRef}>
                                <div className='embla__container flex jusify-center gap-5 mx-auto w-full'>
                                        {slides.map((index, i) => (
                                                <div className='embla__slide' key={i}>
                                                        {index}
                                                </div>
                                        ))}
                                </div>
                        </div>

                        <div className='embla__controls'>
                                <div className='embla__dots'>
                                        {scrollSnaps.map((_, index) => (
                                                <DotButton
                                                        key={index}
                                                        onClick={() => onDotButtonClick(index)}
                                                        className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
                                                />
                                        ))}
                                </div>
                        </div>
                </section>
        )
}

export default EmblaCarousel
