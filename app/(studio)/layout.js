import '../globals.css'
export const metadata = {
  title: 'Perfomance Detritus ',
  description: 'Performance Detritus',
}
export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
