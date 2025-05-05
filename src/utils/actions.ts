'use server'

import { z } from 'zod'

export type FormState = {
        errors: {
                email?: string[]
                password?: string[]
        }
}

const SignupFormSchema = z.object({
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

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
        const validationResult = SignupFormSchema.safeParse({
                email: formData.get('email'),
                password: formData.get('password'),
        })

        if (!validationResult.success) {
                return {
                        errors: validationResult.error.flatten().fieldErrors,
                }
        }

        return { errors: {} }
}

export async function findPerfectMatch(state:any,formData:FormData) {
        
}