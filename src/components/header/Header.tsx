'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu'
import Image from 'next/image'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

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
        const [scroll, setScroll] = useState<boolean>(false)
        const [open, setOpen] = useState<boolean>(false)
        useEffect(() => {
                window.addEventListener('scroll', () => setScroll(window.scrollY > 30))
                if (window.scrollY > 30) {
                        setScroll(true)
                }
        }, [])
        return (
                <header className={clsx('fixed left-0 w-full z-30 top-0 bg-white', { 'bg-white': scroll })}>
                        <div className='container flex justify-between items-center py-4 '>
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
                                        <Link href='/signup'>
                                                <Button variant='outline' className='rounded-3xl dark:text-black cursor-pointer'>
                                                        Sign Up
                                                </Button>
                                        </Link>
                                        <Link href='signin'>
                                                <Button className='rounded-3xl cursor-pointer'>Sign In</Button>
                                        </Link>
                                </div>

                                <div className='md:hidden'>
                                        <Sheet open={open} onOpenChange={() => setOpen(false)}>
                                                <SheetTitle></SheetTitle>
                                                <Menu className='w-6 h-6' onClick={() => setOpen(!open)} />
                                                <SheetContent side='right' className='w-62.5 px-10'>
                                                        <div className='flex flex-col gap-4 mt-10 text-gray-800 font-medium'>
                                                                {navLinks.map(({ href, label }) => (
                                                                        <Link key={href} href={href} className={`${pathname === href ? 'text-black font-semibold' : 'hover:text-black'}`}>
                                                                                {label}
                                                                        </Link>
                                                                ))}
                                                                <div className='pt-4 border-t flex flex-col gap-2'>
                                                                        <Link href='/signup'>
                                                                                <Button variant='outline' className='rounded-3xl dark:text-black cursor-pointer'>
                                                                                        Sign Up
                                                                                </Button>
                                                                        </Link>
                                                                        <Link href='signin'>
                                                                                <Button className='rounded-3xl cursor-pointer'>Sign In</Button>
                                                                        </Link>
                                                                </div>
                                                        </div>
                                                </SheetContent>
                                        </Sheet>
                                </div>
                        </div>
                </header>
        )
}
