import { Agent } from '@/utils/definitions'
import { NextResponse } from 'next/server'

const agents: Agent[] = [
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Amelia Stone',
                position: 'Lead Property Consultant',
                location: 'London',
                achievements: { sold: 389, rented: 25 },
                rating: 4.8,
        },
        {
                fullName: 'Carlos Vega',
                position: 'Luxury Estate Expert',
                location: 'Madrid',
                achievements: { sold: 275, rented: 10 },
                rating: 4.7,
        },
        {
                fullName: 'Emma Li',
                position: 'Urban Housing Specialist',
                location: 'Berlin',
                achievements: { sold: 315, rented: 45 },
                rating: 4.6,
        },
        {
                fullName: 'Nina Petrova',
                position: 'Residential Realtor',
                location: 'Moscow',
                achievements: { sold: 210, rented: 60 },
                rating: 4.5,
        },
        {
                fullName: 'Lucas Moreau',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 400, rented: 5 },
                rating: 4.85,
        },
        {
                fullName: 'Sofia Novak',
                position: 'Property Investment Consultant',
                location: 'Prague',
                achievements: { sold: 198, rented: 82 },
                rating: 4.6,
        },
        {
                fullName: 'Kenji Tanaka',
                position: 'Real Estate Strategist',
                location: 'Tokyo',
                achievements: { sold: 320, rented: 12 },
                rating: 4.75,
        },
        {
                fullName: 'Isabella Rossi',
                position: 'Commercial Property Agent',
                location: 'Rome',
                achievements: { sold: 150, rented: 90 },
                rating: 4.4,
        },
        {
                fullName: 'Oliver Smith',
                position: 'Real Estate Broker',
                location: 'New York',
                achievements: { sold: 500, rented: 20 },
                rating: 4.95,
        },
]

export async function GET() {
        return NextResponse.json(agents)
}
