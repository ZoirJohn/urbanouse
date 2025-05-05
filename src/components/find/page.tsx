import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '../ui/button'

export function FindDreamProp(props: {}) {
        return (
                <section className='pt-25 pb-10 max-md:pt-15 max-md:pb-5'>
                        <div className='container flex flex-col items-center gap-15'>
                                <div className='max-w-122 text-center'>
                                        <h3 className='font-medium mb-2'>Find Your Dream Property</h3>
                                        <p className='description'>We offer modern properties with the best quality that meet all your needs.</p>
                                </div>
                                <form action='' className='flex gap-20 max-lg:gap-7 flex-wrap justify-center max-[425px]:flex-col items-center max-[425px]:text-center'>
                                        <label className='flex flex-col gap-2 text-gentle text-base'>
                                                Looking for
                                                <Select defaultValue='buy'>
                                                        <SelectTrigger className='w-21'>
                                                                <SelectValue placeholder='Looking for' />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                                <SelectItem value='buy'>Buy</SelectItem>
                                                                <SelectItem value='rent'>Rent</SelectItem>
                                                        </SelectContent>
                                                </Select>
                                        </label>
                                        <label className='flex flex-col gap-2 text-gentle text-base'>
                                                Location
                                                <Select defaultValue='london'>
                                                        <SelectTrigger className='w-26'>
                                                                <SelectValue placeholder='Theme' />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                                <SelectItem value='london'>London</SelectItem>
                                                                <SelectItem value='warsaw'>Warsaw</SelectItem>
                                                                <SelectItem value='barcelona'>Barcelona</SelectItem>
                                                        </SelectContent>
                                                </Select>
                                        </label>
                                        <label className='flex flex-col gap-2 text-gentle text-base'>
                                                Property Type
                                                <Select defaultValue='family house'>
                                                        <SelectTrigger className='w-39'>
                                                                <SelectValue placeholder='Theme' />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                                <SelectItem value='family house'>Family House</SelectItem>
                                                                <SelectItem value='dark'>Mansion</SelectItem>
                                                                <SelectItem value='rancho'>Rancho</SelectItem>
                                                        </SelectContent>
                                                </Select>
                                        </label>
                                        <label className='flex flex-col gap-2 text-gentle text-base'>
                                                Bedrooms
                                                <Select defaultValue='3 bedrooms'>
                                                        <SelectTrigger className='w-37'>
                                                                <SelectValue placeholder='Bedrooms' />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                                <SelectItem value='bedroom'>A Bedroom</SelectItem>
                                                                <SelectItem value='2 bedrooms'>2 Bedrooms</SelectItem>
                                                                <SelectItem value='3 bedrooms'>3 Bedrooms</SelectItem>
                                                        </SelectContent>
                                                </Select>
                                        </label>
                                        <label className='flex flex-col gap-2 text-gentle text-base'>
                                                Budget
                                                <Select defaultValue='500,000'>
                                                        <SelectTrigger className='w-33'>
                                                                <SelectValue placeholder='Budget' />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                                <SelectItem value='200,000'>$200,000</SelectItem>
                                                                <SelectItem value='350,000'>$350,000</SelectItem>
                                                                <SelectItem value='500,000'>$500,000</SelectItem>
                                                        </SelectContent>
                                                </Select>
                                        </label>
                                        <Button className='w-14 h-14 rounded-4xl'>
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
