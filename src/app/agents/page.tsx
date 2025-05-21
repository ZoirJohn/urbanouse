import { Button } from '@/components/ui/button'
import { DescriptionBtn } from '@/components/ui/descriptionBtn'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Image from 'next/image'

export default function Agents() {
        return (
                <>
                        <section>
                                <div className='container flex items-center justify-center gap-20 max-md:flex-col max-md:gap-x-10 max-md:gap-y-2'>
                                        <div className='mb-15 max-md:mb-5 grow-0 sm:w-3/5'>
                                                <DescriptionBtn text='Agents' />
                                                <h2 className='font-semibold'>Meet Our Expert Agents</h2>
                                                <p className='md:basis-125 description pr-5'>Your dedicated guides in the journey to your dream property.</p>
                                                <Button className='rounded-full h-12 w-40 text-base mt-10 max-md:mt-5'>View Our Agents</Button>
                                        </div>
                                        <div>
                                                <Image src='/img/bgimage.png' width={680} height={550} alt='image' />
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='container flex gap-15 items-center justify-center max-sm:flex-col max-md:gap-x-10 max-md:gap-y-2'>
                                        <Image src='/img/descr.png' width={620} height={447} alt='image' className='lg:shrink-0' />
                                        <div>
                                                <DescriptionBtn text='Why Choose Us' />
                                                <h4 className='font-semibold mb-5'>Experience, Dedication, and Market Expertise You Can Trust.</h4>
                                                <p className='description'>
                                                        At Urbanouse, our agents are not just salespeople—they are trusted advisors with deep market knowledge and a passion for helping you find the
                                                        perfect home or investment.
                                                </p>
                                                <br />
                                                <p className='description'>
                                                        With years of experience in the real estate industry, they’re equipped to guide you through every step of the buying, selling, or renting
                                                        process. Whether you're a first-time homebuyer or a seasoned investor, our agents offer personalized service tailored to your unique needs and
                                                        preferences.
                                                </p>
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='container'>
                                        <div className='mb-15 max-md:mb-5 flex flex-col items-end'>
                                                <DescriptionBtn text='Meet Our Agents' />
                                                <h2 className='font-semibold mt-3 mb-5'>Our Agents of Experts</h2>
                                                <p className='description pr-5'>Dedicated professionals passionate about making your real estate dreams come true.</p>
                                        </div>
                                        <form action='' className='flex flex-wrap gap-20 justify-center max-md:gap-10'>
                                                <label className='flex flex-col gap-2'>
                                                        <p className='description text-base!'>Location</p>
                                                        <Select defaultValue='all cities'>
                                                                <SelectTrigger className='w-50'>
                                                                        <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                        <SelectItem value='all cities'>All Cities</SelectItem>
                                                                        <SelectItem value='barcelona'>Barcelona</SelectItem>
                                                                        <SelectItem value='warsaw'>Warsaw</SelectItem>
                                                                </SelectContent>
                                                        </Select>
                                                </label>
                                                <label className='flex flex-col gap-2'>
                                                        <p className='description text-base!'>Property Type</p>
                                                        <Select defaultValue='all type'>
                                                                <SelectTrigger className='w-50'>
                                                                        <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                        <SelectItem value='all type'>All Type</SelectItem>
                                                                        <SelectItem value='family house'>Family House</SelectItem>
                                                                        <SelectItem value='villa'>Villa</SelectItem>
                                                                </SelectContent>
                                                        </Select>
                                                </label>
                                                <label className='flex flex-col gap-2'>
                                                        <p className='description text-base!'>Agents Type</p>
                                                        <Select defaultValue='all type'>
                                                                <SelectTrigger className='w-50'>
                                                                        <SelectValue />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                        <SelectItem value='all type'>All Type</SelectItem>
                                                                        <SelectItem value='dark'>Top Rated</SelectItem>
                                                                        <SelectItem value='system'>New</SelectItem>
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
                </>
        )
}
