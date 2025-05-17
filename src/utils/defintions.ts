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
