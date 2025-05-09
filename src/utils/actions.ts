'use server'

import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'
import { SingInState, SingUpState } from './schema'

const SigninFormSchema = z.object({
        email: z.string().email({ message: 'Please enter a valid email' }).trim(),
        password: z
                .string()
                .min(8, { message: 'Be at least 8 characters long' })
                .regex(/[a-zA-Z]/, { message: 'Contain at least one letter' })
                .regex(/[0-9]/, { message: 'Contain at least one number' })
                .regex(/[^a-zA-Z0-9]/, {
                        message: 'Contain at least one special character',
                })
                .trim(),
})
const SignupFormSchema = z.object({
        firstName: z.string().min(1, 'Please provide your name'),
        lastName: z.string().min(1, 'Please provide your last name'),
        email: z.string().trim().email({ message: 'Please enter a valid email' }),
        password: z
                .string()
                .trim()
                .min(8, { message: 'Be at least 8 characters long' })
                .regex(/[a-zA-Z]/, { message: 'Contain at least one letter' })
                .regex(/[0-9]/, { message: 'Contain at least one number' })
                .regex(/[^a-zA-Z0-9]/, { message: 'Contain at least one special character' }),
        confirmPassword: z.string(),
})

export async function signin(state: SingInState, formData: FormData): Promise<SingInState> {
        const validationResult = SigninFormSchema.safeParse({
                email: formData.get('email'),
                password: formData.get('password'),
        })

        if (!validationResult.success) {
                return {
                        errors: validationResult.error.flatten().fieldErrors,
                }
        }

        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
        const { error } = await supabase.auth.signInWithPassword({
                email: validationResult.data.email,
                password: validationResult.data.password,
        })

        if (error) {
                return {
                        errors: { email: [error.message] },
                }
        }
        return { errors: {} }
}

export async function signup(state: SingUpState, formData: FormData): Promise<SingUpState> {
        const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                password: formData.get('password'),
                confirmPassword: formData.get('confirmPassword'),
        }
        const validationResult = SignupFormSchema.safeParse(data)

        if (!validationResult.success) {
                return {
                        errors: validationResult.error.flatten().fieldErrors,
                        values: data as any,
                }
        }

        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

        const { error } = await supabase.auth.signUp({
                email: validationResult.data.email,
                password: validationResult.data.password,
                options: {
                        data: {
                                full_name: `${validationResult.data.firstName} ${validationResult.data.lastName}`,
                        },
                },
        })

        if (error) {
                return {
                        errors: { email: [error.message] },
                }
        }
        return { errors: {} }
}
