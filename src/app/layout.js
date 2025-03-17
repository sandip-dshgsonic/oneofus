// // app/layout.js
// import './globals.css'
// import { Inter } from 'next/font/google'
// import { Toaster } from 'react-hot-toast'


// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'OneOfUs - AI & VR Music Revolution',
//   description: 'Experience the future of music with OneOfUs, a cutting-edge AI and VR-powered platform that lets you play alongside legendary musicians, get real-time feedback, and perform in immersive virtual concerts.',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {children}
//         <Toaster position="top-center" />
//       </body>
//     </html>
//   )
// }


// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import ClientToaster from './components/ClientToaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OneOfUs - AI & VR Music Revolution',
  description: 'Experience the future of music with OneOfUs, a cutting-edge AI and VR-powered platform that lets you play alongside legendary musicians, get real-time feedback, and perform in immersive virtual concerts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ClientToaster />
      </body>
    </html>
  )
}