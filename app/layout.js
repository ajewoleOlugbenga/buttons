import './globals.css'

export const metadata = {
  title: 'Buttons',
  description: 'Reuseable Buttons Component',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
