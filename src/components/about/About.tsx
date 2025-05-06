import Image from 'next/image'
import { DescriptionBtn } from '../ui/descriptionBtn'
import Link from 'next/link'

export function Box() {
        return <div className='rounded-xl bg-[url(/mansion.png)] bg-cover bg-center min-h-80 hover:opacity-95 transition max-xs:col-span-2'></div>
}

export function About() {
        return (
                <section>
                        <div className='container'>
                                <div className='flex justify-between items-center max-md:flex-col max-md:items-start gap-5 mb-20 max-md:mb-10'>
                                        <div className='md:basis-[50%]'>
                                                <DescriptionBtn text='About Urbanouse' />
                                                <h1 className='font-semibold'>
                                                        Your Dream Home, <br className='max-md:hidden' />
                                                        Our Expertise.
                                                </h1>
                                        </div>
                                        <p className='md:basis-[45%] description'>
                                                At Urbanouse, we are committed to helping individuals and families find their perfect homes and smart investment properties. Our approach blends
                                                personalized service, expert insights, and a dedication to excellence, ensuring your real estate journey is seamless, rewarding, and tailored to your
                                                unique needs.
                                        </p>
                                </div>
                                <div className='grid grid-cols-[500px_repeat(3,minmax(175px,215px))_auto] gap-3 max-[1280px]:grid-cols-[350px_repeat(3,minmax(175px,215px))_auto] max-lg:grid-cols-3 max-md:grid-cols-2'>
                                        <div className='rounded-xl bg-[url(/mansion.png)] bg-cover bg-center min-h-80 hover:opacity-95 transition max-lg:col-span-2 flex items-end p-6'>
                                                <div className='text-white flex flex-col gap-2'>
                                                        <p className='text-xl! font-bold'>More projects</p>
                                                        <p className='text-base!'>Discover modern family living with spacious layouts and top-tier amenities designed for comfort and style.</p>
                                                </div>
                                        </div>
                                        <Box />
                                        <Box />
                                        <Box />
                                        <div className='flex md:justify-center justify-end items-center max-lg:justify-center max-xs:col-span-2 gap-4 md:flex-col'>
                                                <Link
                                                        href=''
                                                        className='w-18 h-18 rounded-[50%] border border-black flex items-center gap-4 justify-center max-xs:w-full max-xs:rounded-3xl max-xs:h-12'
                                                >
                                                        <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                                <path
                                                                        fillRule='evenodd'
                                                                        clipRule='evenodd'
                                                                        d='M6.5 6.55651e-07L21.5 0C21.7652 0 22.0196 0.105357 22.2071 0.292893C22.3946 0.48043 22.5 0.734784 22.5 1V16C22.5 16.5523 22.0523 17 21.5 17C20.9477 17 20.5 16.5523 20.5 16V3.41421L2.20711 21.7071C1.81658 22.0976 1.18342 22.0976 0.792893 21.7071C0.402369 21.3166 0.402369 20.6834 0.792893 20.2929L19.0858 2L6.5 2C5.94771 2 5.5 1.55229 5.5 1C5.5 0.447716 5.94771 6.55651e-07 6.5 6.55651e-07Z'
                                                                        fill='black'
                                                                />
                                                        </svg>
                                                        <p className='xs:hidden text-base font-semibold'>More projects</p>
                                                </Link>
                                                <p className='max-xs:hidden'>More projects</p>
                                        </div>
                                </div>
                        </div>
                </section>
        )
}
