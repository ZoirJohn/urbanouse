'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { signin } from '@/actions/auth'
import { useActionState } from 'react'
import { SingInState } from '@/utils/definitions'
import { useFormStatus } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { LoaderCircle } from 'lucide-react'

function FormControls({ state }: { state: SingInState }) {
        const { pending } = useFormStatus()
        return (
                <>
                        <div className='grid gap-3'>
                                <Label htmlFor='email' className='text-base'>
                                        Username or Email
                                </Label>
                                <Input
                                        id='email'
                                        name='email'
                                        type='email'
                                        placeholder='you@example.com'
                                        autoComplete='username'
                                        className='rounded-4xl p-4 h-14'
                                        defaultValue={state.values.email}
                                        disabled={pending}
                                />
                                {state.errors.email &&
                                        state.errors.email.map((error, i) => (
                                                <p className='text-sm text-red-500' key={i}>
                                                        {error}
                                                </p>
                                        ))}
                        </div>
                        <div className='grid gap-3'>
                                <Label htmlFor='password' className='text-base'>
                                        Password
                                </Label>
                                <Input
                                        id='password'
                                        name='password'
                                        type='password'
                                        placeholder='••••••••'
                                        autoComplete='new-password'
                                        className='rounded-4xl p-4 h-14'
                                        defaultValue={state.values.password}
                                        disabled={pending}
                                />
                                {state.errors.password &&
                                        state.errors.password.map((password, i) => (
                                                <p className='text-sm text-red-500' key={i}>
                                                        {password}
                                                </p>
                                        ))}
                        </div>
                        <Link href='/forgot' className='justify-self-end hover:underline underline-offset-4'>
                                Forgot your password?
                        </Link>
                        <Button type='submit' className='w-full h-12 rounded-4xl' disabled={pending}>
                                {pending ? <LoaderCircle className='animate-spin' /> : 'Log In'}
                        </Button>
                </>
        )
}

export default function LoginForm() {
        const [state, action] = useActionState(signin, { errors: {}, values: {} })
        return (
                <section>
                        <div className='container'>
                                <Card className='border max-w-141.5 w-full p-10 max-lg:p-5 relative'>
                                        <CardHeader>
                                                <CardTitle className='text-3xl font-semibold'>Welcome Back!</CardTitle>
                                                <CardDescription className='text-lg'>Log in to manage your property searches, save favorites, and get personalized recommendations.</CardDescription>
                                        </CardHeader>
                                        <div className='grid grid-cols-2 gap-y-9 gap-x-5 justify-items-center max-sm:grid-cols-1 max-sm:gap-y-4'>
                                                <Button variant='secondary' className='rounded-4xl h-10 w-58'>
                                                        <Image src='/img/google.png' alt='' width={24} height={24} />
                                                        Log In with Google
                                                </Button>
                                                <Button variant='secondary' className='rounded-4xl h-10 w-58 text-base'>
                                                        <Image src='/img/facebook.png' alt='' width={24} height={24} />
                                                        Log In with Facebook
                                                </Button>
                                                <p className='text-base! text-gentle col-span-2 max-sm:col-span-1'>or continue with email</p>
                                        </div>
                                        <CardContent>
                                                <form className='grid gap-5' action={action}>
                                                        <FormControls state={state} />
                                                </form>
                                                <p className='text-base font-semibold flex justify-center items-center mt-10 gap-1'>
                                                        Don’t have an account?
                                                        <Link href='/signin' className='text-blue-500 text-xs'>
                                                                Sign Up
                                                        </Link>
                                                </p>
                                        </CardContent>
                                </Card>
                        </div>
                </section>
        )
}
