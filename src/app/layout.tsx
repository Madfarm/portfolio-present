export const metadata = {
  title: 'Anthony Scott',
  description: 'Portfolio created by Anthony Scott',
}

import '../styles/globals.css'
import Nav from './(components)/Nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
