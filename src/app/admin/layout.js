// "use client";

// import { Inter } from 'next/font/google';
// import { AuthProvider } from '../utils/auth';
// import { Toaster } from 'react-hot-toast';

// const inter = Inter({ subsets: ['latin'] });

// export default function AdminLayout({ children }) {
//   return (
//     <div className={inter.className}>
//       <AuthProvider>
//         {children}
//         <Toaster position="top-right" />
//       </AuthProvider>
//     </div>
//   );
// }


// src/app/admin/layout.js
"use client";

import { AuthProvider } from '../utils/auth';

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}