import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-1 md:py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/One-of-us-color.svg"
                alt="OneOfUs"
                width={50}
                height={60}
                className="object-contain md:w-[70px] md:h-[80px]"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;



// // components/Header.jsx
// import Link from "next/link";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100 h-25 flex items-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="flex justify-between items-center h-full">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <Image
//                 src="/Images/One-of-us.svg" // Corrected path
//                 alt="Safety Bracelet"
//                 width={80} // Slightly increased size
//                 height={90}
//                 className="object-contain"
//               />
//             </Link>
//           </div>


//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
