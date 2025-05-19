import { Card, CardDescription, CardHeader, CardTitle } from './card'
import { Button } from './button'
import { House } from '@/utils/definitions'
import Link from 'next/link'
import Image from 'next/image'

export function HouseCard({ heightOfImg, price, name, addressStreet, addressCity, features, state }: House) {
        return (
                <Link href=''>
                        <Card className='dark:bg-black max-w-106 w-full max-sm:w-79 relative'>
                                <Button className='rounded-3xl absolute top-5 left-5 uppercase'>FOR {state}</Button>
                                <Image src={heightOfImg > 325 ? '/img/castle.png' : '/img/hitech.png'} alt='card-image' className='rounded-xl' width={425} height={heightOfImg} />
                                <CardHeader>
                                        <CardTitle className='max-xs:text-2xl'>${price},000</CardTitle>
                                        <CardDescription className='max-xs:text-[1.25rem]'>{name}</CardDescription>
                                        <CardDescription className='text-gentle text-lg font-regular max-xs:text-base'>
                                                {addressStreet}
                                                <br /> {addressCity}
                                        </CardDescription>
                                        <CardDescription className='flex gap-5 text-gentle'>
                                                <p className='text-base!'>{features.beds} beds</p>
                                                <p className='text-base!'>{features.bath} bath</p>
                                                <p className='text-base!'>{features.area} sq.ft</p>
                                        </CardDescription>
                                </CardHeader>
                        </Card>
                </Link>
        )
}
