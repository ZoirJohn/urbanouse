import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from './card'
import Image from 'next/image'
import { Button } from './button'

export type House = { heightOfImg: number; price: number; name: string; addressStreet: string; addressCity: string; features: { beds: number; bath: number; area: number }; state: 'sale' | 'rent' }

export function HouseCard({ heightOfImg, price, name, addressStreet, addressCity, features, state }: House) {
        return (
                <Link href=''>
                        <Card className='dark:bg-black max-w-106 w-full max-sm:w-79 relative'>
                                <Button className='rounded-3xl absolute top-5 left-5 uppercase'>FOR {state}</Button>
                                <Image src='/img/castle.png' alt='card-image' width={425} height={heightOfImg} className='w-full h-106 rounded-xl max-sm:h-50' />
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
