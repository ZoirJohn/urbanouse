import { Button } from './button'

export function DescriptionBtn({ text }: { text: string }) {
        return (
                <Button variant='outline' className='rounded-3xl text-lg h-11 mb-3 bg-transparent'>
                        <span className='block w-2.5 h-2.5 bg-black rounded-4xl dark:bg-white'></span>
                        {text}
                </Button>
        )
}
