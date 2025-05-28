'use client'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/img/logo.svg'
import minLogo from '../../../public/img/logoMin.svg'

const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/properties', label: 'Properties' },
        { href: '/agents', label: 'Agents' },
]

export default function Header() {
        const pathname = usePathname()
        const [isScrolled, setIsScrolled] = useState(false)
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
        const [user, setUser] = useState()
        useEffect(() => {
                const handleScroll = () => {
                        setIsScrolled(window.scrollY > 30)
                }
                window.addEventListener('scroll', handleScroll)
                return () => {
                        window.removeEventListener('scroll', handleScroll)
                }
        }, [])
        useEffect(() => {
                async function fetchUsers() {
                        const supabase = await createClient()
                        const { data } = await supabase.auth.getUser()
                        return data.user?.user_metadata.full_name
                }
                fetchUsers().then(setUser)
        }, [])
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
                                                        <Button variant='outline' className='w-full rounded-3xl dark:text-black dark:bg-white' onClick={() => isMobile && setIsMobileMenuOpen(false)}>
                                                                Sign Up
                                                        </Button>
                                                </Link>
                                                <Link href='signin' className={isMobile ? 'max-xs:w-22 w-full' : ''}>
                                                        <Button className='w-full rounded-3xl max-xs:w-22' onClick={() => isMobile && setIsMobileMenuOpen(false)}>
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
                                        <div className='flex flex-col items-start gap-4 mt-10 font-medium text-gray-800'>
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
                        className={clsx('fixed left-0 w-full z-30 top-0 bg-white', {
                                'bg-white': isScrolled,
                        })}
                >
                        <div className='container flex items-center justify-between py-4 h-17'>
                                <Link href='/'>
                                        <Image src={logo} alt='logo' width={173} height={30} className='max-lg:hidden' loading='eager' />
                                        <Image src={minLogo} alt='logo' width={26} height={30} className='lg:hidden' loading='eager' />
                                </Link>

                                {renderDesktopNav()}

                                <div className='hidden gap-3 md:flex'>{renderAuthButtons()}</div>

                                {renderMobileMenu()}
                        </div>
                </header>
        )
}
