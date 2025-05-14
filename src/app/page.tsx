import Image from 'next/image'
import banner from '../../public/img/banner.png'
import { ImageAnimate } from '@/components/ui/animate'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import Count from '@/components/ui/count'
import { DescriptionBtn } from '@/components/ui/descriptionBtn'
import Link from 'next/link'
import { HouseCard } from '@/components/ui/houseCard'
import Filter from '@/components/ui/filter'
import EmblaCarousel from '@/components/ui/carousel'

function Box() {
        return <div className='rounded-xl bg-[url(/img/mansion.png)] bg-cover bg-center min-h-80 hover:opacity-95 transition max-xs:col-span-2'></div>
}

export default async function Home() {
        return (
                <>
                        <section className='min-h-256 relative mx-auto max-container:min-h-200 max-lg:min-h-140 max-md:min-h-120 max-sm:min-h-90 max-xs:min-h-65 bg-[#fcfcfc] overflow-hidden'>
                                <div className='container'></div>
                                <Image src={banner} alt='banner' className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-10 max-w-400' />
                                <ImageAnimate />
                        </section>
                        <section className='pt-25 pb-10 max-md:pt-15 max-md:pb-5 '>
                                <div className='container flex flex-col items-center gap-15'>
                                        <div className='max-w-122 text-center'>
                                                <h4 className='font-medium mb-2'>Find Your Dream Property</h4>
                                                <p className='description'>We offer modern properties with the best quality that meet all your needs.</p>
                                        </div>
                                        <form action='' className='flex gap-20 max-lg:gap-7 flex-wrap justify-center max-xs:flex-col items-center max-xs:text-center max-xs:w-full max-xs:px-4'>
                                                <label className='flex flex-col gap-2 text-gentle text-base max-xs:w-full items-start'>
                                                        Looking for
                                                        <Select defaultValue='buy'>
                                                                <SelectTrigger className='w-21 max-xs:w-full'>
                                                                        <SelectValue placeholder='Looking for' />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                        <SelectItem value='buy'>Buy</SelectItem>
                                                                        <SelectItem value='rent'>Rent</SelectItem>
                                                                </SelectContent>
                                                        </Select>
                                                </label>
                                                <label className='flex flex-col gap-2 text-gentle text-base max-xs:w-full items-start'>
                                                        Location
                                                        <Select defaultValue='london'>
                                                                <SelectTrigger className='w-26 max-xs:w-full'>
                                                                        <SelectValue placeholder='Theme' />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                        <SelectItem value='london'>London</SelectItem>
                                                                        <SelectItem value='warsaw'>Warsaw</SelectItem>
                                                                        <SelectItem value='barcelona'>Barcelona</SelectItem>
                                                                </SelectContent>
                                                        </Select>
                                                </label>
                                                <label className='flex flex-col gap-2 text-gentle text-base max-xs:w-full items-start'>
                                                        Property Type
                                                        <Select defaultValue='family house'>
                                                                <SelectTrigger className='w-39 max-xs:w-full'>
                                                                        <SelectValue placeholder='Theme' />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                        <SelectItem value='family house'>Family House</SelectItem>
                                                                        <SelectItem value='dark'>Mansion</SelectItem>
                                                                        <SelectItem value='rancho'>Rancho</SelectItem>
                                                                </SelectContent>
                                                        </Select>
                                                </label>
                                                <label className='flex flex-col gap-2 text-gentle text-base max-xs:w-full items-start'>
                                                        Bedrooms
                                                        <Select defaultValue='3 bedrooms'>
                                                                <SelectTrigger className='w-37 max-xs:w-full'>
                                                                        <SelectValue placeholder='Bedrooms' />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                        <SelectItem value='bedroom'>A Bedroom</SelectItem>
                                                                        <SelectItem value='2 bedrooms'>2 Bedrooms</SelectItem>
                                                                        <SelectItem value='3 bedrooms'>3 Bedrooms</SelectItem>
                                                                </SelectContent>
                                                        </Select>
                                                </label>
                                                <label className='flex flex-col gap-2 text-gentle text-base max-xs:w-full items-start'>
                                                        Budget
                                                        <Select defaultValue='500,000'>
                                                                <SelectTrigger className='w-33 max-xs:w-full'>
                                                                        <SelectValue placeholder='Budget' />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                        <SelectItem value='200,000'>$200,000</SelectItem>
                                                                        <SelectItem value='350,000'>$350,000</SelectItem>
                                                                        <SelectItem value='500,000'>$500,000</SelectItem>
                                                                </SelectContent>
                                                        </Select>
                                                </label>
                                                <Button className='w-14 h-14 rounded-4xl text-base max-xs:w-full  max-xs:h-12'>
                                                        <span className='xs:hidden'>Search</span>
                                                        <svg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                                <path
                                                                        fillRule='evenodd'
                                                                        clipRule='evenodd'
                                                                        d='M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.4856 20 15.7342 18.9937 17.364 17.364C18.9937 15.7342 20 13.4856 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 13.6771 21.0426 16.1321 19.4532 18.039L25.7071 24.2929C26.0976 24.6834 26.0976 25.3166 25.7071 25.7071C25.3166 26.0976 24.6834 26.0976 24.2929 25.7071L18.039 19.4532C16.1321 21.0426 13.6771 22 11 22C4.92487 22 0 17.0751 0 11Z'
                                                                        fill='white'
                                                                />
                                                        </svg>
                                                </Button>
                                        </form>
                                </div>
                        </section>
                        <section>
                                <div className='container'>
                                        <div className='flex justify-between items-center max-md:flex-col max-md:items-start gap-5 mb-20 max-md:mb-10'>
                                                <div className='md:basis-195'>
                                                        <DescriptionBtn text='About Urbanouse' />
                                                        <h2 className='font-semibold'>
                                                                Your Dream Home, <br className='max-md:hidden' />
                                                                Our Expertise.
                                                        </h2>
                                                </div>
                                                <p className='md:basis-125 description'>
                                                        At Urbanouse, we are committed to helping individuals and families find their perfect homes and smart investment properties. Our approach blends
                                                        personalized service, expert insights, and a dedication to excellence, ensuring your real estate journey is seamless, rewarding, and tailored to
                                                        your unique needs.
                                                </p>
                                        </div>
                                        <div className='grid grid-cols-[500px_repeat(3,minmax(175px,215px))_auto] gap-3 max-container:grid-cols-[350px_repeat(3,minmax(175px,215px))_auto] max-lg:grid-cols-3 max-md:grid-cols-2'>
                                                <div className='rounded-xl bg-[url(/img/mansion.png)] bg-cover bg-center min-h-80 hover:opacity-95 transition max-lg:col-span-2 flex items-end p-6'>
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
                                                        <p className='max-xs:hidden text-center'>More projects</p>
                                                </div>
                                        </div>
                                </div>
                        </section>
                        <section className='bg-navy text-white dark:text-navy dark:bg-white'>
                                <div className='container flex justify-center items-center flex-wrap gap-14 max-xs:flex-col max-xs:items-center max-xs:text-center before:bg-[url(/img/pattern.png)] before:absolute'>
                                        <div>
                                                <p className='text-xl description'>Home for Rent</p>
                                                <Count target={5300} />
                                        </div>
                                        <div>
                                                <p className='text-xl description'>Home to Buy</p>
                                                <Count target={3000} />
                                        </div>
                                        <div>
                                                <p className='text-xl description'>Agents</p>
                                                <Count target={120} />
                                        </div>
                                        <div>
                                                <p className='text-xl description'>Cities Covered</p>
                                                <Count target={83} />
                                        </div>
                                        <div>
                                                <p className='text-xl description'>Total Properties</p>
                                                <Count target={9200} />
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='container'>
                                        <div className='flex justify-between items-center max-md:flex-col max-md:items-start gap-5'>
                                                <div className='md:basis-195'>
                                                        <DescriptionBtn text='Fetured Properties' />
                                                        <h2 className='font-semibold'>Discover Urbanouse Properties</h2>
                                                </div>
                                                <p className='md:basis-125 description'>
                                                        Explore an exclusive selection of premium properties, meticulously curated to provide you with the best in luxury living and prime real estate
                                                        investment options, tailored to your needs
                                                </p>
                                        </div>
                                        <div>
                                                <Filter />
                                                <div className='grid grid-cols-3 gap-5 max-lg:grid-cols-2 justify-center max-sm:hidden'>
                                                        <HouseCard />
                                                        <HouseCard />
                                                        <HouseCard />
                                                </div>
                                                <EmblaCarousel slides={[<HouseCard key={12} />, <HouseCard key={13} />]} />
                                        </div>
                                </div>
                        </section>
                </>
        )
}
