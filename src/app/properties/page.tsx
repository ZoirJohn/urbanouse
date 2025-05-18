import { DescriptionBtn } from '@/components/ui/descriptionBtn'
import FilterSection from '@/components/ui/filterSection'

export default function Properties() {
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
                                </div>
                        </section>
                </>
        )
}
