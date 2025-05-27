import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DescriptionBtn } from '../ui/descriptionBtn'

export function Faq() {
        return (
                <section>
                        <div className='container flex flex-row-reverse gap-20 max-md:flex-col max-md:gap-5'>
                                <div className='flex flex-col items-end text-right basis-1/2'>
                                        <DescriptionBtn text="FAQ's" />
                                        <h2 className='font-semibold '>Frequently Asked Questions</h2>
                                        <p className='description'>
                                                Have questions about buying, selling, or renting with Urbanouse? We&apos;ve got the answers to help guide you through the process.
                                        </p>
                                </div>
                                <div className='basis-1/2'>
                                        <Accordion type='single' collapsible className='w-full'>
                                                <AccordionItem value='item-1'>
                                                        <AccordionTrigger className='text-lg cursor-pointer'>How do I start searching for a property with Urbanouse?</AccordionTrigger>
                                                        <AccordionContent className='pr-4 text-base text-gentle'>
                                                                You can begin by using our property search tool, which allows you to filter by location, property type, price range, and other features.
                                                                Once you find a property you&apos;re interested in, simply click &apos;View Details&apos; to learn more or schedule a visit.
                                                        </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value='item-2'>
                                                        <AccordionTrigger className='text-lg cursor-pointer'>What services does Urbanouse offer for first-time homebuyers?</AccordionTrigger>
                                                        <AccordionContent className='pr-4 text-base text-gentle'>
                                                                You can begin by using our property search tool, which allows you to filter by location, property type, price range, and other features.
                                                                Once you find a property you&apos;re interested in, simply click &apos;View Details&apos; to learn more or schedule a visit.
                                                        </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value='item-3'>
                                                        <AccordionTrigger className='text-lg cursor-pointer'>Can Urbanouse help me sell my property?</AccordionTrigger>
                                                        <AccordionContent className='pr-4 text-base text-gentle'>
                                                                You can begin by using our property search tool, which allows you to filter by location, property type, price range, and other features.
                                                                Once you find a property you&apos;re interested in, simply click &apos;View Details&apos; to learn more or schedule a visit.
                                                        </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value='item-4'>
                                                        <AccordionTrigger className='text-lg cursor-pointer'>What types of properties does Urbanouse specialize in?</AccordionTrigger>
                                                        <AccordionContent className='pr-4 text-base text-gentle'>
                                                                You can begin by using our property search tool, which allows you to filter by location, property type, price range, and other features.
                                                                Once you find a property you&apos;re interested in, simply click &apos;View Details&apos; to learn more or schedule a visit.
                                                        </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value='item-5'>
                                                        <AccordionTrigger className='text-lg cursor-pointer'>Can I schedule a visit to view properties?</AccordionTrigger>
                                                        <AccordionContent className='pr-4 text-base text-gentle'>
                                                                You can begin by using our property search tool, which allows you to filter by location, property type, price range, and other features.
                                                                Once you find a property you&apos;re interested in, simply click &apos;View Details&apos; to learn more or schedule a visit.
                                                        </AccordionContent>
                                                </AccordionItem>
                                        </Accordion>
                                </div>
                        </div>
                </section>
        )
}
