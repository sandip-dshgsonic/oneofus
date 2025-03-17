// "use client";  // Add this line at the top
// import React, { useState } from "react"; // Import useState from React directly
// import Image from "next/image";
// import WaitlistPopup from '../WaitlistPopup';
// // Remove this line since useState is now imported from React
// // import { useState } from "react";

// import {
//   Brain,
//   AudioWaveform,
//   Glasses,
//   Users,
// } from "lucide-react";

// const UseCasesPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [email, setEmail] = useState("");

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
//                 className="p-6 rounded-xl bg-white hover:bg-white/70 transition-all duration-300 ease-in-out"
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
//         <button
//               onClick={() => setIsOpen(true)}
//               className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0"
//             >
//               <span>→</span>
//               Get on the waitlist for this exciting app
//             </button>
//         </div>
//       </div>

//       <WaitlistPopup isOpen={isOpen} setIsOpen={setIsOpen} />

//     </div>
//   );
// };

// export default UseCasesPage;


"use client";  // Add this line at the top
import React, { useState } from "react"; // Import useState from React directly
import Image from "next/image";
import WaitlistPopup from '../WaitlistPopup';
// Remove this line since useState is now imported from React
// import { useState } from "react";

import {
  Brain,
  AudioWaveform,
  Glasses,
  Users,
  Award,
  Users2,
} from "lucide-react";

const UseCasesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const useCases = [
    {
      Icon: Brain,
      title: "Advanced AI Algorithms",
      description:
        "We offer a realistic playing experience that boosts learning and engagement, letting musicians play with their own instruments!",
      iconColor: "text-purple-600",
    },
    {
      Icon: AudioWaveform,
      title: "Real-Time Audio Analysis",
      description:
        "We deliver an engaging, dream-like experience that blends entertainment and skill-building, giving you a sense of achievement and belonging!",
      iconColor: "text-blue-600",
    },
    {
      Icon: Glasses,
      title: "VR Integration",
      description:
        "We help users rapidly elevate their musical skills with detailed, actionable insights for peak performance!",
      iconColor: "text-green-600",
    },
    {
      Icon: Users,
      title: "Interactive 3D Avatars",
      description:
        "We make the experience more engaging and motivating by offering personalized coaching from legendary artists!",
      iconColor: "text-orange-600",
    },
    {
      Icon: Users2,
      title: "Collaborative Community",
      description:
        "We foster collaboration and community, connecting users in a vibrant network to learn, grow, and thrive together!",
      iconColor: "text-pink-600",
    },
    {
      Icon: Award,
      title: "Stage Performance Simulation",
      description:
        "We amplify the realism and depth of the music experience, making users feel like they're on a real stage with a live audience!",
      iconColor: "text-amber-600",
    },
  ];

  return (
    <div className="relative pattern-background min-h-screen">
      <div className="pattern-overlay"></div>
      <div className="relative z-10 flex flex-col items-center py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center max-w-4xl">
          Why OneOfUs is the bleeding edge of music technology
        </h1>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-12">
          {useCases.map((useCase, index) => {
            const { Icon, title, description, iconColor } = useCase;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-white hover:bg-white/70 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  {/* <div className="p-3 rounded-lg bg-white/70">
                    <Icon className={`w-8 h-8 ${iconColor}`} aria-hidden="true" />
                  </div> */}
                  <div className="flex-1">
                    {/* <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      {title}
                    </h2> */}
                    <p className="text-gray-700 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0"
          >
            <span>→</span>
            Get on the waitlist for this exciting app
          </button>
        </div>
      </div>

      <WaitlistPopup isOpen={isOpen} setIsOpen={setIsOpen} />

    </div>
  );
};

export default UseCasesPage;