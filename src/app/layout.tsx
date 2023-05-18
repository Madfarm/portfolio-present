export const metadata = {
  title: 'Anthony Scott',
  description: 'Portfolio created by Anthony Scott',
}

import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
