import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import { ThemeProvider } from '@/components/themeProvider'
import Footer from '@/components/footer/Footer'
import { Faq } from '@/components/faq/Faq'
import { createClient } from '@/utils/supabase/server'

const manrope = Plus_Jakarta_Sans({
        variable: '--manrope',
        subsets: ['latin'],
        weight: ['400', '700', '800', '600', '500', '400'],
})

export const metadata: Metadata = {
        title: 'NBNB',
}

export default async function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode
}>) {
        const { data } = await (await createClient()).auth.getUser()
        console.log(data)
        return (
                <html lang='en' suppressHydrationWarning>
                        <body className={`${manrope.className} antialiased font-sans flex flex-col min-h-full`}>
                                <ThemeProvider defaultTheme='light' attribute='class' enableSystem disableTransitionOnChange>
                                        <Header user={data.user?.user_metadata.fullName} />
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
