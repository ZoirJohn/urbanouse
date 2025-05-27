'use client'
import { useState } from 'react'
import { Button } from './button'

export default function Filter() {
        const [filter, setFilter] = useState('all type')
        return (
                <div className='flex justify-center col-span-3 gap-5 overflow-auto py-15 max-md:justify-start max-lg:col-span-2 max-xs:pt-5 max-md:col-span-1'>
                        <Button className='h-10 text-base rounded-3xl' variant={filter == 'all type' ? 'default' : 'outline'} onClick={() => setFilter('all type')}>
                                All Properties
                        </Button>
                        <Button className='h-10 text-base rounded-3xl' variant={filter == 'family house' ? 'default' : 'outline'} onClick={() => setFilter('family house')}>
                                Family House
                        </Button>
                        <Button className='h-10 text-base rounded-3xl' variant={filter == 'villa' ? 'default' : 'outline'} onClick={() => setFilter('villa')}>
                                Villa
                        </Button>
                        <Button className='h-10 text-base rounded-3xl' variant={filter == 'apartment' ? 'default' : 'outline'} onClick={() => setFilter('apartment')}>
                                Apartment
                        </Button>
                </div>
        )
}
