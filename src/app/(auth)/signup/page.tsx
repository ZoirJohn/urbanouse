'use client'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { signup } from '@/actions/auth'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { SingUpState } from '@/utils/definitions'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/client'

function FormControls({ state }: { state: SingUpState }) {
        const { pending } = useFormStatus()
        return (
                <>
                        <div className='grid grid-cols-2 gap-x-5 gap-y-3 relative'>
                                <Label className='col-span-2 text-base'>Full Name</Label>
                                <Input
                                        id='name'
                                        name='firstName'
                                        placeholder='First Name'
                                        type='text'
                                        aria-describedby='name-input'
                                        className='rounded-4xl h-14 px-5 placeholder:text-placeholder placeholder:text-base max-xs:col-span-2'
                                        defaultValue={state.values.firstName}
                                        disabled={pending}
                                />
                                <Input
                                        id='surname'
                                        name='lastName'
                                        placeholder='Last Name'
                                        autoComplete='family-name'
                                        type='text'
                                        aria-describedby='surname-input'
                                        className='rounded-4xl h-14 px-5 placeholder:text-placeholder placeholder:text-base max-xs:col-span-2'
                                        defaultValue={state.values.lastName}
                                        disabled={pending}
                                />
                                {state.errors.firstName &&
                                        state.errors.firstName.map((e, key) => {
                                                return (
                                                        <p className='text-red-600' key={key}>
                                                                {e}
                                                        </p>
                                                )
                                        })}
                                {state.errors.lastName &&
                                        state.errors.lastName.map((e, key) => {
                                                return (
                                                        <p className='text-red-600' key={key}>
                                                                {e}
                                                        </p>
                                                )
                                        })}
                        </div>
                        <div className='grid grid-cols-1 gap-y-3 relative'>
                                <Label className='col-span-2 text-base'>Email</Label>
                                <Input
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        autoComplete='email'
                                        type='email'
                                        aria-describedby='email-input'
                                        className='rounded-4xl h-14 px-5 placeholder:text-placeholder placeholder:text-base col-span-2'
                                        defaultValue={state.values.email}
                                        disabled={pending}
                                />
                                {state.errors.email &&
                                        state.errors.email.map((e, key) => {
                                                return (
                                                        <p className='text-red-600' key={key}>
                                                                {e}
                                                        </p>
                                                )
                                        })}
                        </div>
                        <div className='grid grid-cols-1 gap-y-3 relative'>
                                <Label className='col-span-2 text-base'>Password</Label>
                                <Input
                                        id='password'
                                        name='password'
                                        placeholder='Create your password'
                                        autoComplete='new-password'
                                        type='password'
                                        aria-describedby='password-input'
                                        className='rounded-4xl h-14 px-5 placeholder:text-placeholder placeholder:text-base col-span-2'
                                        defaultValue={state.values.password}
                                        disabled={pending}
                                />
                                {state.errors.password &&
                                        state.errors.password.map((e, key) => {
                                                return (
                                                        <p className='text-red-600 col-span-2' key={key}>
                                                                {e}
                                                        </p>
                                                )
                                        })}
                        </div>
                        <div className='grid grid-cols-1 gap-y-3 relative'>
                                <Label className='col-span-2 text-base'>Confirm Password</Label>
                                <Input
                                        id='confirmPassword'
                                        name='confirmPassword'
                                        placeholder='Confirm your password'
                                        autoComplete='new-password'
                                        type='password'
                                        aria-describedby='confirmPassword-input'
                                        className='rounded-4xl h-14 px-5 placeholder:text-placeholder placeholder:text-base'
                                        defaultValue={state.values.confirmPassword}
                                        disabled={pending}
                                />
                                {state.errors.confirmPassword &&
                                        state.errors.confirmPassword.map((e, key) => {
                                                return (
                                                        <p className='text-red-600 col-span-2' key={key}>
                                                                {e}
                                                        </p>
                                                )
                                        })}
                        </div>
                        <Button className='rounded-4xl h-14 mt-3 text-base' disabled={pending}>
                                Sign Up
                        </Button>
                </>
        )
}

export default function LoginForm() {
        const [state, action] = useActionState(signup, { errors: {}, values: {} })
        async function signupwithgoogle(): Promise<void> {
                const supabase = await createClient()
                const { error } = await supabase.auth.signInWithOAuth({
                        provider: 'google',
                        options: {
                                redirectTo: 'http://localhost:3000/auth/callback',
                        },
                })
                if (error) {
                        console.error(error.message)
                }
        }
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
                                        <div className='grid grid-cols-2 gap-y-9 gap-x-5 justify-items-center max-sm:grid-cols-1 max-sm:gap-y-4'>
                                                <Button variant='secondary' className='rounded-4xl h-10 w-58' onClick={signupwithgoogle}>
                                                        <Image src='/img/google.png' alt='' width={24} height={24} />
                                                        Log In with Google
                                                </Button>
                                                <Button variant='secondary' className='rounded-4xl h-10 w-58 text-base'>
                                                        <Image src='/img/apple.png' alt='' width={24} height={24} />
                                                        Log In with Apple
                                                </Button>
                                                <p className='text-base! text-gentle col-span-2 max-sm:col-span-1'>or continue with email</p>
                                        </div>
                                        <CardContent>
                                                <form action={action} className='flex flex-col gap-5'>
                                                        <FormControls state={state} />
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
                                        <Image src='/img/image.png' alt='image' width={694} height={845} />
                                </div>
                        </div>
                </section>
        )
}
