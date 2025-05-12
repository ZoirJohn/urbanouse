'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { signup } from '../../utils/authAction'
import { useActionState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image from '../../../public/img/image.png'
import { useFormStatus } from 'react-dom'

function Submit() {
        const { pending } = useFormStatus()
        return (
                <Button className='rounded-4xl h-14 mt-3 text-base' disabled={pending}>
                        Sign Up
                </Button>
        )
}

export default function LoginForm() {
        const [state, action] = useActionState(signup, { errors: {} })
        return (
                <section>
                        <div className='container flex items-center gap-15 max-md:flex-col'>
                                <Card className='border max-w-141.5 w-full p-10 max-lg:p-5'>
                                        <CardHeader>
                                                <CardTitle className='text-[28px]'>Join Urbanouse Today!</CardTitle>
                                                <CardDescription className='text-lg text-gentle font-normal'>
                                                        Create an account to start saving properties, receiving alerts, and accessing expert real estate insights.
                                                </CardDescription>
                                        </CardHeader>
                                        <div className='grid grid-cols-2 gap-y-9 gap-x-5 justify-items-center'>
                                                <Button variant='secondary' className='rounded-4xl h-10 w-58'>
                                                        Log In with Google
                                                </Button>
                                                <Button variant='secondary' className='rounded-4xl h-10 w-58'>
                                                        Log In with Apple
                                                </Button>
                                                <p className='text-base! text-gentle col-span-2'>or continue with email</p>
                                        </div>
                                        <CardContent>
                                                <form action={action} className='flex flex-col gap-5'>
                                                        <div className='grid grid-cols-2 gap-x-5 gap-y-3'>
                                                                <Label className='col-span-2 text-base'>Full Name</Label>
                                                                <Input
                                                                        id='name'
                                                                        name='firstName'
                                                                        placeholder='First Name'
                                                                        autoComplete='name'
                                                                        type='text'
                                                                        aria-describedby='name-input'
                                                                        className='rounded-4xl h-14 px-5 placeholder:text-placeholder placeholder:text-base'
                                                                />
                                                                <Input
                                                                        id='surname'
                                                                        name='lastName'
                                                                        placeholder='Last Name'
                                                                        autoComplete='family-name'
                                                                        type='text'
                                                                        aria-describedby='surname-input'
                                                                        className='rounded-4xl h-14 px-5 placeholder:text-placeholder placeholder:text-base'
                                                                />
                                                        </div>
                                                        <div className='grid grid-cols-1 gap-y-3'>
                                                                <Label className='col-span-2 text-base'>Email</Label>
                                                                <Input
                                                                        id='email'
                                                                        name='email'
                                                                        placeholder='Email'
                                                                        autoComplete='email'
                                                                        type='email'
                                                                        aria-describedby='email-input'
                                                                        className='rounded-4xl h-14 px-5 placeholder:text-placeholder placeholder:text-base'
                                                                />
                                                        </div>
                                                        <div className='grid grid-cols-1 gap-y-3'>
                                                                <Label className='col-span-2 text-base'>Password</Label>
                                                                <Input
                                                                        id='password'
                                                                        name='password'
                                                                        placeholder='Create your password'
                                                                        autoComplete='new-password'
                                                                        type='password'
                                                                        aria-describedby='password-input'
                                                                        className='rounded-4xl h-14 px-5 placeholder:text-placeholder placeholder:text-base'
                                                                />
                                                        </div>
                                                        <div className='grid grid-cols-1 gap-y-3'>
                                                                <Label className='col-span-2 text-base'>Confirm Password</Label>
                                                                <Input
                                                                        id='confirmPassword'
                                                                        name='confirmPassword'
                                                                        placeholder='Confirm your password'
                                                                        autoComplete='new-password'
                                                                        type='password'
                                                                        aria-describedby='confirmPassword-input'
                                                                        className='rounded-4xl h-14 px-5 placeholder:text-placeholder placeholder:text-base'
                                                                />
                                                        </div>
                                                        <Submit />
                                                </form>
                                                <p className='text-base font-semibold flex justify-center items-center mt-10 gap-1'>
                                                        Already have an account?
                                                        <Link href='/signin' className='text-blue-500 text-xs'>
                                                                Log In Here
                                                        </Link>
                                                </p>
                                        </CardContent>
                                </Card>
                                <div className='max-w-694 max-container:p-0'>
                                        <Image src={image} alt='image' width={694} height={845} />
                                </div>
                        </div>
                </section>
        )
}
