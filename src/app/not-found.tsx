import { HousePlug } from 'lucide-react'

export default function NotFound() {
        return (
                <div className='flex justify-center items-center h-screen flex-col gap-10'>
                        <p className='text-8xl!'>404</p>
                        <HousePlug width={100} height={100}/>
                </div>
        )
}
