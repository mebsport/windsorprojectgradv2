import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Windsor Project Graduation',
  description:
    "Windsor High School's Project Graduation for the class of 2024 provides a fun and safe enviroments for graudates to celebrate after the big day.",
    icons: {
      icon: ['/favicon.ico?v=4'],
      apple: ['/apple-touch-icon.png?v=4'],
      shortcut: ['/apple-touch-icon.png'],
    },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  )
}
