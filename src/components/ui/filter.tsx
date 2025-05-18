'use client'
import { useState } from 'react'
import { Button } from './button'

export default function Filter() {
        const [filter, setFilter] = useState('all')
        return (
                <div className='flex gap-5 justify-center py-15 col-span-3 max-md:justify-start max-lg:col-span-2 max-xs:pt-5 max-md:col-span-1 overflow-auto'>
                        <Button className='rounded-3xl text-base h-10' variant={filter == 'all type' ? 'default' : 'outline'} onClick={() => setFilter('all')}>
                                All Properties
                        </Button>
                        <Button className='rounded-3xl text-base h-10' variant={filter == 'family house' ? 'default' : 'outline'} onClick={() => setFilter('family')}>
                                Family House
                        </Button>
                        <Button className='rounded-3xl text-base h-10' variant={filter == 'villa' ? 'default' : 'outline'} onClick={() => setFilter('villa')}>
                                Villa
                        </Button>
                        <Button className='rounded-3xl text-base h-10' variant={filter == 'apartment' ? 'default' : 'outline'} onClick={() => setFilter('apartment')}>
                                Apartment
                        </Button>
                </div>
        )
}
