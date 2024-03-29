import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import Navigation from './components/navigation'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pondero',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <Navigation></Navigation>
          {children}
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  )
}
