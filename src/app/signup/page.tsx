'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { signup } from '../../utils/actions'
import { ReactNode, useActionState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image from '../../../public/img/image.png'

function SignButton({ children }: { text: string; children: ReactNode }) {
        return (
                <Button variant='secondary' className='rounded-4xl cursor-pointer w-58 h-10 text-base max-container:col-span-2 max-container:w-full'>
                        {children}
                        Log in with Google
                </Button>
        )
}

export default function LoginForm() {
        const [state, action] = useActionState(signup, { errors: {}, values: {} })
        console.log(state)
        return (
                <section className='py-13! max-md:py-10!'>
                        <div className='container flex max-container:text-center max-container:gap-10 max-md:flex-col max-md:items-center'>
                                <Card className='max-w-141 w-full mx-auto px-4 py-10 gap-10 m-0 max-lg:px-0 max-lg:py-6 max-md:w-full'>
                                        <CardHeader>
                                                <CardTitle className='text-3xl font-semibold'>Join Urbanouse Today!</CardTitle>
                                                <CardDescription className='text-lg'>
                                                        Create an account to start saving properties, receiving alerts, and accessing expert real estate insights.
                                                </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                                <div className='grid grid-cols-2 justify-items-center gap-5'>
                                                        <SignButton text='Log in with Google'>
                                                                <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                                        <path
                                                                                d='M6.98916 13.8775L6.36261 16.2165L4.07258 16.2649C3.38819 14.9955 3 13.5432 3 11.9998C3 10.5074 3.36295 9.10006 4.00631 7.86084H4.0068L6.04557 8.23462L6.93868 10.2612C6.75175 10.8061 6.64987 11.3911 6.64987 11.9998C6.64994 12.6605 6.76961 13.2935 6.98916 13.8775Z'
                                                                                fill='#FBBB00'
                                                                        />
                                                                        <path
                                                                                d='M20.8431 10.3184C20.9465 10.8628 21.0003 11.425 21.0003 11.9997C21.0003 12.644 20.9326 13.2725 20.8035 13.8788C20.3654 15.9419 19.2206 17.7433 17.6348 19.0182L17.6343 19.0177L15.0663 18.8866L14.7029 16.6178C15.7552 16.0007 16.5776 15.0349 17.0108 13.8788H12.1982V10.3184H17.081H20.8431Z'
                                                                                fill='#518EF8'
                                                                        />
                                                                        <path
                                                                                d='M17.6335 19.0183L17.634 19.0188C16.0917 20.2585 14.1324 21.0002 11.9996 21.0002C8.57225 21.0002 5.59238 19.0845 4.07227 16.2654L6.98885 13.8779C7.74889 15.9064 9.70564 17.3503 11.9996 17.3503C12.9857 17.3503 13.9094 17.0838 14.7021 16.6185L17.6335 19.0183Z'
                                                                                fill='#28B446'
                                                                        />
                                                                        <path
                                                                                d='M17.7442 5.07196L14.8286 7.45892C14.0082 6.94613 13.0384 6.64991 11.9995 6.64991C9.65358 6.64991 7.66023 8.16011 6.93826 10.2613L4.00635 7.86096H4.00586C5.50372 4.97307 8.52117 3 11.9995 3C14.1832 3 16.1855 3.77786 17.7442 5.07196Z'
                                                                                fill='#F14336'
                                                                        />
                                                                </svg>
                                                        </SignButton>
                                                        <Button variant='secondary' className='rounded-4xl cursor-pointer w-58 h-10 text-base max-container:col-span-2 max-container:w-full'>
                                                                <svg width='15' height='18' viewBox='0 0 15 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                                        <path
                                                                                d='M12.2426 9.56283C12.2679 12.2868 14.6322 13.1933 14.6584 13.2048C14.6384 13.2687 14.2806 14.4966 13.4128 15.7649C12.6625 16.8615 11.8839 17.9539 10.6573 17.9766C9.45206 17.9988 9.06451 17.2619 7.68657 17.2619C6.30904 17.2619 5.87845 17.954 4.73755 17.9988C3.55357 18.0436 2.65196 16.8131 1.89552 15.7206C0.349775 13.4858 -0.831498 9.4057 0.754653 6.65155C1.54262 5.28383 2.95077 4.41773 4.4792 4.39552C5.64183 4.37334 6.73918 5.1777 7.44994 5.1777C8.16026 5.1777 9.49378 4.21039 10.8957 4.35245C11.4826 4.37688 13.13 4.58952 14.1879 6.13794C14.1026 6.19078 12.2222 7.28549 12.2426 9.56283ZM9.97747 2.87397C10.606 2.1131 11.0291 1.0539 10.9137 0C10.0076 0.0364156 8.91203 0.603766 8.26214 1.36422C7.67972 2.03763 7.16964 3.11548 7.30727 4.14852C8.31717 4.22665 9.34886 3.63532 9.97747 2.87397Z'
                                                                                fill='black'
                                                                        />
                                                                </svg>
                                                                Log in with Apple
                                                        </Button>
                                                        <p className='my-9 text-gentle col-span-2'>or continue with email</p>
                                                </div>
                                                <form className='flex flex-col gap-5' action={action}>
                                                        <div className='grid gap-3 grid-cols-2'>
                                                                <Label htmlFor='firstName' className='text-base col-span-2'>
                                                                        Full Name
                                                                </Label>
                                                                <Input
                                                                        id='firstName'
                                                                        name='firstName'
                                                                        type='text'
                                                                        placeholder='First Name'
                                                                        autoComplete='name'
                                                                        className='rounded-4xl p-4 h-14 placeholder:text-placeholder'
                                                                        defaultValue={state.values?.firstName || ''}
                                                                />
                                                                <Input
                                                                        id='lastName'
                                                                        name='lastName'
                                                                        type='text'
                                                                        placeholder='Last Name'
                                                                        autoComplete='family-name'
                                                                        className='rounded-4xl p-4 h-14 placeholder:text-placeholder'
                                                                        defaultValue={state.values?.lastName || ''}
                                                                />
                                                                {state.errors.firstName &&
                                                                        state.errors.firstName.map((e, i) => {
                                                                                return (
                                                                                        <p key={i} className='text-red-600'>
                                                                                                {e}
                                                                                        </p>
                                                                                )
                                                                        })}
                                                                {state.errors.lastName &&
                                                                        state.errors.lastName.map((e, i) => {
                                                                                return (
                                                                                        <p key={i} className='text-red-600'>
                                                                                                {e}
                                                                                        </p>
                                                                                )
                                                                        })}
                                                        </div>
                                                        <div className='grid gap-3'>
                                                                <Label htmlFor='email' className='text-base'>
                                                                        Email
                                                                </Label>
                                                                <Input
                                                                        id='email'
                                                                        name='email'
                                                                        type='email'
                                                                        placeholder='Enter your email'
                                                                        autoComplete='new-password'
                                                                        className='rounded-4xl p-4 h-14 placeholder:text-placeholder'
                                                                        defaultValue={state.values?.email || ''}
                                                                />
                                                                {state.errors.email &&
                                                                        state.errors.email.map((e, i) => {
                                                                                return (
                                                                                        <p className='text-red-600' key={i}>
                                                                                                {e}
                                                                                        </p>
                                                                                )
                                                                        })}
                                                        </div>
                                                        <div className='grid gap-3'>
                                                                <Label htmlFor='password' className='text-base'>
                                                                        Password
                                                                </Label>
                                                                <Input
                                                                        id='createPassword'
                                                                        name='password'
                                                                        type='password'
                                                                        placeholder='Create your password'
                                                                        autoComplete='new-password'
                                                                        className='rounded-4xl p-4 h-14 placeholder:text-placeholder'
                                                                        defaultValue={state.values?.password || ''}
                                                                />
                                                                {state.errors.password &&
                                                                        state.errors.password.map((e, i) => {
                                                                                return (
                                                                                        <p className='text-red-600' key={i}>
                                                                                                {e}
                                                                                        </p>
                                                                                )
                                                                        })}
                                                        </div>
                                                        <div className='grid gap-3'>
                                                                <Label htmlFor='password' className='text-base'>
                                                                        Confirm Password
                                                                </Label>
                                                                <Input
                                                                        id='confirmPassword'
                                                                        name='confirmPassword'
                                                                        type='text'
                                                                        placeholder='Confirm your password'
                                                                        autoComplete='new-password'
                                                                        className='rounded-4xl p-4 h-14 placeholder:text-placeholder'
                                                                        defaultValue={state.values?.confirmPassword || ''}
                                                                />
                                                        </div>
                                                        {state.errors.confirmPassword &&
                                                                state.errors.confirmPassword.map((e, i) => {
                                                                        return <p className='text-red-600'>{e}</p>
                                                                })}
                                                        <Button type='submit' className='w-full h-12 rounded-4xl mt-3 cursor-pointer'>
                                                                Sign Up
                                                        </Button>
                                                        <div className='flex gap-2 flex-wrap'>
                                                                <p className='font-semibold'>Already have an account?</p>
                                                                <Link href='signin' className='text-info font-semibold'>
                                                                        Log In Here
                                                                </Link>
                                                        </div>
                                                </form>
                                        </CardContent>
                                </Card>
                                <div className='max-w-694 py-9 pl-9 max-container:p-0   '>
                                        <Image src={image} alt='image' width={694} height={845} />
                                </div>
                        </div>
                </section>
        )
}
