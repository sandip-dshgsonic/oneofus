// import Link from "next/link";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-1 md:py-2">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/Images/One-of-us-color.svg"
//                 alt="OneOfUs"
//                 width={70}
//                 height={80}
//                 className="object-contain md:w-[70px] md:h-[80px]"
//               />
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button className="p-2 text-gray-600 hover:text-gray-900">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#0378c0] z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-1 md:py-1">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src="/Images/One-of-us-color.svg"
                alt="OneOfUs"
                width={80}
                height={80}
                className="object-contain md:w-[95px] md:h-[105px]"
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 text-white hover:bg-[#0360a0] rounded-lg transition-colors duration-300"
              aria-label="Menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16m-7 6h7" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;