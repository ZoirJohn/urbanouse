'use server'

import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

export type SingInState = {
        errors: {
                email?: string[]
                password?: string[]
        }
}
export type SingUpState = {
        errors: {
                firstName?: string[]
                lastName?: string[]
                email?: string[]
                password?: string[]
        }
}

const SigninFormSchema = z.object({
        email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
        password: z
                .string()
                .min(8, { message: 'Be at least 8 characters long' })
                .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
                .regex(/[0-9]/, { message: 'Contain at least one number.' })
                .regex(/[^a-zA-Z0-9]/, {
                        message: 'Contain at least one special character.',
                })
                .trim(),
})
const SignupFormSchema = z.object({
        email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
        firstName: z.string().trim(),
        lastName: z.string().trim(),
        password: z
                .string()
                .min(8, { message: 'Be at least 8 characters long' })
                .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
                .regex(/[0-9]/, { message: 'Contain at least one number.' })
                .regex(/[^a-zA-Z0-9]/, {
                        message: 'Contain at least one special character.',
                })
                .trim(),
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
        const validationResult = SignupFormSchema.safeParse({
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
        })

        if (!validationResult.success) {
                return {
                        errors: validationResult.error.flatten().fieldErrors,
                }
        }

        const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

        const { error } = await supabase.auth.signUp({
                email: validationResult.data.firstName,
                password: validationResult.data.password,
        })

        if (error) {
                return {
                        errors: { email: [error.message] },
                }
        }
        return { errors: {} }
}
