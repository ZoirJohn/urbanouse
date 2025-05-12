'use server'
import { z } from 'zod'
import { SingInState, SingUpState } from './schema'
import { supabase } from './client'

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
const signupSchema = z.object({
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

export async function signin(state: SingInState, formData: FormData) {}

export async function signup(state: SingUpState, formData: FormData): Promise<{ errors: {} }> {
        const validated = signupSchema.safeParse({
                email: formData.get('email'),
                password: formData.get('password'),
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                confirmPassword: formData.get('confirmPassword'),
        })
        if (!validated.success) {
                return {
                        errors: validated.error.flatten().fieldErrors,
                }
        }
        if (validated.data.password != validated.data.confirmPassword) {
                return {
                        errors: {
                                confirmPassword: ['Passwords should match'],
                        },
                }
        }
        const { data, error } = await supabase.auth.signUp({
                email: validated.data.email,
                password: validated.data.password,
                options: {
                        data: {
                                fullName: validated.data.firstName + ' ' + validated.data.lastName,
                        },
                },
        })

        if (error) {
                return {
                        errors: {
                                email: error,
                        },
                }
        }

        return { errors: {} }
}
