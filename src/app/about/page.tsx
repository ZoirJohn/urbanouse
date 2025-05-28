import { DescriptionBtn } from '@/components/ui/descriptionBtn'
import { Crown, Handshake, Leaf, Lightbulb, ShieldCheck, UserRound } from 'lucide-react'
import Opinion from '@/components/opinion/Opinion'
import Image from 'next/image'
import AgentCard from '@/components/ui/agentCard'
import { Agent } from '@/utils/definitions'

export default async function About() {
        const agents: Agent[] = await fetch(process.env.NEXT_PUBLIC_BASE_URL! + '/api/agents', { cache: 'force-cache' }).then((res) => res.json())
        return (
                <>
                        <section>
                                <div className='container flex items-center justify-center gap-20 max-md:flex-col max-md:gap-x-10 max-md:gap-y-2'>
                                        <div className='mb-15 max-md:mb-5 grow-0 sm:w-3/5'>
                                                <DescriptionBtn text='About Urbanouse' />
                                                <h2 className='font-semibold'>Your Dream Home, Our Expertise.</h2>
                                                <p className='md:basis-125 description pr-5'>Connecting you with premium properties and unparalleled real estate services.</p>
                                        </div>
                                        <div>
                                                <Image src='/img/hitech2.jpeg' width={680} height={550} alt='image' />
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='container flex gap-15 items-center justify-center max-sm:flex-col max-md:gap-x-10 max-md:gap-y-2'>
                                        <Image src='/img/floralhouse.jpeg' width={620} height={447} alt='image' className='lg:shrink-0' />
                                        <div>
                                                <p className='description'>
                                                        At Urbanouse, we believe finding a home is more than a transaction—it&apos;s about creating a space where dreams grow. Founded by a team of
                                                        dedicated real estate professionals, we set out to make the home buying, selling, and renting process seamless and personal. With a focus on
                                                        understanding each client&apos;s unique needs, we&apos;ve helped countless individuals and families find homes that truly fit their lifestyle
                                                        and aspirations.
                                                </p>
                                                <br />
                                                <p className='description'>
                                                        Over the years, Urbanouse has grown into a trusted leader in the real estate industry. Our success is built on strong relationships and a
                                                        commitment to transparency, integrity, and personalized service. Whether it&apos;s guiding first-time buyers or working with seasoned investors,
                                                        we&apos;re proud to be the partner people trust to help them find not just a property, but a place to call home.
                                                </p>
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='container flex items-center justify-center gap-20 max-sm:flex-col max-md:gap-x-10 max-md:gap-y-2'>
                                        <div className='mb-15 max-md:mb-5 grow-0 sm:w-3/5'>
                                                <DescriptionBtn text='Our Vision' />
                                                <h4 className='font-semibold mt-3 mb-5'>Tailored Real Estate Solutions for Every Client</h4>
                                                <p className='md:basis-125 description pr-5'>
                                                        At Urbanouse, our mission is to provide clients with seamless real estate solutions tailored to their unique needs, ensuring a rewarding and
                                                        fulfilling experience at every step.
                                                </p>
                                        </div>
                                        <Image src='/img/hitech2.jpeg' width={620} height={447} alt='image' className='lg:shrink-0'></Image>
                                </div>
                        </section>
                        <section>
                                <div className='container flex flex-row-reverse items-center justify-center gap-20 max-sm:flex-col max-md:gap-x-10 max-md:gap-y-2'>
                                        <div className='mb-15 max-md:mb-5 grow-0 sm:w-3/5'>
                                                <DescriptionBtn text='Our Mission' />
                                                <h4 className='font-semibold mt-3 mb-5'>Leading with Excellence, Integrity, and Innovation in Real Estate</h4>
                                                <p className='md:basis-125 description pr-5'>
                                                        Our vision is to become a trusted leader in the real estate industry by delivering excellence, integrity, and innovation in every transaction.
                                                </p>
                                        </div>
                                        <Image src='/img/floralhouse.jpeg' width={620} height={447} alt='image' className='lg:shrink-0'></Image>
                                </div>
                        </section>
                        <section>
                                <div className='container'>
                                        <div className='mb-15 max-md:mb-5 grow-0 sm:w-3/5'>
                                                <DescriptionBtn text='Our Core Value' />
                                                <h4 className='font-semibold mt-3 mb-5'>What We Stand For You</h4>
                                                <p className='md:basis-125 description pr-5'>Core principles that guide every transaction, ensuring excellence and client satisfaction.</p>
                                        </div>
                                        <div className='grid grid-cols-3 gap-5 max-lg:gap-0 items-start max-md:grid-cols-2 max-xs:grid-cols-1'>
                                                <div className='p-7 pr-10 max-lg:p-2 max-lg:pr-6'>
                                                        <div className='w-16 h-16 bg-black flex items-center justify-center rounded-full'>
                                                                <ShieldCheck className='text-black w-9 h-9 fill-white ' />
                                                        </div>
                                                        <h6 className='font-semibold mt-7 mb-3'>Integrity</h6>
                                                        <p className='description'>
                                                                We are always honest and transparent in all dealings, ensuring that clients receive clear and accurate information to make informed
                                                                decisions.
                                                        </p>
                                                </div>
                                                <div className='p-7 pr-10 max-lg:p-2 max-lg:pr-6'>
                                                        <div className='w-16 h-16 bg-black flex items-center justify-center rounded-full'>
                                                                <Crown className='text-black w-9 h-9 fill-white ' />
                                                        </div>
                                                        <h6 className='font-semibold mt-7 mb-3'>Excellence</h6>
                                                        <p className='description'>
                                                                We strive to exceed expectations by delivering outstanding results, paying close attention to detail and committing fully to the quality
                                                                of our services.
                                                        </p>
                                                </div>
                                                <div className='p-7 pr-10 max-lg:p-2 max-lg:pr-6'>
                                                        <div className='w-16 h-16 bg-black flex items-center justify-center rounded-full'>
                                                                <UserRound className='text-black w-9 h-9 fill-white ' />
                                                        </div>
                                                        <h6 className='font-semibold mt-7 mb-3'>Customer-Centricity</h6>
                                                        <p className='description'>
                                                                Our clients are our top priority; we listen carefully to their needs and provide personalized solutions tailored to each individual.
                                                        </p>
                                                </div>
                                                <div className='p-7 pr-10 max-lg:p-2 max-lg:pr-6'>
                                                        <div className='w-16 h-16 bg-black flex items-center justify-center rounded-full'>
                                                                <Lightbulb className='w-9 h-9 fill-white text-white' />
                                                        </div>
                                                        <h6 className='font-semibold mt-7 mb-3'>Innovation</h6>
                                                        <p className='description'>
                                                                We continuously adopt the latest technologies and ideas to offer better, more efficient, and relevant services in the ever-evolving real
                                                                estate market.
                                                        </p>
                                                </div>
                                                <div className='p-7 pr-10 max-lg:p-2 max-lg:pr-6'>
                                                        <div className='w-16 h-16 bg-black flex items-center justify-center rounded-full'>
                                                                <Handshake className='text-white w-9 h-9' />
                                                        </div>
                                                        <h6 className='font-semibold mt-7 mb-3'>Excellence</h6>
                                                        <p className='description'>
                                                                We strive to exceed expectations by delivering outstanding results, paying close attention to detail and committing fully to the quality
                                                                of our services.
                                                        </p>
                                                </div>
                                                <div className='p-7 pr-10 max-lg:p-2 max-lg:pr-6'>
                                                        <div className='w-16 h-16 bg-black flex items-center justify-center rounded-full'>
                                                                <Leaf className='text-black w-9 h-9 fill-white ' />
                                                        </div>
                                                        <h6 className='font-semibold mt-7 mb-3'>Customer-Centricity</h6>
                                                        <p className='description'>
                                                                Our clients are our top priority; we listen carefully to their needs and provide personalized solutions tailored to each individual.
                                                        </p>
                                                </div>
                                        </div>
                                </div>
                        </section>
                        <section>
                                <div className='container'>
                                        <div className='mb-15 max-md:mb-5 flex flex-col items-end'>
                                                <DescriptionBtn text='Meet Our Agents' />
                                                <h2 className='font-semibold mt-3 mb-5'>Our Agents of Experts</h2>
                                                <p className='description pr-5'>Dedicated professionals passionate about making your real estate dreams come true.</p>
                                        </div>
                                        <div className='grid grid-cols-4 gap-y-10 gap-x-5 max-container:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1'>
                                                {agents.map((_, key) => (
                                                        <AgentCard key={key} {..._} />
                                                ))}
                                        </div>
                                </div>
                        </section>
                        <Opinion />
                </>
        )
}
