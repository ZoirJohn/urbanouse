'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from '@/components/ui/navigation-menu'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import logo from '../../../public/img/logo.svg'
import minLogo from '../../../public/img/logoMin.svg'
import { supabase } from '@/utils/client'

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
        const [user, setUser] = useState<null | any>(null)

        useEffect(() => {
                const getUser = async () => {
                        const {
                                data: { user },
                                error,
                        } = await supabase.auth.getUser()
                        setUser(user)
                }

                getUser()
        }, [])
        console.log(user);
        useEffect(() => {
                window.addEventListener('scroll', () => setScroll(window.scrollY > 30))
                if (window.scrollY > 30) {
                        setScroll(true)
                }
        }, [])
        return (
                <header className={clsx('fixed left-0 w-full z-30 top-0 bg-[#fcfcfc]', { 'bg-[#fcfcfc]': scroll })}>
                        <div className='container flex justify-between items-center py-4 h-17'>
                                <Link href='/'>
                                        <Image src={logo} alt='logo' width={173} height={30} className='max-lg:hidden' />
                                        <Image src={minLogo} alt='logo' width={26} height={30} className='lg:hidden' />
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
                                        {user ? (
                                                <p>User</p>
                                        ) : (
                                                <>
                                                        <Link href='/signup'>
                                                                <Button variant='outline' className='rounded-3xl dark:text-black '>
                                                                        Sign Up
                                                                </Button>
                                                        </Link>
                                                        <Link href='signin'>
                                                                <Button className='rounded-3xl'>Sign In</Button>
                                                        </Link>
                                                </>
                                        )}
                                </div>

                                <div className='md:hidden'>
                                        <Sheet open={open} onOpenChange={() => setOpen(false)}>
                                                <SheetTitle></SheetTitle>
                                                <Menu className='w-6 h-6' onClick={() => setOpen(!open)} />
                                                <SheetContent side='right' className='w-62.5 px-8'>
                                                        <div className='flex flex-col items-start gap-4 mt-10 text-gray-800 font-medium'>
                                                                {navLinks.map(({ href, label }) => (
                                                                        <Link
                                                                                key={href}
                                                                                href={href}
                                                                                className={`${pathname === href ? 'text-black font-semibold grow-0' : 'hover:text-black'}`}
                                                                                onClick={() => setOpen(false)}
                                                                        >
                                                                                {label}
                                                                        </Link>
                                                                ))}
                                                                <div className='relative pt-4 flex flex-col gap-2 before:absolute before:top-0 before:bg-gray-300 before:w-45 before:h-0.25'>
                                                                        {user ? (
                                                                                <p>User</p>
                                                                        ) : (
                                                                                <>
                                                                                        <Link href='/signup' className='max-xs:w-22' onClick={() => setOpen(false)}>
                                                                                                <Button variant='outline' className='rounded-3xl dark:text-black w-full'>
                                                                                                        Sign Up
                                                                                                </Button>
                                                                                        </Link>
                                                                                        <Link href='signin' className='max-xs:w-22' onClick={() => setOpen(false)}>
                                                                                                <Button className='rounded-3xl max-xs:w-22 w-full'>Sign In</Button>
                                                                                        </Link>
                                                                                </>
                                                                        )}
                                                                </div>
                                                        </div>
                                                </SheetContent>
                                        </Sheet>
                                </div>
                        </div>
                </header>
        )
}
