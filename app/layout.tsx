import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MLK Crypto Coin',
  description: 'Empowering change through blockchain, inspired by Martin Luther King Jr. day on January 20, 2025.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
