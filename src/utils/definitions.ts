export type SingInState = {
        errors: {
                email?: string[]
                password?: string[]
        }
        values: {
                email?: string
                password?: string
        }
}
export type SingUpState = {
        errors: {
                firstName?: string[]
                lastName?: string[]
                email?: string[]
                password?: string[]
                confirmPassword?: string[]
        }
        values: {
                firstName?: string
                lastName?: string
                email?: string
                password?: string
                confirmPassword?: string
        }
}
export type House = { heightOfImg: number; price: number; name: string; addressStreet: string; addressCity: string; features: { beds: number; bath: number; area: number }; state: 'sale' | 'rent' }

export type Agent = {
        fullName: string
        position: string
        location: string
        achievements: { sold: number; rented: number }
        rating: number
}
