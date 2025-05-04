import Image from 'next/image'
import banner from '../../public/banner.png'
import { ImageAnimate } from '@/components/ui/animate'

export default function Home() {
        return (
                <section className='min-h-256 relative mx-auto max-[1280px]:min-h-200 max-lg:min-h-160'>
                        <div className='container'></div>
                        <Image src={banner} alt='banner' className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-10 max-w-360' />
                        <ImageAnimate />
                </section>
        )
}
