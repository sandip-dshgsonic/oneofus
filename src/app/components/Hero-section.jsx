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

            {/* <div className="flex items-center justify-center lg:justify-start gap-2 mt-4">
              <span className="text-sm md:text-base text-gray-500">
                Trusted by +10,000 users
              </span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div> */}
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
          {['sp-medium.svg', 'sp-ih.svg', 'sp-foundr.svg', 'sp-scoopit.svg'].map((logo) => (
            <Image
              key={logo}
              src={`/Images/${logo}`}
              alt={logo.split('.')[0]}
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

// import Image from "next/image";
// import { Play, Mic, Trash2 } from "lucide-react";

// const Hero = () => {
//   const languages = [
//     { code: "us", name: "English" },
//     { code: "es", name: "Spanish" },
//     { code: "fr", name: "French" },
//     { code: "de", name: "German" },
//     { code: "nl", name: "Dutch" },
//     { code: "pt", name: "Portuguese" },
//   ];

//   return (
//     <div className="pt-20 pb-12 ">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center mb-16">
//           {/* Left Column */}
//           <div className="text-center lg:text-left">
//             {/* Product Badge */}
//             <div className="flex justify-center lg:justify-center mb-8"></div>

//             {/* Main Content */}
//             <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
//               Transform The Music Industry By Integrating VR And
//               {/* <br /> */}
//               <span className="text-purple-600">
//                 {" "}
//                 AI Into An Innovative Music Platform.
//               </span>
//             </h1>
//             <p className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
//               Interactive Effective Learn Perform
//             </p>

//             <p className="max-w-2xl text-gray-600 mb-4">
//               Play alongside iconic stars from the past and present in a virtual
//               setting, receiving real-time feedback and enjoying social
//               interactions that enhance musical skill development and create
//               unforgettable music experiences.
//             </p>
//             <p className="text-gray-400 mb-3 font-semibold">
//               A groundbreaking music experience.
//             </p>

//             <button className="w-[200px] xl:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-10">
//               <span>→</span>
//               Get on the waitlist for this exiting app
//             </button>

//             {/* Trust Badge */}
//             <div className="flex items-center justify-center lg:justify-center gap-1 mb-8 mt-5">
//               <span className="text-gray-500">
//                 Trusted by +10,000 happy users
//               </span>
//               <div className="flex">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <svg
//                     key={star}
//                     className="w-5 h-5 text-yellow-400"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="relative flex justify-center lg:justify-center">
//             <div className="bg-white rounded-lg shadow-lg p-6 w-[390px] h-[500px] flex flex-col">
//               <h2 className="text-lg font-semibold mb-4 flex justify-center items-center">
//                 Interactive demo
//               </h2>

//               {/* <div className="bg-[#F8F9FE] rounded-lg p-4 mb-6 flex-grow">
//                 <div className="h-[2px] w-full bg-[#0066FF] my-12"></div>
//               </div> */}

//               <div className="rounded-lg p-4 mb-6 flex-grow">
//                 {/* Image added here */}
//                 <img
//                   src="/Images/download.png"
//                   alt="Descriptive Text"
//                   className="w-full h-auto object-cover rounded-lg"
//                 />
//               </div>

//               <div className="text-center mb-6">
//                 <div className="text-sm text-gray-400">Limit: 01:00</div>
//                 <div className="text-4xl font-mono">00:00</div>
//               </div>

//               <div className="flex justify-center items-center gap-4 mb-6">
//                 <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8EAFD] hover:bg-[#D8DBFC] transition-colors">
//                   <Play className="w-6 h-6 text-[#6366F1]" />
//                 </button>
//                 <button className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E225AA] hover:bg-[#D11A9D] transition-colors relative group">
//                   <div className="absolute inset-0 rounded-full bg-[#E225AA] animate-ping opacity-75 group-hover:opacity-100"></div>
//                   <div className="absolute inset-0 rounded-full bg-[#E225AA] animate-pulse"></div>
//                   <Mic className="w-8 h-8 text-white relative z-10" />
//                 </button>
//                 <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8EAFD] hover:bg-[#D8DBFC] transition-colors">
//                   <Trash2 className="w-6 h-6 text-[#6366F1]" />
//                 </button>
//               </div>

//               <button className="w-10px bg-[#21d4de] text-[#6366F1] py-2 rounded-lg text-sm hover:bg-[#D8DBFC] transition-colors flex items-center justify-center gap-2">
//                 <span>Continue</span>
//                 <span className="text-lg">→</span>
//               </button>

//               <p className="text-center text-sm text-gray-400 mt-4">
//                 Try it out! Click the <span className="font-normal">🎤</span> to
//                 start recording
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Platform Logos - Centered at Bottom */}
//         <div className="flex justify-center items-center gap-12 mt-20">
//           <Image
//             src="/Images/sp-medium.svg"
//             alt="Medium"
//             width={180}
//             height={80}
//             className="opacity-60 hover:opacity-80 transition-opacity"
//           />
//           <Image
//             src="/Images/sp-ih.svg"
//             alt="Indie Hackers"
//             width={180}
//             height={80}
//             className="opacity-60 hover:opacity-80 transition-opacity"
//           />
//           <Image
//             src="/Images/sp-foundr.svg"
//             alt="Foundr"
//             width={180}
//             height={80}
//             className="opacity-60 hover:opacity-80 transition-opacity"
//           />
//           <Image
//             src="/Images/sp-scoopit.svg"
//             alt="Scoop.it"
//             width={180}
//             height={80}
//             className="opacity-60 hover:opacity-80 transition-opacity"
//           />
//         </div>

//         {/* Bouncing Arrow */}
//         <div className="flex justify-center mt-12">
//           <div className="animate-bounce">
//             <svg
//               className="w-12 h-12 text-gray-400 font-bold"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M19 14l-8 8m0 0l-8-8m8 "></path>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
