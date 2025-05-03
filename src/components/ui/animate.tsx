'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import urb from '../../../public/urb.png'

export function ImageAnimate() {
        function animate() {
                const anim = document.getElementById('urbanouse')!
                const parentElement = anim.closest('section')!
                if (parentElement.getBoundingClientRect().top - 400 <= 0) {
                        anim!.classList.add('-translate-y-40')
                        anim!.classList.remove('opacity-0')
                }
        }
        useEffect(() => {
                animate()
        }, [])
        return <Image src={urb} alt='urbanouse' className='absolute top-1/3 w-335.5 left-1/2 -translate-x-1/2 transition-all duration-800 opacity-0' id='urbanouse' />
}
