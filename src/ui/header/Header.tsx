'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu'
import Image from 'next/image'
import clsx from 'clsx'

const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/properties', label: 'Properties' },
        { href: '/agents', label: 'Agents' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact Us' },
]

export function Header() {
        const pathname = usePathname()

        return (
                <header className='fixed left-0 w-full'>
                        <div className='container flex justify-between items-center px-1 py-4'>
                                <Link href='/'>
                                        <Image src='./logo.svg' alt='logo' width={173} height={30} className='max-lg:hidden' />
                                        <Image src='./logoMin.svg' alt='logo' width={26} height={30} className='lg:hidden' />
                                </Link>

                                <NavigationMenu className='hidden md:flex'>
                                        <NavigationMenuList className='flex gap-6 text-sm font-medium text-gray-600'>
                                                {navLinks.map(({ href, label }) => (
                                                        <NavigationMenuItem key={href}>
                                                                <Link href={href} className={clsx('text-base', { 'font-semibold text-black': pathname == href })}>
                                                                        {label}
                                                                </Link>
                                                        </NavigationMenuItem>
                                                ))}
                                        </NavigationMenuList>
                                </NavigationMenu>

                                <div className='hidden md:flex gap-3'>
                                        <Button variant='outline' className='rounded-3xl'>
                                                <Link href='/signup'>Sign Up</Link>
                                        </Button>
                                        <Button className='rounded-3xl'>
                                                <Link href='signin'>Sign In</Link>
                                        </Button>
                                </div>

                                <div className='md:hidden'>
                                        <Sheet>
                                                <SheetTitle></SheetTitle>
                                                <SheetTrigger asChild>
                                                        <Button variant='ghost' size='icon'>
                                                                <Menu className='w-6 h-6' />
                                                        </Button>
                                                </SheetTrigger>
                                                <SheetContent side='right' className='w-62.5 px-10'>
                                                        <div className='flex flex-col gap-4 mt-10 text-gray-800 font-medium'>
                                                                {navLinks.map(({ href, label }) => (
                                                                        <Link key={href} href={href} className={`${pathname === href ? 'text-black font-semibold' : 'hover:text-black'}`}>
                                                                                {label}
                                                                        </Link>
                                                                ))}
                                                                <div className='pt-4 border-t flex flex-col gap-2'>
                                                                        <Button variant='outline' className='rounded-3xl'>
                                                                                <Link href='/signup'>Sign Up</Link>
                                                                        </Button>
                                                                        <Button className='rounded-3xl'>
                                                                                <Link href='signin'>Sign In</Link>
                                                                        </Button>
                                                                </div>
                                                        </div>
                                                </SheetContent>
                                        </Sheet>
                                </div>
                        </div>
                </header>
        )
}
