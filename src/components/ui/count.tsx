'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

type AnimatedCounterProps = {
        target: number
        duration?: number
}

export default function Count({ target, duration = 3000 }: AnimatedCounterProps) {
        const [count, setCount] = useState(0)
        const hasAnimated = useRef(false)
        const animationFrameId = useRef<number>(0)
        const ref = useRef<HTMLDivElement | null>(null)

        const startCounting = useCallback(() => {
                const start = performance.now()

                const animate = (time: number) => {
                        const elapsed = time - start
                        const progress = Math.min(elapsed / duration, 1)
                        const current = Math.floor(progress * target)
                        setCount(current)

                        if (progress < 1) {
                                animationFrameId.current = requestAnimationFrame(animate)
                        }
                }

                animationFrameId.current = requestAnimationFrame(animate)
        }, [duration, target])

        useEffect(() => {
                const current = ref.current
                if (!current) return

                const observer = new IntersectionObserver(
                        ([entry]) => {
                                if (entry.isIntersecting && !hasAnimated.current) {
                                        hasAnimated.current = true
                                        startCounting()
                                }
                        },
                        { threshold: 0.5 }
                )

                observer.observe(current)

                return () => {
                        observer.disconnect()
                        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
                }
        }, [startCounting])

        return <h3 ref={ref} className='font-semibold'>{count}+</h3>
}
