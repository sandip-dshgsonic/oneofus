// import React from "react";
// import Image from "next/image";
// import {
//   Brain,
//   AudioWaveform, // Correct icon name from lucide-react
//   Glasses,
//   Users,
// } from "lucide-react";

// const UseCasesPage = () => {
//   const useCases = [
//     {
//       Icon: Brain,
//       title: "Advanced AI Algorithms",
//       description:
//         "The software uses AI to analyze user performance, detect discrepancies, and provide constructive feedback. The AI is trained to recognize different musical patterns, chords, and rhythms, offering tailored recommendations to improve user technique.",
//       bgColor: "bg-purple-50",
//       iconColor: "text-purple-600",
//     },
//     {
//       Icon: AudioWaveform, // Using the correct icon component
//       title: "Real-Time Audio Analysis",
//       description:
//         "The software’s core AI engine can translate sound waves from real instruments into digital signals, ensuring low latency and accurate feedback.",
//       bgColor: "bg-blue-50",
//       iconColor: "text-blue-600",
//     },
//     {
//       Icon: Glasses,
//       title: "VR Integration",
//       description:
//         "The platform supports major VR headsets, creating a realistic environment where users can not only play music but also interact with digital avatars, virtual band members, and audiences.",
//       bgColor: "bg-green-50",
//       iconColor: "text-green-600",
//     },
//     {
//       Icon: Users,
//       title: "Interactive 3D Avatars",
//       description:
//         "The use of AI-driven avatars adds a layer of realism to the experience, allowing users to engage in verbal and physical interactions with virtual musicians.",
//       bgColor: "bg-orange-50",
//       iconColor: "text-orange-600",
//     },
//   ];

//   return (
//     <div className="bg-[#039FFF] min-h-screen flex flex-col items-center py-16 px-4">
//       <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
//         Why OneOfUs is the the bleeding edge of music technology
//       </h1>

//       {/* Use Cases Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-12">
//         {useCases.map((useCase, index) => {
//           const { Icon, title, description, bgColor, iconColor } = useCase;
//           return (
//             <div
//               key={index}
//               className={`p-6 rounded-xl ${bgColor} hover:shadow-lg transition-all duration-300 ease-in-out`}
//             >
//               <div className="flex items-start space-x-4">
//                 <div className={`p-3 rounded-lg ${bgColor}`}>
//                   <Icon className={`w-8 h-8 ${iconColor}`} aria-hidden="true" />
//                 </div>
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold text-gray-800 mb-2">
//                     {title}
//                   </h2>
//                   <p className="text-gray-600 leading-relaxed text-sm">
//                     {description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex justify-center mt-10">
//         <button className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0">
//           <span>→</span>
//           Get on the waitlist for this exciting app
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UseCasesPage;


// import React from "react";
// import Image from "next/image";
// import {
//   Brain,
//   AudioWaveform,
//   Glasses,
//   Users,
// } from "lucide-react";

// const UseCasesPage = () => {
//   const useCases = [
//     {
//       Icon: Brain,
//       title: "Advanced AI Algorithms",
//       description:
//         "The software uses AI to analyze user performance, detect discrepancies, and provide constructive feedback. The AI is trained to recognize different musical patterns, chords, and rhythms, offering tailored recommendations to improve user technique.",
//       iconColor: "text-purple-600",
//     },
//     {
//       Icon: AudioWaveform,
//       title: "Real-Time Audio Analysis",
//       description:
//         "The software's core AI engine can translate sound waves from real instruments into digital signals, ensuring low latency and accurate feedback.",
//       iconColor: "text-blue-600",
//     },
//     {
//       Icon: Glasses,
//       title: "VR Integration",
//       description:
//         "The platform supports major VR headsets, creating a realistic environment where users can not only play music but also interact with digital avatars, virtual band members, and audiences.",
//       iconColor: "text-green-600",
//     },
//     {
//       Icon: Users,
//       title: "Interactive 3D Avatars",
//       description:
//         "The use of AI-driven avatars adds a layer of realism to the experience, allowing users to engage in verbal and physical interactions with virtual musicians.",
//       iconColor: "text-orange-600",
//     },
//   ];

//   return (
//     <div className="relative pattern-background min-h-screen">
//       <div className="pattern-overlay"></div>
//       <div className="relative z-10 flex flex-col items-center py-16 px-4">
//         <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center max-w-4xl">
//           Why OneOfUs is the bleeding edge of music technology
//         </h1>

//         {/* Use Cases Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-12">
//           {useCases.map((useCase, index) => {
//             const { Icon, title, description, iconColor } = useCase;
//             return (
//               <div
//                 key={index}
//                 className="p-6 rounded-xl bg-white/50 hover:bg-white/60 transition-all duration-300 ease-in-out"
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="p-3 rounded-lg bg-white/70">
//                     <Icon className={`w-8 h-8 ${iconColor}`} aria-hidden="true" />
//                   </div>
//                   <div className="flex-1">
//                     <h2 className="text-lg font-semibold text-gray-800 mb-2">
//                       {title}
//                     </h2>
//                     <p className="text-gray-700 leading-relaxed text-sm">
//                       {description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="flex justify-center mt-10">
//           <button className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0 shadow-lg">
//             <span>→</span>
//             Get on the waitlist for this exciting app
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UseCasesPage;



'use client';
import { useState } from "react";

import Link from 'next/link';
import { 
  Brain,
  AudioWaveform,
  Glasses,
  Users,
  Music2, 
  Mic2,   
  ActivitySquare,
  Layers, 
  Star    
} from 'lucide-react';

const UseCasesPage = () => {

  
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    setIsOpen(false);
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const features = [
    {
      Icon: Music2,
      title: "AI-generated legendary musicians",
      description: "Perform with avatars of iconic rock, pop, and jazz stars in a virtual concert."
    },
    {
      Icon: Mic2,
      title: "Real-instrument integration",
      description: "Connect personal instruments via an external sound card for enhanced realism."
    },
    {
      Icon: ActivitySquare,
      title: "Real-time feedback",
      description: "AI analyzes performance accuracy, rhythm, and speed to provide feedback."
    },
    {
      Icon: Users,
      title: "Social connectivity",
      description: "Engage in collaborative virtual performances and interact with audiences."
    },
    {
      Icon: Layers,
      title: "Scalable expansions",
      description: "Future updates will introduce more genres, AI musicians, and multiplayer."
    },
    {
      Icon: Star,
      title: "Live your dream",
      description: "Play like and with your idols on the big stage using this app."
    }
  ];

  return (
    <div className="pattern-background">
      <div className="pattern-overlay before:content-[''] before:absolute before:inset-0 before:bg-pattern-lines before:opacity-80"></div>
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

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-4 sm:p-5 rounded-xl bg-white hover:bg-white/70 transition-all duration-300 backdrop-blur-sm"
            >
              <feature.Icon className="w-7 h-7 text-[#6366F1] mb-2" />
              <h3 className="text-md font-semibold text-[#2D3748] mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-[13px]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => setIsOpen(true)}
          
          className="w-full sm:w-[350px] md:w-[450px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all flex items-center justify-center gap-4 shadow-lg">
            <span>→</span>
            Get on the waitlist for this exciting app
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          {/* Modal Content */}
          <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Form Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Join the Waitlist
              </h2>
              <p className="text-gray-600">
                Get early access to our innovative platform
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                />
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="text-center text-sm text-gray-500">
                  reCAPTCHA will be displayed here
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white py-3 rounded-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UseCasesPage;