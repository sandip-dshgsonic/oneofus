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
                <p className="text-gray-600 text-sm md:text-base">
                  {step.text}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0"
        >
          <span>→</span>
          Get on the waitlist for this exciting app
        </button>
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
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
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
             

              {/* reCAPTCHA Placeholder */}
              {/* <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="text-center text-sm text-gray-500">
                  reCAPTCHA will be displayed here
                </div>
              </div> */}

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
}
