import { Button } from '../ui/button'

export function About() {
        return (
                <section>
                        <div className='container'>
                                <div className='flex items-center'>
                                        <div className='basis-[60%]'>
                                                <Button variant='outline' className='rounded-3xl text-lg h-11 mb-3'>
                                                        <span className='block w-2.5 h-2.5 bg-black rounded-4xl dark:bg-white'></span>
                                                        About Urbanouse
                                                </Button>
                                                <h1 className='font-semibold'>
                                                        Your Dream Home, <br />
                                                        Our Expertise.
                                                </h1>
                                        </div>
                                        <p className='basis-[40%]'>
                                                At Urbanouse, we are committed to helping individuals and families find their perfect homes and smart investment properties. Our approach blends
                                                personalized service, expert insights, and a dedication to excellence, ensuring your real estate journey is seamless, rewarding, and tailored to your
                                                unique needs.
                                        </p>
                                </div>
                        </div>
                </section>
        )
}
