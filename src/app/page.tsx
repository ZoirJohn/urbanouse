import Image from 'next/image'
import banner from '../../public/banner.png'
import { ImageAnimate } from '@/components/ui/animate'

export default function Home() {
        return (
                <section className='min-h-256 relative'>
                        <div className='container'></div>
                        <Image src={banner} alt='banner' className='absolute bottom-0 w-full z-10' />
                        <ImageAnimate />
                </section>
        )
}
