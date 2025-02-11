'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ActionNotesSection = () => {
  const features = [
    {
      title: "Send it to 1000s of other apps",
      description: "Connect Talknotes to your favorite apps with Zapier or Webhooks! Perfect to automate publishing and workflows!",
      image: "/Images/1.png"
    },
    {
      title: "Export in PDF, Text or Markdown",
      description: "Export your notes in PDF, Text or Markdown to use them in your favorite tools.",
      image: "/Images/2.png"
    },
    {
      title: "Publish with just a link!",
      description: "Need to share a note quickly? Make it public and share with the world via a simple link!",
      image: "/Images/3.png"
    }
  ];

  const testimonials = [
    {
      quote: "Absolutely love Talknotes. I have wrist pain so being able to dictate my writing not only saves me time but relieves my pain! Win win. Highly recommend!",
      author: "Mike Cardona",
      source: "from Hidden Levers AI Newsletter",
      avatar: "/Images/vkBaB3ca_400x400.jpg"
    },
    {
      quote: "The quality of the transcriptions is fantastic and require virtually no rework. Compared to incomparably more expensive tools, the results are dimensions better.",
      author: "Thomas Mickeleit",
      source: "from KommunikationNeuDenken",
      avatar: "/Images/unnamed.webp"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-16">
        {/* Share & Export button at the top */}
        <div className="mb-4 w-full text-center">
          <span className="text-gray-400 font-bold text-lg uppercase tracking-wide">
            Share & Export
          </span>
        </div>
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Turn your ramblings into actionable notes
        </h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl text-center transition-all"
          >
            <div className="mb-6 h-40 relative">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="contain"
                className="mx-auto"
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mb-12">
        <a 
          href="#"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          → Try TalkNotes free for 7 days
        </a>
      </div>

      {/* Testimonials */}
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex items-start gap-6 max-w-3xl mx-auto bg-white p-6 rounded-xl transition-all"
          >
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="text-gray-800 mb-2">"{testimonial.quote}"</p>
              <p className="text-gray-500 text-sm">
                - {testimonial.author}, {testimonial.source}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionNotesSection;

// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const ActionNotesSection = () => {
//   const features = [
//     {
//       title: "Send it to 1000s of other apps",
//       description: "Connect Talknotes to your favorite apps with Zapier or Webhooks! Perfect to automate publishing and workflows!",
//       image: "/Images/1.png"
//     },
//     {
//       title: "Export in PDF, Text or Markdown",
//       description: "Export your notes in PDF, Text or Markdown to use them in your favorite tools.",
//       image: "/Images/2.png"
//     },
//     {
//       title: "Publish with just a link!",
//       description: "Need to share a note quickly? Make it public and share with the world via a simple link!",
//       image: "/Images/3.png"
//     }
//   ];

//   const testimonials = [
//     {
//       quote: "Absolutely love Talknotes. I have wrist pain so being able to dictate my writing not only saves me time but relieves my pain! Win win. Highly recommend!",
//       author: "Mike Cardona",
//       source: "from Hidden Levers AI Newsletter",
//       avatar: "/Images/vkBaB3ca_400x400.jpg"
//     },
//     {
//       quote: "The quality of the transcriptions is fantastic and require virtually no rework. Compared to incomparably more expensive tools, the results are dimensions better.",
//       author: "Thomas Mickeleit",
//       source: "from KommunikationNeuDenken",
//       avatar: "/Images/unnamed.webp"
//     }
//   ];

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-16">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-16">
//         <div className="flex-1" />
//         <div className="flex-1 text-right">
//           <span className="text-gray-500">Share & Export</span>
//         </div>
//         <h1 className="text-4xl font-bold text-center text-gray-800">
//           Turn your ramblings into actionable notes
//         </h1>
       
//       </div>

//       {/* Features Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-xl text-center transition-all"
//           >
//             <div className="mb-6 h-40 relative">
//               <Image
//                 src={feature.image}
//                 alt={feature.title}
//                 layout="fill"
//                 objectFit="contain"
//                 className="mx-auto"
//               />
//             </div>
//             <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* CTA Button */}
//       <div className="text-center mb-12">
//       <a 
//           href="#"
//           className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
//         >
//           → Try TalkNotes free for 7 days
//         </a>
//       </div>

//       {/* Testimonials */}
//       <div className="space-y-8">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="flex items-start gap-6 max-w-3xl mx-auto bg-white p-6 rounded-xl transition-all"
//           >
//             <div className="w-12 h-12 relative flex-shrink-0">
//               <Image
//                 src={testimonial.avatar}
//                 alt={testimonial.author}
//                 layout="fill"
//                 className="rounded-full"
//               />
//             </div>
//             <div>
//               <p className="text-gray-800 mb-2">"{testimonial.quote}"</p>
//               <p className="text-gray-500 text-sm">
//                 - {testimonial.author}, {testimonial.source}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ActionNotesSection;
