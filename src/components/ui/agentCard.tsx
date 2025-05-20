import Image from 'next/image'
import { Button } from './button'
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from './card'
import Link from 'next/link'

export default function AgentCard() {
        return (
                <Card className='w-79 gap-0 dark:bg-transparent mx-auto max-xs:w-75'>
                        <CardHeader>
                                <Image src='/img/image.png' width={315} height={300} alt='image' className='rounded-xl' />
                                <CardTitle className='text-[1.25rem]'>Jaydon George</CardTitle>
                                <CardDescription className='description font-normal mb-3'>Senior Real Estate Advisor</CardDescription>
                        </CardHeader>
                        <CardContent className='flex flex-col gap-3'>
                                <CardDescription className='description text-sm! font-normal flex gap-1'>
                                        <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                        d='M12.125 3.375C13.5057 3.375 14.625 4.49429 14.625 5.875M17.125 5.875C17.125 8.63642 14.8864 10.875 12.125 10.875C11.8327 10.875 11.5463 10.8499 11.2677 10.8018C10.7986 10.7207 10.3017 10.8233 9.965 11.16L7.75 13.375H5.875V15.25H4V17.125H0.875V14.7767C0.875 14.2794 1.07254 13.8025 1.42417 13.4508L6.84 8.035C7.17668 7.69832 7.27927 7.20144 7.1982 6.73225C7.15008 6.45372 7.125 6.16729 7.125 5.875C7.125 3.11358 9.36358 0.875 12.125 0.875C14.8864 0.875 17.125 3.11358 17.125 5.875Z'
                                                        stroke='#8C8C8C'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                />
                                        </svg>
                                        Paris
                                </CardDescription>
                                <CardDescription className='description text-sm! font-normal flex gap-1'>
                                        <svg width='14' height='18' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                        d='M9.5 7.75C9.5 9.13071 8.38071 10.25 7 10.25C5.61929 10.25 4.5 9.13071 4.5 7.75C4.5 6.36929 5.61929 5.25 7 5.25C8.38071 5.25 9.5 6.36929 9.5 7.75Z'
                                                        stroke='#8C8C8C'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                />
                                                <path
                                                        d='M13.25 7.75C13.25 13.7018 7 17.125 7 17.125C7 17.125 0.75 13.7018 0.75 7.75C0.75 4.29822 3.54822 1.5 7 1.5C10.4518 1.5 13.25 4.29822 13.25 7.75Z'
                                                        stroke='#8C8C8C'
                                                        strokeWidth='1.5'
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                />
                                        </svg>
                                        432 properties sold
                                </CardDescription>
                        </CardContent>
                        <CardFooter className='mt-5 p-0'>
                                <Link href='' className='flex w-full'>
                                        <Button variant='outline' className='border-1 border-black outline-0 shadow-none w-full rounded-4xl font-semibold text-sm'>
                                                Contact Agent
                                        </Button>
                                </Link>
                        </CardFooter>
                </Card>
        )
}
