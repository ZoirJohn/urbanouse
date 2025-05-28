import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import { ThemeProvider } from '@/components/themeProvider'
import Footer from '@/components/footer/Footer'
import { Faq } from '@/components/faq/Faq'

const jakarta = Plus_Jakarta_Sans({
        variable: '--jakarta',
        subsets: ['latin'],
        weight: ['400', '700', '800', '600', '500', '400'],
})

export const metadata: Metadata = {
        title: 'Urbanouse',
        description:'Buy and Rent houses'
}

export default async function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode
}>) {
        return (
                <html lang='en' suppressHydrationWarning className='scroll-smooth'>
                        <body className={`${jakarta.className} antialiased font-sans flex flex-col min-h-full`}>
                                <ThemeProvider defaultTheme='system' attribute='class' enableSystem disableTransitionOnChange>
                                        <Header />
                                        <main className='mt-17 max-md:mt-15 grow basis-auto'>
                                                {children}
                                                <Faq />
                                        </main>
                                        <Footer />
                                </ThemeProvider>
                                <Analytics />
                        </body>
                </html>
        )
}
