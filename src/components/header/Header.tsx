'use client'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/utils/client'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import logo from '../../../public/img/logo.svg'
import minLogo from '../../../public/img/logoMin.svg'

const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/properties', label: 'Properties' },
        { href: '/agents', label: 'Agents' },
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact Us' },
]

export default function Header() {
        const pathname = usePathname()
        const [isScrolled, setIsScrolled] = useState(false)
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
        const [user, setUser] = useState<string | null>(null)

        const fetchUser = useCallback(async () => {
                try {
                        const user = await supabase.auth.getSession().then((res) => res.data.session?.user)
                        return user?.user_metadata.fullName
                } catch (error) {
                        return { error }
                }
        }, [])

        useEffect(() => {
                const handleScroll = () => {
                        setIsScrolled(window.scrollY > 30)
                }

                window.addEventListener('scroll', handleScroll)
                fetchUser().then(setUser)
                return () => {
                        window.removeEventListener('scroll', handleScroll)
                }
        }, [fetchUser])

        const renderDesktopNav = () => (
                <NavigationMenu className='hidden md:flex'>
                        <NavigationMenuList className='flex gap-6 text-sm font-medium text-gray-600'>
                                {navLinks.map(({ href, label }) => (
                                        <NavigationMenuItem key={href}>
                                                <Link
                                                        href={href}
                                                        className={clsx('text-base', {
                                                                'font-semibold text-black': pathname === href,
                                                        })}
                                                >
                                                        {label}
                                                </Link>
                                        </NavigationMenuItem>
                                ))}
                        </NavigationMenuList>
                </NavigationMenu>
        )

        const renderAuthButtons = (isMobile = false) => {
                return (
                        <>
                                {user ? (
                                        <p className='text-base! dark:text-gray-400'>{user}</p>
                                ) : (
                                        <>
                                                <Link href='/signup' className={isMobile ? 'max-xs:w-22 w-full' : ''}>
                                                        <Button variant='outline' className='rounded-3xl dark:text-black w-full dark:bg-white' onClick={() => isMobile && setIsMobileMenuOpen(false)}>
                                                                Sign Up
                                                        </Button>
                                                </Link>
                                                <Link href='signin' className={isMobile ? 'max-xs:w-22 w-full' : ''}>
                                                        <Button className='rounded-3xl max-xs:w-22 w-full' onClick={() => isMobile && setIsMobileMenuOpen(false)}>
                                                                Sign In
                                                        </Button>
                                                </Link>
                                        </>
                                )}
                        </>
                )
        }

        const renderMobileMenu = () => (
                <div className='md:hidden'>
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                                <SheetTitle></SheetTitle>
                                <Menu className='w-6 h-6 text-black' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                                <SheetContent side='right' className='w-62.5 px-8'>
                                        <div className='flex flex-col items-start gap-4 mt-10 text-gray-800 font-medium'>
                                                {navLinks.map(({ href, label }) => (
                                                        <Link
                                                                key={href}
                                                                href={href}
                                                                className={clsx('hover:text-black dark:text-white', {
                                                                        'text-black font-semibold grow-0': pathname === href,
                                                                })}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                                {label}
                                                        </Link>
                                                ))}
                                                <div className='relative pt-4 flex flex-col gap-2 before:absolute before:top-0 before:bg-gray-300 before:w-45 before:h-0.25'>
                                                        {renderAuthButtons(true)}
                                                </div>
                                        </div>
                                </SheetContent>
                        </Sheet>
                </div>
        )

        return (
                <header
                        className={clsx('fixed left-0 w-full z-30 top-0 bg-[#fcfcfc]', {
                                'bg-[#fcfcfc]': isScrolled,
                        })}
                >
                        <div className='container flex justify-between items-center py-4 h-17'>
                                <Link href='/'>
                                        <Image src={logo} alt='logo' width={173} height={30} className='max-lg:hidden' />
                                        <Image src={minLogo} alt='logo' width={26} height={30} className='lg:hidden' />
                                </Link>

                                {renderDesktopNav()}

                                <div className='hidden md:flex gap-3'>{renderAuthButtons()}</div>

                                {renderMobileMenu()}
                        </div>
                </header>
        )
}
