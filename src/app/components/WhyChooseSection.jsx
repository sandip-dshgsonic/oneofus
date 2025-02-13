import React from 'react';
import Link from 'next/link';
import { 
  Music2, // AI musicians
  Mic2,   // Instrument integration
  ActivitySquare, // Real-time feedback
  Users,  // Social connectivity
  Layers, // Scalable expansions
  Star    // Live your dream
} from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <div className="bg-[#039FFF] py-12 px-4 md:px-6 lg:px-10">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-gray-300 text-lg sm:text-xl mb-3 font-semibold">
          Why are we excited about OneOfUs?
        </h2>
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] leading-tight text-[#2D3748] font-semibold max-w-3xl mx-auto">
          Work with AI & VR by Your Side, Every Step of the Way
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12">
        
        {/* Card 1 - AI Musicians */}
        <div className="p-5 sm:p-6 rounded-xl bg-white hover:shadow-lg transition">
          <Music2 className="w-8 h-8 text-[#6366F1] mb-3" />
          <h3 className="text-md font-semibold text-[#2D3748] mb-2">AI-generated legendary musicians</h3>
          <p className="text-gray-600 text-[13px]">Perform with avatars of iconic rock, pop, and jazz stars in a virtual concert.</p>
        </div>

        {/* Card 2 - Instrument Integration */}
        <div className="p-5 sm:p-6 rounded-xl bg-white hover:shadow-lg transition">
          <Mic2 className="w-8 h-8 text-[#6366F1] mb-3" />
          <h3 className="text-md font-semibold text-[#2D3748] mb-2">Real-instrument integration</h3>
          <p className="text-gray-600 text-[13px]">Connect personal instruments via an external sound card for enhanced realism.</p>
        </div>

        {/* Card 3 - Real-time Feedback */}
        <div className="p-5 sm:p-6 rounded-xl bg-white hover:shadow-lg transition">
          <ActivitySquare className="w-8 h-8 text-[#6366F1] mb-3" />
          <h3 className="text-md font-semibold text-[#2D3748] mb-2">Real-time feedback</h3>
          <p className="text-gray-600 text-[13px]">AI analyzes performance accuracy, rhythm, and speed to provide feedback.</p>
        </div>

        {/* Card 4 - Social Connectivity */}
        <div className="p-5 sm:p-6 rounded-xl bg-white hover:shadow-lg transition">
          <Users className="w-8 h-8 text-[#6366F1] mb-3" />
          <h3 className="text-md font-semibold text-[#2D3748] mb-2">Social connectivity</h3>
          <p className="text-gray-600 text-[13px]">Engage in collaborative virtual performances and interact with audiences.</p>
        </div>

        {/* Card 5 - Scalable Expansions */}
        <div className="p-5 sm:p-6 rounded-xl bg-white hover:shadow-lg transition">
          <Layers className="w-8 h-8 text-[#6366F1] mb-3" />
          <h3 className="text-md font-semibold text-[#2D3748] mb-2">Scalable expansions</h3>
          <p className="text-gray-600 text-[13px]">Future updates will introduce more genres, AI musicians, and multiplayer.</p>
        </div>

        {/* Card 6 - Live Your Dream */}
        <div className="p-5 sm:p-6 rounded-xl bg-white hover:shadow-lg transition">
          <Star className="w-8 h-8 text-[#6366F1] mb-3" />
          <h3 className="text-md font-semibold text-[#2D3748] mb-2">Live your dream</h3>
          <p className="text-gray-600 text-[13px]">Play like and with your idols on the big stage using this app.</p>
        </div>

      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="w-full sm:w-[350px] md:w-[450px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all flex items-center justify-center gap-4">
          <span>→</span>
          Get on the waitlist for this exciting app
        </button>
      </div>

    </div>
  );
};

export default WhyChooseSection;





