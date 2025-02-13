// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { Facebook, Twitter, Youtube, Music, Mail } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-[#0F172A] text-gray-400 py-16">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        
//         {/* Logo and Company Info */}
//         <div className="col-span-1">
//           <Link href="/" className="flex items-center gap-2 mb-4">
//             <img src="/Images/One-of-us-color.svg" alt="OneOfUs" className="h-28" />
//           </Link>
//           <p className="text-xs">© 2025 All rights reserved.</p>
//         </div>

//         {/* Contact Us Section */}
//         <div className="col-span-1">
//           <h3 className="text-lg text-white font-semibold mb-3">Contact Us</h3>
//           <Link href="mailto:office@oneofusdaretodream.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
//             <Mail size={18} />
//             office@oneofusdaretodream.com
//           </Link>
//         </div>


//       </div>
//     </footer>
//   );
// };

// export default Footer;


'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Logo and Company Info */}
        <div className="col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <img src="/Images/One-of-us-color.svg" alt="OneOfUs" className="h-28" />
          </Link>
          <p className="text-xs">© 2025 All rights reserved.</p>
        </div>

        {/* Empty Columns to Push Contact Us to the Right */}
        <div className="col-span-3"></div>

        {/* Contact Us Section */}
        <div className="col-span-1 text-left">
          <h3 className="text-lg text-white font-semibold mb-3 text-left">Contact Us</h3>
          <Link href="mailto:office@oneofusdaretodream.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <Mail size={18} />
            office@oneofusdaretodream.com
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
