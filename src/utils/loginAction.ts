'use server'
import { z } from 'zod'
import { SingInState } from './defintions'
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

export async function signin(state: SingInState, formData: FormData): Promise<SingInState> {
        const validated = SigninFormSchema.safeParse({
                email: formData.get('email'),
                password: formData.get('password'),
        })
        if (!validated.success) {
                return { errors: validated.error.flatten().fieldErrors }
        }

        const { error } = await supabase.auth.signInWithPassword({
                email: validated.data.email,
                password: validated.data.password,
        })

        if (error) console.log('Error has occured')

        return { errors: {} }
}
