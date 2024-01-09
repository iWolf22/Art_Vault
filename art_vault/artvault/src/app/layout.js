import './globals.css'
import { ReduxProvider } from './_redux/provider'
import { league_gothic, open_sans } from '@/_sharedComponents/Font/Font'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Logout from './logout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
    const session = await getServerSession();
    return (
      <html lang="en" className={`${league_gothic.variable} font-mono, ${open_sans.variable} font-sans`}>
        <body className={inter.className}>
          <nav>
            {!!session && <Logout />}
          </nav>
          {children}</body>
      </html>
    )
  }
