import '@/app/globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import strings from '@/app/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Alzein",
  description: 'My personal website',
}

//Header uses a button, it has to "use client" and cant be in a server component that exports metadata
//Footer doesnt and can stay here as I dont need it elsewhere, you can move it out for better overview
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
      <Header />  
        {children}
        <footer className="bg-primary mt-auto">
          <p className="text-center text-sm text-text-muted py-4">
            © {strings.copyright}
          </p>
        </footer>
      </body>
    </html>
  )
}
