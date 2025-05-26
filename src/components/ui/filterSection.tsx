'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function SelectCreator({ types, callback, defaultValue }: { types: string[]; callback: (s: string) => void; defaultValue: string }) {
        return (
                <Select onValueChange={callback} defaultValue={defaultValue}>
                        <SelectTrigger className='w-32 max-xs:w-full capitalize font-medium dark:text-white'>
                                <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                                {types.map((t, key) => {
                                        return (
                                                <SelectItem value={t} className='capitalize font-medium' key={key}>
                                                        {t}
                                                </SelectItem>
                                        )
                                })}
                        </SelectContent>
                </Select>
        )
}

export default function FilterSection() {
        const [state, setState] = useState<string>('all type')
        const [city, setCity] = useState<string>('all cities')
        const [type, setType] = useState<string>('all type')
        const [beds, setBeds] = useState<string>('all type')
        const [price, setPrice] = useState<string>('$200,000')
        return (
                <section className='pt-25 pb-10 max-md:pt-15 max-md:pb-5'>
                        <div className='container flex flex-col items-center gap-15'>
                                <div className='max-w-123 text-center'>
                                        <h4 className='font-semibold mb-2'>Find Your Dream Property</h4>
                                        <p className='description'>We offer modern properties with the best quality that meet all your needs.</p>
                                </div>
                                <form action='' className='flex gap-20 max-lg:gap-7 flex-wrap justify-center max-xs:flex-col items-center max-xs:text-center max-xs:w-full max-xs:px-4'>
                                        <label className='flex flex-col gap-2 text-gentle text-base max-xs:w-full items-start'>
                                                Looking for
                                                <SelectCreator types={['all type', 'buy', 'sell']} callback={setState} defaultValue={state} />
                                        </label>
                                        <label className='flex flex-col gap-2 text-gentle text-base max-xs:w-full items-start'>
                                                Location
                                                <SelectCreator types={['all cities', 'barcelona', 'warsaw']} callback={setCity} defaultValue={city} />
                                        </label>
                                        <label className='flex flex-col gap-2 text-gentle text-base max-xs:w-full items-start'>
                                                Property Type
                                                <SelectCreator types={['all type', 'family house', 'villa']} callback={setType} defaultValue={type} />
                                        </label>
                                        <label className='flex flex-col gap-2 text-gentle text-base max-xs:w-full items-start'>
                                                Bedrooms
                                                <SelectCreator types={['all type', 'a bedroom', '2 bedroom', '3 bedroom']} callback={setBeds} defaultValue={beds} />
                                        </label>
                                        <label className='flex flex-col gap-2 text-gentle text-base max-xs:w-full items-start'>
                                                Budget
                                                <SelectCreator types={['$200,000', '$300,000', '$450,000']} callback={setPrice} defaultValue={price} />
                                        </label>
                                        <Button className='w-14 h-14 rounded-4xl text-base max-xs:w-full  max-xs:h-12'>
                                                <span className='xs:hidden'>Search</span>
                                                <svg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                        <path
                                                                fillRule='evenodd'
                                                                clipRule='evenodd'
                                                                d='M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.4856 20 15.7342 18.9937 17.364 17.364C18.9937 15.7342 20 13.4856 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 13.6771 21.0426 16.1321 19.4532 18.039L25.7071 24.2929C26.0976 24.6834 26.0976 25.3166 25.7071 25.7071C25.3166 26.0976 24.6834 26.0976 24.2929 25.7071L18.039 19.4532C16.1321 21.0426 13.6771 22 11 22C4.92487 22 0 17.0751 0 11Z'
                                                                fill='white'
                                                        />
                                                </svg>
                                        </Button>
                                </form>
                        </div>
                </section>
        )
}
