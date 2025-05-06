import { DescriptionBtn } from '../ui/descriptionBtn'

export function About() {
        return (
                <section>
                        <div className='container'>
                                <div className='flex justify-between items-center max-md:flex-col max-md:items-start gap-5'>
                                        <div className='md:basis-[50%]'>
                                                <DescriptionBtn text='About Urbanouse' />
                                                <h1 className='font-semibold'>
                                                        Your Dream Home, <br className='max-md:hidden'/>
                                                        Our Expertise.
                                                </h1>
                                        </div>
                                        <p className='md:basis-[45%] description'>
                                                At Urbanouse, we are committed to helping individuals and families find their perfect homes and smart investment properties. Our approach blends
                                                personalized service, expert insights, and a dedication to excellence, ensuring your real estate journey is seamless, rewarding, and tailored to your
                                                unique needs.
                                        </p>
                                </div>
                        </div>
                </section>
        )
}
