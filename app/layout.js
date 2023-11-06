import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'


export const metadata = {
  title: 'Travel',
  description: 'Travel App for Camping',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
