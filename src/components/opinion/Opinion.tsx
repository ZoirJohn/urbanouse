import { randomUUID } from 'crypto'
import { DescriptionBtn } from '../ui/descriptionBtn'
import Feedback from '../ui/feedback'

export default function Opinion() {
        return (
                <section className='bg-[#f5f5f5] dark:bg-transparent'>
                        <div className='container flex flex-col gap-20 max-sm:gap-5'>
                                <div className=''>
                                        <DescriptionBtn text='Testimonial' />
                                        <h2 className='font-semibold'>What People Are Saying</h2>
                                        <p className='md:basis-125 description'>Real feedback from clients who&apos;ve experienced the Urbanouse difference.</p>
                                </div>

                                <Feedback
                                        slides={[
                                                <div className='flex flex-col items-center py-5 px-30 max-md:px-2' key={randomUUID + ''}>
                                                        <h5 className='text-4xl text-center mb-8 max-sm:text-[1.25rem]!'>
                                                                “Urbanouse made buying our first home an absolute breeze! Their team was incredibly attentive and guided us through every step. We
                                                                couldn&apos;t be happier with our new home.”
                                                        </h5>
                                                        <p className=''>Sarah & Michael Stone</p>
                                                        <p className='description text-base!'>Homeowners</p>
                                                </div>,
                                                <div className='flex flex-col items-center py-5 px-30 max-md:px-2' key={randomUUID + ''}>
                                                        <h5 className='text-4xl text-center mb-8 max-sm:text-[1.25rem]!'>
                                                                “Urbanouse made buying our first home an absolute breeze! Their team was incredibly attentive and guided us through every step. We
                                                                couldn&apos;t be happier with our new home.”
                                                        </h5>
                                                        <p className=''>Sarah & Michael Stone</p>
                                                        <p className='description text-base!'>Homeowners</p>
                                                </div>,
                                        ]}
                                        className=''
                                />
                        </div>
                </section>
        )
}
