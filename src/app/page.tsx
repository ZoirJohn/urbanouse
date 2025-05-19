import { ImageAnimate } from '@/components/ui/animate'
import { DescriptionBtn } from '@/components/ui/descriptionBtn'
import { HouseCard } from '@/components/ui/houseCard'
import { randomUUID } from 'crypto'
import { House } from '@/utils/definitions'
import Image from 'next/image'
import banner from '../../public/img/banner.png'
import Count from '@/components/ui/count'
import Link from 'next/link'
import Filter from '@/components/ui/filter'
import EmblaCarousel from '@/components/ui/carousel'
import AgentCard from '@/components/ui/agentCard'
import Feedback from '@/components/ui/feedback'
import FilterSection from '@/components/ui/filterSection'

function Box() {
        return <div className='rounded-xl bg-[url(/img/mansion.png)] bg-cover bg-center min-h-80 hover:opacity-95 transition max-xs:col-span-2'></div>
}

export default async function Home() {
        const houses: House[] = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/houses').then((res) => res.json())
        return (
                <>
                        <section className='min-h-256 relative mx-auto max-container:min-h-200 max-lg:min-h-140 max-md:min-h-120 max-sm:min-h-90 max-xs:min-h-65 bg-[#fcfcfc] overflow-hidden'>
                                <div className='container'></div>
                                <Image src={banner} alt='banner' className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full z-10 max-w-400' />
                                <ImageAnimate />
                        </section>
                        <FilterSection />
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
                                                                className='w-18 h-18 rounded-[50%] border border-black dark:border-white flex items-center gap-4 justify-center max-xs:w-full max-xs:rounded-3xl max-xs:h-12'
                                                        >
                                                                <svg width='23' height='22' viewBox='0 0 23 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                                        <path
                                                                                fillRule='evenodd'
                                                                                clipRule='evenodd'
                                                                                d='M6.5 6.55651e-07L21.5 0C21.7652 0 22.0196 0.105357 22.2071 0.292893C22.3946 0.48043 22.5 0.734784 22.5 1V16C22.5 16.5523 22.0523 17 21.5 17C20.9477 17 20.5 16.5523 20.5 16V3.41421L2.20711 21.7071C1.81658 22.0976 1.18342 22.0976 0.792893 21.7071C0.402369 21.3166 0.402369 20.6834 0.792893 20.2929L19.0858 2L6.5 2C5.94771 2 5.5 1.55229 5.5 1C5.5 0.447716 5.94771 6.55651e-07 6.5 6.55651e-07Z'
                                                                                className='fill-accent-foreground'
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
                                                        {houses.map((h, key) => {
                                                                return <HouseCard {...h} key={key} />
                                                        })}
                                                </div>
                                                <EmblaCarousel
                                                        slides={houses.map((h, key) => {
                                                                return <HouseCard {...h} key={key} />
                                                        })}
                                                        className='sm:hidden'
                                                />
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='container'>
                                        <div className='mb-15 max-md:mb-5'>
                                                <DescriptionBtn text='Top Rate Agents' />
                                                <h4 className='font-semibold'>Meet One of Our Top-Performing Agents.</h4>
                                                <p className='md:basis-125 description'>A dedicated section highlighting an agent who’s gone above and beyond</p>
                                        </div>
                                        <EmblaCarousel
                                                slides={[
                                                        <AgentCard key={12} />,
                                                        <AgentCard key={12} />,
                                                        <AgentCard key={12} />,
                                                        <AgentCard key={12} />,
                                                        <AgentCard key={12} />,
                                                        <AgentCard key={12} />,
                                                ]}
                                                className=''
                                        />
                                </div>
                        </section>
                        <section className='bg-[#f5f5f5] dark:bg-transparent'>
                                <div className='container flex flex-col gap-20 max-sm:gap-5'>
                                        <div className=''>
                                                <DescriptionBtn text='Testimonial' />
                                                <h2 className='font-semibold'>What People Are Saying</h2>
                                                <p className='md:basis-125 description'>Real feedback from clients who&apos;ve experienced the Urbanouse difference.</p>
                                        </div>

                                        <Feedback
                                                slides={[
                                                        <div className='px-30 py-5 flex flex-col items-center max-md:px-2' key={randomUUID + ''}>
                                                                <h5 className='text-4xl text-center mb-8 max-sm:text-[1.25rem]!'>
                                                                        “Urbanouse made buying our first home an absolute breeze! Their team was incredibly attentive and guided us through every step.
                                                                        We couldn&apos;t be happier with our new home.”
                                                                </h5>
                                                                <p className=''>Sarah & Michael Stone</p>
                                                                <p className='description text-base!'>Homeowners</p>
                                                        </div>,
                                                        <div className='px-30 py-5 flex flex-col items-center max-md:px-2' key={randomUUID + ''}>
                                                                <h5 className='text-4xl text-center mb-8 max-sm:text-[1.25rem]!'>
                                                                        “Urbanouse made buying our first home an absolute breeze! Their team was incredibly attentive and guided us through every step.
                                                                        We couldn&apos;t be happier with our new home.”
                                                                </h5>
                                                                <p className=''>Sarah & Michael Stone</p>
                                                                <p className='description text-base!'>Homeowners</p>
                                                        </div>,
                                                ]}
                                                className=''
                                        />
                                </div>
                        </section>
                </>
        )
}
