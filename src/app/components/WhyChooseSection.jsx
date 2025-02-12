// import React from 'react';
// import { Clock, ListTodo, Brain, Rocket, LayoutTemplate, CheckSquare } from 'lucide-react';

// const WhyChooseSection = () => {
//   return (
//     <div className="w-full max-w-5xl mx-auto px-2 py-12">
//       {/* Header Section */}
//       <div className="text-center mb-16">
//         <h2 className="text-gray-300 text-xl mb-4 font-semibold">Why Choose TalkNotes?</h2>
//         <h1 className="text-[32px] leading-tight text-[#2D3748] font-semibold max-w-3xl mx-auto">
//           Work with AI by Your Side, Every Step of the Way
//         </h1>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Card 1 */}
//         <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//           <div className="mb-4">
//             <Clock className="w-8 h-8 text-[#6366F1]" />
//           </div>
//           <h3 className="text-md font-semibold text-[#2D3748] mb-3">Save Time</h3>
//           <p className="text-gray-600 leading-relaxed text-[13px]">
//             Focus on what matters. Let AI handle the busywork of organizing your notes so you can reclaim your time and dedicate it to high-impact tasks.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//           <div className="mb-4">
//             <ListTodo className="w-8 h-8 text-[#6366F1]" />
//           </div>
//           <h3 className="text-md font-semibold text-[#2D3748] mb-3">Get More Done</h3>
//           <p className="text-gray-600 leading-relaxed text-[13px]">
//             Boost your productivity. Capture thoughts quickly, stay on top of your workload, and move through tasks with greater efficiency.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//           <div className="mb-4">
//             <Brain className="w-8 h-8 text-[#6366F1]" />
//           </div>
//           <h3 className="text-md font-semibold text-[#2D3748] mb-3">Work Smart, Not Hard</h3>
//           <p className="text-gray-600 leading-relaxed text-[13px]">
//             Leverage AI for effortless organization. TalkNotes makes it easy to stay productive and efficient without the hassle of manual note-taking.
//           </p>
//         </div>

//         {/* Card 4 */}
//         <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//           <div className="mb-4">
//             <Rocket className="w-8 h-8 text-[#6366F1]" />
//           </div>
//           <h3 className="text-md font-semibold text-[#2D3748] mb-3">Get Ahead Instead of Left Behind</h3>
//           <p className="text-gray-600 leading-relaxed text-[13px]">
//             Stay competitive in an AI-driven world. Using AI isn't optional — it's essential. Keep pace with modern tools to maintain your edge.
//           </p>
//         </div>

//         {/* Card 5 */}
//         <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//           <div className="mb-4">
//             <LayoutTemplate className="w-8 h-8 text-[#6366F1]" />
//           </div>
//           <h3 className="text-md font-semibold text-[#2D3748] mb-3">Stay Organized</h3>
//           <p className="text-gray-600 leading-relaxed text-[13px]">
//             Turn chaos into clarity. With customizable templates and automatic structuring, TalkNotes ensures that every thought and idea is right where you need it.
//           </p>
//         </div>

//         {/* Card 6 */}
//         <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
//           <div className="mb-4">
//             <CheckSquare className="w-8 h-8 text-[#6366F1]" />
//           </div>
//           <h3 className="text-md font-semibold text-[#2D3748] mb-3">Never Miss a Thing</h3>
//           <p className="text-gray-600 leading-relaxed text-[13px]">
//             Capture every idea, every detail. TalkNotes helps you avoid information overload by keeping all your thoughts organized and accessible whenever you need them.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseSection;




import React from 'react';
// import { Clock, ListTodo, Brain, Rocket, LayoutTemplate, CheckSquare } from 'lucide-react';
import Image from 'next/image';
import { 
  Music2, // For AI musicians
  Mic2,   // For instrument integration
  ActivitySquare, // For real-time feedback
  Users,  // For social connectivity
  Layers, // For scalable expansions
  Star    // For living your dream
} from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-2 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-gray-300 text-xl mb-4 font-semibold">Why are we excited about OneOfUs?</h2>
        <h1 className="text-[32px] leading-tight text-[#2D3748] font-semibold max-w-3xl mx-auto">
          Work with AI & VR by Your Side, Every Step of the Way
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {/* Card 1 - AI Musicians */}
      <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <Music2 className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
        </div>
        <h3 className="text-md font-semibold text-[#2D3748] mb-3">
          AI-generated legendary musicians
        </h3>
        <p className="text-gray-600 leading-relaxed text-[13px]">
        Users can perform with avatars of iconic rock, pop, and jazz stars in a virtual concert environment.

        </p>
      </div>

      {/* Card 2 - Instrument Integration */}
      <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <Mic2 className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
        </div>
        <h3 className="text-md font-semibold text-[#2D3748] mb-3">
          Real-instrument integration
        </h3>
        <p className="text-gray-600 leading-relaxed text-[13px]">
        Users can connect their personal instruments via an external sound card, enhancing realism and interactivity.

        </p>
      </div>

      {/* Card 3 - Real-time Feedback */}
      <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <ActivitySquare className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
        </div>
        <h3 className="text-md font-semibold text-[#2D3748] mb-3">
          Real-time feedback
        </h3>
        <p className="text-gray-600 leading-relaxed text-[13px]">
        AI analyzes performance in terms of accuracy, rhythm, and speed, providing personalized improvement feedback.

        </p>
      </div>

      {/* Card 4 - Social Connectivity */}
      <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <Users className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
        </div>
        <h3 className="text-md font-semibold text-[#2D3748] mb-3">
          Social connectivity
        </h3>
        <p className="text-gray-600 leading-relaxed text-[13px]">
        Users can engage in collaborative virtual performances with other musicians and interact with virtual audiences.

        </p>
      </div>

      {/* Card 5 - Scalable Expansions */}
      <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <Layers className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
        </div>
        <h3 className="text-md font-semibold text-[#2D3748] mb-3">
          Scalable expansions
        </h3>
        <p className="text-gray-600 leading-relaxed text-[13px]">
        Future iterations will offer more music genres, additional AI-generated musicians, and multiplayer capabilities.
        </p>
      </div>

      {/* Card 6 - Live Your Dream */}
      <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <Star className="w-8 h-8 text-[#6366F1]" aria-hidden="true" />
        </div>
        <h3 className="text-md font-semibold text-[#2D3748] mb-3">
          Live your dream
        </h3>
        <p className="text-gray-600 leading-relaxed text-[13px]">
        Make your dream of playing like and with your idols on the big stage using this app.
        </p>
      </div>
    </div>

      {/* CTA Button */}
      {/* CTA Button */}
<div className="flex justify-center mt-10">
<button className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0">
              <span>→</span>
              Get on the waitlist for this exciting app
            </button>
</div>


    </div>
  );
};

export default WhyChooseSection;