import { House } from '@/components/ui/houseCard'
import { NextResponse } from 'next/server'

const houses: House[] = [
        {
                heightOfImg: 425,
                price: 600,
                name: 'Grand Arcadia',
                addressStreet: '2345 Birch Road',
                addressCity: 'Berlin, 10115, Germany',
                features: { beds: 3, bath: 2, area: 900 },
                state: 'sale',
        },
        {
                heightOfImg: 425,
                price: 600,
                name: 'Grand Arcadia',
                addressStreet: '2345 Birch Road',
                addressCity: 'Berlin, 10115, Germany',
                features: { beds: 3, bath: 2, area: 900 },
                state: 'sale',
        },
        {
                heightOfImg: 425,
                price: 600,
                name: 'Grand Arcadia',
                addressStreet: '2345 Birch Road',
                addressCity: 'Berlin, 10115, Germany',
                features: { beds: 3, bath: 2, area: 900 },
                state: 'sale',
        },
]

export async function GET(): Promise<NextResponse<House[]>> {
        return NextResponse.json(houses)
}
