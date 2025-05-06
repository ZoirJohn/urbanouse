import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header/Header'
import { ThemeProvider } from '@/components/themeProvider'

const manrope = Plus_Jakarta_Sans({
        variable: '--manrope',
        subsets: ['latin'],
        weight: ['400', '800', '600', '500', '400'],
})

export const metadata: Metadata = {
        title: 'NBNB',
}

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode
}>) {
        return (
                <html lang='en' suppressHydrationWarning>
                        <body className={`${manrope.className} antialiased font-sans`}>
                                <ThemeProvider defaultTheme='light' attribute='class' enableSystem disableTransitionOnChange>
                                        <Header />
                                        <main className='mt-17 max-md:mt-15'>{children}</main>
                                </ThemeProvider>
                        </body>
                </html>
        )
}
