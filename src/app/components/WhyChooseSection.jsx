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
import { Clock, ListTodo, Brain, Rocket, LayoutTemplate, CheckSquare } from 'lucide-react';
import Image from 'next/image';

const WhyChooseSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-2 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-gray-300 text-xl mb-4 font-semibold">Why Choose TalkNotes?</h2>
        <h1 className="text-[32px] leading-tight text-[#2D3748] font-semibold max-w-3xl mx-auto">
          Work with AI by Your Side, Every Step of the Way
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {/* Card 1 */}
        <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <Clock className="w-8 h-8 text-[#6366F1]" />
          </div>
          <h3 className="text-md font-semibold text-[#2D3748] mb-3">Save Time</h3>
          <p className="text-gray-600 leading-relaxed text-[13px]">
            Focus on what matters. Let AI handle the busywork of organizing your notes so you can reclaim your time and dedicate it to high-impact tasks.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <ListTodo className="w-8 h-8 text-[#6366F1]" />
          </div>
          <h3 className="text-md font-semibold text-[#2D3748] mb-3">Get More Done</h3>
          <p className="text-gray-600 leading-relaxed text-[13px]">
            Boost your productivity. Capture thoughts quickly, stay on top of your workload, and move through tasks with greater efficiency.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <Brain className="w-8 h-8 text-[#6366F1]" />
          </div>
          <h3 className="text-md font-semibold text-[#2D3748] mb-3">Work Smart, Not Hard</h3>
          <p className="text-gray-600 leading-relaxed text-[13px]">
            Leverage AI for effortless organization. TalkNotes makes it easy to stay productive and efficient without the hassle of manual note-taking.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <Rocket className="w-8 h-8 text-[#6366F1]" />
          </div>
          <h3 className="text-md font-semibold text-[#2D3748] mb-3">Get Ahead Instead of Left Behind</h3>
          <p className="text-gray-600 leading-relaxed text-[13px]">
            Stay competitive in an AI-driven world. Using AI isn't optional — it's essential. Keep pace with modern tools to maintain your edge.
          </p>
        </div>

        {/* Card 5 */}
        <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <LayoutTemplate className="w-8 h-8 text-[#6366F1]" />
          </div>
          <h3 className="text-md font-semibold text-[#2D3748] mb-3">Stay Organized</h3>
          <p className="text-gray-600 leading-relaxed text-[13px]">
            Turn chaos into clarity. With customizable templates and automatic structuring, TalkNotes ensures that every thought and idea is right where you need it.
          </p>
        </div>

        {/* Card 6 */}
        <div className="p-6 rounded-xl bg-white hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <CheckSquare className="w-8 h-8 text-[#6366F1]" />
          </div>
          <h3 className="text-md font-semibold text-[#2D3748] mb-3">Never Miss a Thing</h3>
          <p className="text-gray-600 leading-relaxed text-[13px]">
            Capture every idea, every detail. TalkNotes helps you avoid information overload by keeping all your thoughts organized and accessible whenever you need them.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-20">
        <button className="bg-[#E225AA] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#D11A9D] transition-colors">
          Try TalkNotes free for 7 days →
        </button>
      </div>

      {/* Testimonial Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-3xl mx-auto text-left space-y-4 md:space-y-0 md:space-x-6">
  {/* Image Section */}
  <div className="relative w-[68px] h-[68px] rounded-full overflow-hidden flex-shrink-0">
    <Image
      src="/Images/pexels-photo-248159.jpeg"
      alt="User Avatar"
      fill
      className="object-cover"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col">
    <p className="text-[#4A5568] text-md mb-2 leading-relaxed text-align-left">
      "This app has great practical use. Whether you're brainstorming ideas for a book, processing your YouTube video, podcast, or TikTok outloud, this captured all of it and puts it into whatever format you want. SUPER clean and easy to use. The developer has been a great innovator & we're grateful for this service."
    </p>
    <div className="text-gray-400">
      - Rosales, review on Apple App Store
    </div>
  </div>
</div>

    </div>
  );
};

export default WhyChooseSection;