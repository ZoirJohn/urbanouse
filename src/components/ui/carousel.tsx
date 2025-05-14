'use client'
import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './carouselDot'
import useEmblaCarousel from 'embla-carousel-react'
import '@/app/embla.css'

type PropType = {
        slides: ReactNode[]
        options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
        const { slides, options } = props
        const [emblaRef, emblaApi] = useEmblaCarousel(options)

        const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

        return (
                <section className='embla sm:hidden'>
                        <div className='embla__viewport' ref={emblaRef}>
                                <div className='embla__container flex gap-5 mx-auto'>
                                        {slides.map((index, i) => (
                                                <div className='embla__slide grow-0 shrink-0' key={i}>
                                                        <div className='embla__slide__number'>{index}</div>
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
