import EmblaCarousel from '@/components/ui/carousel'
import { DescriptionBtn } from '@/components/ui/descriptionBtn'
import Filter from '@/components/ui/filter'
import FilterSection from '@/components/ui/filterSection'
import { HouseCard } from '@/components/ui/houseCard'
import { House } from '@/utils/definitions'
import { ReactNode } from 'react'

export default async function Properties({ params }: { params: Promise<{ filter: string }> }): Promise<ReactNode> {
        const houses: House[] = await fetch(process.env.NEXT_PUBLIC_BASE_URL! + '/api/houses', { cache: 'no-cache' }).then((res) => res.json())
        const { filter } = await params
        console.log(typeof filter)
        return (
                <>
                        <FilterSection />
                        <section>
                                <div className='container flex flex-col'>
                                        <div className='md:max-w-220'>
                                                <DescriptionBtn text='Featured Properties' />
                                                <h2 className='font-semibold'>
                                                        Explore Our Handpicked <br className='max-md:hidden' />
                                                        Properties
                                                </h2>
                                                <p className='description pr-20'>Discover premium listings selected for their prime locations, unmatched quality, and exceptional value.</p>
                                        </div>
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
                        </section>
                        <section>
                                <div className='container'>
                                        <div className='md:max-w-220'>
                                                <DescriptionBtn text='Popular Properties' />
                                                <h2 className='font-semibold'>
                                                        Our Most Popular
                                                        <br className='max-md:hidden' />
                                                        Properties
                                                </h2>
                                                <p className='description pr-20'>Discover premium listings selected for their prime locations, unmatched quality, and exceptional value.</p>
                                        </div>
                                        <EmblaCarousel
                                                slides={houses.map((h, key) => {
                                                        return <HouseCard {...h} heightOfImg={325} key={key} />
                                                })}
                                                className=''
                                        />
                                </div>
                        </section>
                </>
        )
}
