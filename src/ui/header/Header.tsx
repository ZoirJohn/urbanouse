import Image from 'next/image'
import Link from 'next/link'
import { Nav } from './Nav'
import { Button } from '@/components/ui/button'

export function Header() {
        return (
                <header className='fixed left-0 w-full'>
                        <div className='container flex justify-between items-center py-4'>
                                <Link href='/'>
                                        <Image src='./logo.svg' alt='logo' width={173} height={30} />
                                </Link>
                                <Nav></Nav>
                                <div className='flex gap-3'>
                                        <Button className='rounded-3xl' variant='secondary'>
                                                Sign Up
                                        </Button>
                                        <Button className='rounded-3xl'>Sign In</Button>
                                </div>
                        </div>
                </header>
        )
}
