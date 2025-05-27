'use client'
import { Ban } from 'lucide-react'

export default function Error({ error }: { error: Error }) {
        return (
                <section className='flex justify-center items-center min-h-screen'>
                        <Ban className='w-35 h-35' />
                </section>
        )
}
