import { z } from 'zod'
import { SingInState, SingUpState } from '@/utils/definitions'
import { createClient } from '@/utils/supabase/client'

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
export async function signup(state: SingUpState, formData: FormData): Promise<SingUpState> {
        const data = {
                email: formData.get('email') as string,
                password: formData.get('password') as string,
                firstName: formData.get('firstName') as string,
                lastName: formData.get('lastName') as string,
                confirmPassword: formData.get('confirmPassword') as string,
        }

        const validated = signupSchema.safeParse(data)

        if (!validated.success) {
                return {
                        errors: validated.error.flatten().fieldErrors,
                        values: data,
                }
        }
        if (data.password !== data.confirmPassword) {
                return {
                        errors: {
                                confirmPassword: ['Passwords should match'],
                        },
                        values: data,
                }
        }
        const supabase = await createClient()

        const { error } = await supabase.auth.signUp({
                email: validated.data.email,
                password: validated.data.password,
                options: {
                        data: {
                                full_name: validated.data.firstName + ' ' + validated.data.lastName,
                        },
                },
        })

        if (error) {
                return {
                        errors: {
                                email: ['Error'],
                        },
                        values: data,
                }
        }
        return { errors: {}, values: {} }
}

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
export async function signin(state: SingInState, formData: FormData): Promise<SingInState> {
        const data = {
                email: formData.get('email'),
                password: formData.get('password'),
        }
        const validated = SigninFormSchema.safeParse(data)

        if (!validated.success) {
                return { errors: validated.error.flatten().fieldErrors, values: {} }
        }
        const supabase = await createClient()
        const { error } = await supabase.auth.signInWithPassword({
                email: validated.data.email,
                password: validated.data.password,
        })

        if (error) {
                return {
                        errors: {
                                password: [error.message],
                        },
                        values: {},
                }
        }
        return { errors: {}, values: {} }
}
