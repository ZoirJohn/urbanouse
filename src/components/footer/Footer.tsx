import Link from 'next/link'
import { Button } from '../ui/button'

export default function Footer() {
        return (
                <footer>
                        <div className='bg-[url(/img/ctabanner.png)] dark:bg-[url(/img/ctabanner.png)] bg-cover bg-no-repeat bg-center text-white text-center py-40'>
                                <div className='container flex flex-col items-center justify-center text-center'>
                                        <h3 className='font-semibold mb-5 max-xs:text-3xl!'>
                                                Ready to Find Your <br className='max-sm:hidden' />
                                                Dream Home with Urbanouse?
                                        </h3>
                                        <p className='description w-1/2 mb-15'>
                                                Join thousands of happy homeowners who found their perfect residence with us. Let’s make your property journey smooth and successful.
                                        </p>
                                        <Link href=''>
                                                <Button variant='ghost' className='rounded-4xl h-12 w-54 hover:bg-transparent hover:text-white border border-white'>
                                                        Let&apos;s work together
                                                        <svg width='20' height='10' viewBox='0 0 20 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                                <path d='M15.25 1.25L19 5M19 5L15.25 8.75M19 5H1' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
                                                        </svg>
                                                </Button>
                                        </Link>
                                </div>
                        </div>
                        <div className='bg-navy text-white py-18'>
                                <div className='container flex justify-between mb-20 gap-10 max-sm:flex-col'>
                                        <div className='max-w-full w-full'>
                                                <p className='text-base! mb-3'>2223 CALLE DE ALCALÁ SALAMANCAMADRID, 28028</p>
                                                <p className='text-base!'>(+34) 123-456-789</p>
                                        </div>
                                        <div>
                                                <p className='text-base!'>GET IN TOUCH</p>
                                                <h4 className='max-xs:text-xl!'>marketing@urbanouse.com</h4>
                                        </div>
                                </div>
                                <nav className='container flex justify-between'>
                                        <ul className='flex gap-5 max-lg:flex-col max-lg:pl-10 max-md:pl-0'>
                                                <li>
                                                        <Link href='/'>HOME</Link>
                                                </li>
                                                <li>
                                                        <Link href='/about'>ABOUT US</Link>
                                                </li>
                                                <li>
                                                        <Link href='/properties'>PROPERTIES</Link>
                                                </li>
                                                <li>
                                                        <Link href='/agents'>AGENTS</Link>
                                                </li>
                                                <li>
                                                        <Link href='/project'>PROJECTS</Link>
                                                </li>
                                                <li>
                                                        <Link href='/contact'>CONTACT US</Link>
                                                </li>
                                        </ul>
                                        <ul className='flex gap-5 max-lg:flex-col max-lg:pr-10 max-md:pr-0'>
                                                <li>
                                                        <Link href='https://instagram.com' target='_blank'>
                                                                INSTAGRAM
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link href='https://facebook.com' target='_blank'>
                                                                FACEBOOK
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link href='https://linkedin.com' target='_blank'>
                                                                LINKEDIN
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link href='https://youtube.com' target='_blank'>
                                                                YOUTUBE
                                                        </Link>
                                                </li>
                                        </ul>
                                </nav>
                                <div className='overflow-hidden'>
                                        <h1 className='text-[18rem] text-center font-semibold'>Urbanouse</h1>
                                </div>
                                <nav className='container flex justify-between max-lg:flex-col-reverse max-lg:gap-5 max-lg:items-center'>
                                        <p className='text-center'>© 2024 URBANOUSE. ALL RIGHTS RESERVED</p>
                                        <ul className='flex gap-5 flex-wrap justify-center'>
                                                <li>
                                                        <Link href='/privacy'>PRIVACY POLICE</Link>
                                                </li>
                                                <li>
                                                        <Link href='/terms'>TERM OF USE</Link>
                                                </li>
                                                <li>
                                                        <Link href='disclaimer'>LEGAL DISCLAIMER</Link>
                                                </li>
                                                <li>
                                                        <Link href='cookie'>COOKIE POLICY</Link>
                                                </li>
                                        </ul>
                                </nav>
                        </div>
                </footer>
        )
}
