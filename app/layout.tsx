import { ClerkProvider } from '@clerk/nextjs'
import { Metadata } from 'next'
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'

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
      <html lang="pt-br" suppressHydrationWarning>
        <body >
          <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
