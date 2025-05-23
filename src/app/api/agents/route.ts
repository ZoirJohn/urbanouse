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
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
        {
                fullName: 'Jaydon George',
                position: 'Senior Real Estate Advisor',
                location: 'Paris',
                achievements: { sold: 432, rented: 0 },
                rating: 4.9,
        },
]

export async function GET() {
        return NextResponse.json(agents)
}
