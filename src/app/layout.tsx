import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header/Header'

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
                <html lang='en'>
                        <body className={`${manrope.className} antialiased font-sans`}>
                                <Header />
                                <main className='mt-20'>{children}</main>
                        </body>
                </html>
        )
}
