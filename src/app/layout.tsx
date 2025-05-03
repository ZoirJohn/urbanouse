import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Header } from '@/ui/header/Header'

const manrope = Manrope({
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
                        <body className={`${manrope.className} antialiased`}>
                                <Header />
                                <main>{children}</main>
                        </body>
                </html>
        )
}
