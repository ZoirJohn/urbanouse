'use client'
import Image from 'next/image'
import urb from '../../../public/img/urb.png'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export function ImageAnimate() {
        const [animate, setState] = useState(false)
        useEffect(() => {
                setTimeout(() => setState(true))
        }, [])
        return (
                <h1>
                        <Image
                                src={urb}
                                alt='urbanouse'
                                id='urbanouse'
                                className={clsx('absolute left-1/2 -translate-x-1/2 top-40 transition-all duration-500 max-lg:top-10', {
                                        'opacity-0 translate-y-40': !animate,
                                        'opacity-100 translate-y-0': animate,
                                })}
                        />
                </h1>
        )
}
