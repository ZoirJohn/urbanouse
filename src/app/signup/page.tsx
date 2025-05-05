'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { signup } from '../../utils/actions'
import { useActionState } from 'react'

export default function LoginForm() {
        const [state, action] = useActionState(signup, { errors: {} })

        return (
                <Card className='max-w-141 mx-auto mt-40'>
                        <CardHeader>
                                <CardTitle className='text-3xl font-semibold'>Welcome Back!</CardTitle>
                                <CardDescription className='text-lg'>Log in to manage your property searches, save favorites, and get personalized recommendations.</CardDescription>
                        </CardHeader>
                        <CardContent>
                                <form className='grid gap-4' action={action}>
                                        <div className='grid gap-1'>
                                                <Label htmlFor='email'>Email</Label>
                                                <Input id='email' name='email' type='email' placeholder='you@example.com' autoComplete='username' />
                                                {state?.errors.email &&
                                                        state.errors.email.map((error, i) => (
                                                                <p className='text-sm text-red-500' key={i}>
                                                                        {error}
                                                                </p>
                                                        ))}
                                        </div>
                                        <div className='grid gap-1'>
                                                <Label htmlFor='password'>Password</Label>
                                                <Input id='password' name='password' type='password' placeholder='••••••••' autoComplete='new-password' />
                                                {state?.errors.password &&
                                                        state.errors.password.map((password, i) => (
                                                                <p className='text-sm text-red-500' key={i}>
                                                                        {password}
                                                                </p>
                                                        ))}
                                        </div>
                                        <Button type='submit' className='w-full'>
                                                Sign Up
                                        </Button>
                                </form>
                        </CardContent>
                </Card>
        )
}
