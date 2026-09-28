import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'

const heebo = Heebo({ subsets: ['hebrew', 'latin'], variable: '--font-heebo' })

export const metadata: Metadata = {
  title: 'GEO - קידום במנועי AI - Netclick Digital',
  description: 'הלקוחות שלכם כבר שואלים את ChatGPT. האם אתם התשובה? מנהלים, אנליסטים ולקוחות שואלים את ChatGPT, Perplexity ו-Gemini לפני שהם מתקשרים. אנחנו דואגים שהשם שלכם יעלה בתשובה.',
  icons: {
    icon: 'https://morevision.ai/wp-content/uploads/2026/03/fav-icon-2-150x150.webp',
  },
  openGraph: {
    title: 'GEO - קידום במנועי AI | Netclick Digital',
    images: [
      {
        url: 'https://placehold.co/1200x630/1A2A66/FFFFFF.png?text=Netclick+Digital',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${heebo.variable} bg-mv-gray text-gray-800 antialiased`}>
        {children}
      </body>
    </html>
  )
}
