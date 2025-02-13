// import React from 'react';
// import Link from 'next/link';
// import { 
//   Music2, 
//   Mic2,   
//   ActivitySquare, 
//   Users,  
//   Layers, 
//   Star    
// } from 'lucide-react';

// const WhyChooseSection = () => {
//   return (
//     <div className="relative pattern-background">
//       <div className="pattern-overlay"></div>
//       <div className="relative z-10 py-12 px-4 md:px-6 lg:px-10">
        
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-gray-800 text-lg sm:text-xl mb-3 font-semibold">
//             Why are we excited about OneOfUs?
//           </h2>
//           <h1 className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight text-[#2D3748] font-semibold max-w-3xl mx-auto">
//             Work with AI & VR by Your Side, Every Step of the Way
//           </h1>
//         </div>

//         {/* Features Grid - Modified to 2 columns */}
//         <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          
//           {/* Card 1 - AI Musicians */}
//           <div className="p-4 sm:p-5 rounded-xl bg-white/60 hover:bg-white/70 transition-all duration-300">
//             <Music2 className="w-7 h-7 text-[#6366F1] mb-2" />
//             <h3 className="text-md font-semibold text-[#2D3748] mb-2">AI-generated legendary musicians</h3>
//             <p className="text-gray-700 text-[13px]">Perform with avatars of iconic rock, pop, and jazz stars in a virtual concert.</p>
//           </div>

//           {/* Card 2 - Instrument Integration */}
//           <div className="p-4 sm:p-5 rounded-xl bg-white/60 hover:bg-white/70 transition-all duration-300">
//             <Mic2 className="w-7 h-7 text-[#6366F1] mb-2" />
//             <h3 className="text-md font-semibold text-[#2D3748] mb-2">Real-instrument integration</h3>
//             <p className="text-gray-700 text-[13px]">Connect personal instruments via an external sound card for enhanced realism.</p>
//           </div>

//           {/* Card 3 - Real-time Feedback */}
//           <div className="p-4 sm:p-5 rounded-xl bg-white/60 hover:bg-white/70 transition-all duration-300">
//             <ActivitySquare className="w-7 h-7 text-[#6366F1] mb-2" />
//             <h3 className="text-md font-semibold text-[#2D3748] mb-2">Real-time feedback</h3>
//             <p className="text-gray-700 text-[13px]">AI analyzes performance accuracy, rhythm, and speed to provide feedback.</p>
//           </div>

//           {/* Card 4 - Social Connectivity */}
//           <div className="p-4 sm:p-5 rounded-xl bg-white/60 hover:bg-white/70 transition-all duration-300">
//             <Users className="w-7 h-7 text-[#6366F1] mb-2" />
//             <h3 className="text-md font-semibold text-[#2D3748] mb-2">Social connectivity</h3>
//             <p className="text-gray-700 text-[13px]">Engage in collaborative virtual performances and interact with audiences.</p>
//           </div>

//           {/* Card 5 - Scalable Expansions */}
//           <div className="p-4 sm:p-5 rounded-xl bg-white/60 hover:bg-white/70 transition-all duration-300">
//             <Layers className="w-7 h-7 text-[#6366F1] mb-2" />
//             <h3 className="text-md font-semibold text-[#2D3748] mb-2">Scalable expansions</h3>
//             <p className="text-gray-700 text-[13px]">Future updates will introduce more genres, AI musicians, and multiplayer.</p>
//           </div>

//           {/* Card 6 - Live Your Dream */}
//           <div className="p-4 sm:p-5 rounded-xl bg-white/60 hover:bg-white/70 transition-all duration-300">
//             <Star className="w-7 h-7 text-[#6366F1] mb-2" />
//             <h3 className="text-md font-semibold text-[#2D3748] mb-2">Live your dream</h3>
//             <p className="text-gray-700 text-[13px]">Play like and with your idols on the big stage using this app.</p>
//           </div>

//         </div>

//         {/* CTA Button */}
//         <div className="flex justify-center">
//           <button className="w-full sm:w-[350px] md:w-[450px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all flex items-center justify-center gap-4 shadow-lg">
//             <span>→</span>
//             Get on the waitlist for this exciting app
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default WhyChooseSection;



import React from 'react';
import Link from 'next/link';
import { 
  Music2, 
  Mic2,   
  ActivitySquare, 
  Users,  
  Layers, 
  Star    
} from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <div className="relative pattern-background">
      <div className="pattern-overlay"></div>
      <div className="relative z-10 py-12 px-4 md:px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-gray-800 text-lg sm:text-xl mb-3 font-semibold">
            Why are we excited about OneOfUs?
          </h2>
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight text-[#2D3748] font-semibold max-w-3xl mx-auto">
            Work with AI & VR by Your Side, Every Step of the Way
          </h1>
        </div>

        {/* Features Grid - Modified to 2 columns */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          
          {/* Cards */}
          {[ 
            { Icon: Music2, title: "AI-generated legendary musicians", desc: "Perform with avatars of iconic rock, pop, and jazz stars in a virtual concert." },
            { Icon: Mic2, title: "Real-instrument integration", desc: "Connect personal instruments via an external sound card for enhanced realism." },
            { Icon: ActivitySquare, title: "Real-time feedback", desc: "AI analyzes performance accuracy, rhythm, and speed to provide feedback." },
            { Icon: Users, title: "Social connectivity", desc: "Engage in collaborative virtual performances and interact with audiences." },
            { Icon: Layers, title: "Scalable expansions", desc: "Future updates will introduce more genres, AI musicians, and multiplayer." },
            { Icon: Star, title: "Live your dream", desc: "Play like and with your idols on the big stage using this app." }
          ].map(({ Icon, title, desc }, index) => (
            <div key={index} className="p-4 sm:p-5 rounded-xl bg-white hover:bg-white/70 transition-all duration-300 backdrop-blur-sm">
              <Icon className="w-7 h-7 text-[#6366F1] mb-2" />
              <h3 className="text-md font-semibold text-[#2D3748] mb-2">{title}</h3>
              <p className="text-gray-700 text-[13px]">{desc}</p>
            </div>
          ))}

        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="w-full sm:w-[350px] md:w-[450px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all flex items-center justify-center gap-4 shadow-lg">
            <span>→</span>
            Get on the waitlist for this exciting app
          </button>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseSection;