// import React from 'react';
// // import { Clock, ListTodo, Brain, Rocket, LayoutTemplate, CheckSquare } from 'lucide-react';
// import Image from 'next/image';
// import { 
//   Music2, // For AI musicians
//   Mic2,   // For instrument integration
//   ActivitySquare, // For real-time feedback
//   Users,  // For social connectivity
//   Layers, // For scalable expansions
//   Star    // For living your dream
// } from 'lucide-react';

// const WhyChooseSection = () => {
//   return (
//     // <div className="w-full max-w-5xl mx-auto px-2 py-12">

// <div className="bg-[#039FFF] py-12 px-2">
//       {/* Header Section */}
//       <div className="text-center mb-16">
//         <h2 className="text-gray-300 text-xl mb-4 font-semibold">Why are we excited about OneOfUs?</h2>
//         <h1 className="text-[32px] leading-tight text-[#2D3748] font-semibold max-w-3xl mx-auto">
//           Work with AI & VR by Your Side, Every Step of the Way
//         </h1>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//       {/* Card 1 - AI Musicians */}
//       <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//         <div className="mb-4">
//           <Music2 className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
//         </div>
//         <h3 className="text-md font-semibold text-[#2D3748] mb-3">
//           AI-generated legendary musicians
//         </h3>
//         <p className="text-gray-600 leading-relaxed text-[13px]">
//         Users can perform with avatars of iconic rock, pop, and jazz stars in a virtual concert environment.

//         </p>
//       </div>

//       {/* Card 2 - Instrument Integration */}
//       <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//         <div className="mb-4">
//           <Mic2 className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
//         </div>
//         <h3 className="text-md font-semibold text-[#2D3748] mb-3">
//           Real-instrument integration
//         </h3>
//         <p className="text-gray-600 leading-relaxed text-[13px]">
//         Users can connect their personal instruments via an external sound card, enhancing realism and interactivity.

//         </p>
//       </div>

//       {/* Card 3 - Real-time Feedback */}
//       <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//         <div className="mb-4">
//           <ActivitySquare className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
//         </div>
//         <h3 className="text-md font-semibold text-[#2D3748] mb-3">
//           Real-time feedback
//         </h3>
//         <p className="text-gray-600 leading-relaxed text-[13px]">
//         AI analyzes performance in terms of accuracy, rhythm, and speed, providing personalized improvement feedback.

//         </p>
//       </div>

//       {/* Card 4 - Social Connectivity */}
//       <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//         <div className="mb-4">
//           <Users className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
//         </div>
//         <h3 className="text-md font-semibold text-[#2D3748] mb-3">
//           Social connectivity
//         </h3>
//         <p className="text-gray-600 leading-relaxed text-[13px]">
//         Users can engage in collaborative virtual performances with other musicians and interact with virtual audiences.

//         </p>
//       </div>

//       {/* Card 5 - Scalable Expansions */}
//       <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//         <div className="mb-4">
//           <Layers className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
//         </div>
//         <h3 className="text-md font-semibold text-[#2D3748] mb-3">
//           Scalable expansions
//         </h3>
//         <p className="text-gray-600 leading-relaxed text-[13px]">
//         Future iterations will offer more music genres, additional AI-generated musicians, and multiplayer capabilities.
//         </p>
//       </div>

//       {/* Card 6 - Live Your Dream */}
//       <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//         <div className="mb-4">
//           <Star className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
//         </div>
//         <h3 className="text-md font-semibold text-[#2D3748] mb-3">
//           Live your dream
//         </h3>
//         <p className="text-gray-600 leading-relaxed text-[13px]">
//         Make your dream of playing like and with your idols on the big stage using this app.
//         </p>
//       </div>
//     </div>

//       {/* CTA Button */}
//       {/* CTA Button */}
// <div className="flex justify-center mt-10">
// <button className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0">
//               <span>→</span>
//               Get on the waitlist for this exciting app
//             </button>
// </div>


//     </div>
//   );
// };

// export default WhyChooseSection;