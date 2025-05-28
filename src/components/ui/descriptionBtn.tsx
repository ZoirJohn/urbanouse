import { Button } from './button'

export function DescriptionBtn({ text }: { text: string }) {
        return (
                <Button variant='outline' className='mb-3 text-lg bg-transparent rounded-3xl h-11 select-none'>
                        <span className='block w-2.5 h-2.5 bg-black rounded-4xl dark:bg-white'></span>
                        {text}
                </Button>
        )
}
