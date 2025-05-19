import Filter from '@/components/ui/filter'
import { HouseCard } from './houseCard'
import { House } from '@/utils/definitions'

const houses: House[] = [
        {
                heightOfImg: 425,
                price: 600,
                name: 'Grand Arcadia',
                addressStreet: '2345 Birch Road',
                addressCity: 'Berlin, 10115, Germany',
                features: { beds: 3, bath: 2, area: 900 },
                state: 'rent',
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
export function HousesFilter() {
        return (
                <>
                        <Filter />
                        <div className='grid grid-cols-3 gap-5 max-lg:grid-cols-2 justify-center max-sm:hidden'>
                                {houses.map((h, key) => {
                                        if (true) return <HouseCard {...h} key={key} />
                                })}
                        </div>
                </>
        )
}
