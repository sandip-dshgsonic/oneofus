// // pages/how-it-works.js

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import ReactPlayer from "react-player";

// export default function HowItWorks() {
//   const [openStep, setOpenStep] = useState(null);

//   const toggleStep = (id) => {
//     setOpenStep(openStep === id ? null : id);
//   };

//   const steps = [
//     {
//       id: 1,
//       title: "Real Instrument Integration",
//       text: " Offers a realistic playing experience that enhances learning and engagement by allowing musicians to use their own instruments.",
//       // videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 2,
//       title: "Immersive Live Stage Experience",
//       text: " Delivers an engaging, dream-like experience that combines entertainment with skill-building, offering a sense of achievement and belonging.",
//       // videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 3,
//       title: "AI-Driven Performance Feedback:",
//       text: " Helps users improve their musical skills efficiently, as they receive detailed, actionable insights on how to enhance their performance.",
//       // videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 4,
//       title: "Virtual Interaction with Music Icons",
//       text: " Makes the experience more engaging and motivating by enabling users to receive personalized coaching from legendary artists.",
//       // videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 5,
//       title: "Social and Collaborative Features:",
//       text: " Promotes collaboration and community-building, creating a vibrant network of users who can learn from each other.",
//       // videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 6,
//       title: "VR Compatibility:",
//       text: " Enhances the realism and depth of the music experience, making it feel like users are on a real stage with live audiences.",
//       // videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//   ];

//   return (
//     <div className=" min-h-screen flex flex-col items-center py-16 px-4">
//       <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
//         Why OneOfUs is one of a kind music app
//       </h1>

//       <div className="w-full max-w-4xl space-y-6 mx-auto p-4">
//         {steps.map((step) => (
//           <div key={step.id} className="border-b pb-6">
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleStep(step.id)}
//             >
//               <h2 className="text-xl font-semibold text-gray-700">
//                 {step.id}. {step.title}
//               </h2>
//               <span className="text-purple-900 text-2xl">
//                 {openStep === step.id ? "×" : "+"}
//               </span>
//             </div>
//             {openStep === step.id && (
//               <div className="mt-4 space-y-4">
//                 <p className="text-gray-600">{step.text}</p>
//                 {/* <div className="relative w-full h-48">
//                   <ReactPlayer url={step.videoUrl} width="100%" height="100%" controls />
//                 </div> */}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Call to Action Button */}
      // {/* CTA Button */}
      // <div className="flex justify-center mt-10">
      // <button className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0">
      //         <span>→</span>
      //         Get on the waitlist for this exciting app
      //       </button>
      // </div>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };

  const steps = [
    {
      id: 1,
      title: "Real Instrument Integration",
      text: "Offers a realistic playing experience that enhances learning and engagement by allowing musicians to use their own instruments.",
    },
    {
      id: 2,
      title: "Immersive Live Stage Experience",
      text: "Delivers an engaging, dream-like experience that combines entertainment with skill-building, offering a sense of achievement and belonging.",
    },
    {
      id: 3,
      title: "AI-Driven Performance Feedback",
      text: "Helps users improve their musical skills efficiently, as they receive detailed, actionable insights on how to enhance their performance.",
    },
    {
      id: 4,
      title: "Virtual Interaction with Music Icons",
      text: "Makes the experience more engaging and motivating by enabling users to receive personalized coaching from legendary artists.",
    },
    {
      id: 5,
      title: "Social and Collaborative Features",
      text: "Promotes collaboration and community-building, creating a vibrant network of users who can learn from each other.",
    },
    {
      id: 6,
      title: "VR Compatibility",
      text: "Enhances the realism and depth of the music experience, making it feel like users are on a real stage with live audiences.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:py-16 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
        Why OneOfUs is one of a kind music app
      </h1>

      <div className="w-full max-w-4xl space-y-6 mx-auto p-4">
        {steps.map((step) => (
          <div key={step.id} className="border-b pb-4 md:pb-6">
            <div
              className="flex justify-between items-center cursor-pointer py-2"
              onClick={() => toggleStep(step.id)}
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-700">
                {step.id}. {step.title}
              </h2>
              <span className="text-purple-900 text-xl md:text-2xl">
                {openStep === step.id ? "×" : "+"}
              </span>
            </div>
            {openStep === step.id && (
              <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
                <p className="text-gray-600 text-sm md:text-base">{step.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
          {/* CTA Button */}
          <div className="flex justify-center mt-10">
      <button className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0">
              <span>→</span>
              Get on the waitlist for this exciting app
            </button>
      </div>
    </div>
  );
}

