import { createClient } from '@/utils/supabase/client'

export async function signupwithgoogle(): Promise<void> {
        const supabase = await createClient()
        const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
                },
        })
        if (error) {
                console.error(error.message)
        }
}
export async function signupwithfacebook(): Promise<void> {
        const supabase = await createClient()
        const { error } = await supabase.auth.signInWithOAuth({
                provider: 'facebook',
                options: {
                        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
                },
        })
        if (error) {
                console.error(error.message)
        }
}
