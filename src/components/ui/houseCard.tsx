import Link from 'next/link'
import { Card, CardDescription, CardHeader, CardTitle } from './card'
import Image from 'next/image'

export function HouseCard() {
        return (
                <Link href=''>
                        <Card className='dark:bg-black max-w-106 w-full max-sm:w-79'>
                                <Image src='/img/image.png' alt='card-image' width={40} height={40} className='w-full h-106 rounded-xl max-sm:h-50' />
                                <CardHeader>
                                        <CardTitle className='max-xs:text-2xl'>$750,000</CardTitle>
                                        <CardDescription className='max-xs:text-[1.25rem]'>Golden Leaf Residence</CardDescription>
                                        <CardDescription className='text-gentle text-lg font-regular max-xs:text-base'>
                                                1012 Oak Avenue <br /> Manchester, M1 1AE, United Kingdom
                                        </CardDescription>
                                        <CardDescription className='flex gap-5 text-gentle'>
                                                <p className='text-base!'>3 beds</p>
                                                <p className='text-base!'>2 bath</p>
                                                <p className='text-base!'>900 sq.ft</p>
                                        </CardDescription>
                                </CardHeader>
                        </Card>
                </Link>
        )
}
