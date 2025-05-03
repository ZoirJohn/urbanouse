'use client'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export function Nav() {
        const pathname = usePathname()
        return (
                <NavigationMenu>
                        <NavigationMenuList className='flex items-center'>
                                <NavigationMenuItem>
                                        <NavigationMenuLink className={clsx('text-base hover:bg-white focus:bg-white text-normalGray', { 'font-semibold text-black': pathname == '/' })} href='/'>
                                                Home
                                        </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                        <NavigationMenuLink
                                                className={clsx('text-base hover:bg-white focus:bg-white text-normalGray', { 'font-semibold text-black': pathname == '/aboutus' })}
                                                href='/aboutus'
                                        >
                                                About Us
                                        </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem className='hover:bg-white'>
                                        <NavigationMenuTrigger className='hover:bg-white'>
                                                <NavigationMenuLink
                                                        className={clsx('text-base hover:bg-white focus:bg-white text-normalGray', { 'font-semibold text-black': pathname == '/props' })}
                                                        href='/props'
                                                >
                                                        Properties
                                                </NavigationMenuLink>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                                <ul className='grid w-[50px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[50px] left-1/2'>
                                                       <li>ONe</li>
                                                </ul>
                                        </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                        <NavigationMenuLink
                                                className={clsx('text-base hover:bg-white focus:bg-white text-normalGray', { 'font-semibold text-black': pathname == '/agents' })}
                                                href='/agents'
                                        >
                                                Agents
                                        </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                        <NavigationMenuLink
                                                className={clsx('text-base hover:bg-white focus:bg-white text-normalGray', { 'font-semibold text-black': pathname == '/projects' })}
                                                href='/projects'
                                        >
                                                Projects
                                        </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                        <NavigationMenuLink
                                                className={clsx('text-base hover:bg-white focus:bg-white text-normalGray', { 'font-semibold text-black': pathname == '/contactus' })}
                                                href='/contactus'
                                        >
                                                Contact Us
                                        </NavigationMenuLink>
                                </NavigationMenuItem>
                        </NavigationMenuList>
                </NavigationMenu>
        )
}
