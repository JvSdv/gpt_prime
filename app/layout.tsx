import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'

import './globals.css'

export const metadata:Metadata = {
  title: 'Gpt Prime',
  description: 'Just for Primers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode 
}) {
  return (
    <ClerkProvider>
      <html lang="pt-br">
        <body >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
