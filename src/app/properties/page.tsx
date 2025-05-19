import EmblaCarousel from '@/components/ui/carousel'
import { DescriptionBtn } from '@/components/ui/descriptionBtn'
import Filter from '@/components/ui/filter'
import FilterSection from '@/components/ui/filterSection'
import { House, HouseCard } from '@/components/ui/houseCard'
import { ReactNode } from 'react'

export default async function Properties(): Promise<ReactNode> {
        const houses: House[] = await fetch('http://localhost:3000/api/houses', { cache: 'default' }).then((res) => res.json())
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
                </>
        )
}
