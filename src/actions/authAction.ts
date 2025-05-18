import { z } from 'zod'
import { SingUpState } from '@/utils/definitions'
import { supabase } from '@/utils/client'
import { redirect } from 'next/navigation'

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
        const { error } = await supabase.auth.signUp({
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
                                email: ['Error'],
                        },
                        values: data,
                }
        }
        redirect('/')
        return { errors: {}, values: { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' } }
}
