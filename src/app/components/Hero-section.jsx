// import Image from "next/image";
// import { Play, Mic, Trash2 } from "lucide-react";

// const Hero = () => {
//   return (
//     <div className="pt-16 md:pt-20 pb-8 md:pb-12 mt-9">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8 lg:mb-16">
//           {/* Left Column */}
//           <div className="text-center lg:text-left">
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
//               Transform The Music Industry By Integrating VR And
//               <span className="text-purple-600">
//                 {" "}
//                 AI Into An Innovative Music Platform.
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
//               Interactive Effective Learn Perform
//             </p>

//             <p className="text-sm md:text-base text-gray-600 mb-4">
//               Play alongside iconic stars from the past and present in a virtual
//               setting, receiving real-time feedback and enjoying social
//               interactions that enhance musical skill development.
//             </p>

//             <button className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0">
//               <span>→</span>
//               Get on the waitlist for this exciting app
//             </button>
//           </div>

//           {/* Right Column */}
//           <div className="relative flex justify-center w-full max-w-sm mx-auto lg:max-w-none">
//             <img
//               src="/Images/guitarist_static.gif" // Replace with your actual image path
//               alt="Demo"
//               className="w-full h-auto object-cover rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Platform Logos */}
//         <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-12 md:mt-20">
//           {[
//             "sp-medium.svg",
//             "sp-ih.svg",
//             "sp-foundr.svg",
//             "sp-scoopit.svg",
//           ].map((logo) => (
//             <Image
//               key={logo}
//               src={`/Images/${logo}`}
//               alt={logo.split(".")[0]}
//               width={120}
//               height={40}
//               className="opacity-60 hover:opacity-80 transition-opacity"
//             />
//           ))}
//         </div>

//         {/* Bouncing Arrow */}
//         <div className="flex justify-center mt-8 md:mt-12">
//           <div className="animate-bounce">
//             <svg
//               className="w-8 h-8 md:w-12 md:h-12 text-gray-400"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M19 14l-8 8m0 0l-8-8m8 8"></path>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Image from "next/image";
import { Play, Mic, Trash2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-16 md:pt-20 pb-8 md:pb-12 mt-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8 lg:mb-16">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Transform The Music Industry By Integrating VR And
              <span className="text-purple-600">
                {" "}
                AI Into An Innovative Music Platform.
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Interactive Effective Learn Perform
            </p>

            <p className="text-sm md:text-base text-gray-600 mb-4">
              Play alongside iconic stars from the past and present in a virtual
              setting, receiving real-time feedback and enjoying social
              interactions that enhance musical skill development.
            </p>

            <button className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0">
              <span>→</span>
              Get on the waitlist for this exciting app
            </button>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center w-full max-w-sm mx-auto lg:max-w-none">
            <img
              src="/Images/guitarist_static.gif" // Replace with your actual image path
              alt="Demo"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Platform Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-12 md:mt-20">
          {[
            "sp-medium.svg",
            "sp-ih.svg",
            "sp-foundr.svg",
            "sp-scoopit.svg",
          ].map((logo) => (
            <Image
              key={logo}
              src={`/Images/${logo}`}
              alt={logo.split(".")[0]}
              width={120}
              height={40}
              className="opacity-60 hover:opacity-80 transition-opacity"
            />
          ))}
        </div>

        {/* Bouncing Arrow */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 md:w-12 md:h-12 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-8 8m0 0l-8-8m8 8"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
