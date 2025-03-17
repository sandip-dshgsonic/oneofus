// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { Check } from 'lucide-react';

// const PricingSection = () => {
//   const features = [
//     'iOS and Android app',
//     'Unlimited notes',
//     '2h recording',
//     'Upload files',
//     'Custom styles',
//     'Export to text, mail, URL etc',
//     'Store and organize your notes'
//   ];

//   const socialProof = [
//     { name: 'Medium', image: '/Images/sp-medium.svg' },
//     { name: 'Indie Hackers', image: '/Images/sp-ih.svg' },
//     { name: 'Foundr', image: '/Images/sp-foundr.svg' },
//     { name: 'Scoop.it', image: '/Images/sp-scoopit.svg' }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16 text-center">
//       {/* Header */}
//       <div className="mb-2">
//         <span className="text-gray-500">Pricing</span>
//       </div>
//       <h1 className="text-4xl font-bold text-gray-800 mb-4">
//         Start Your 7 Day Free Trial
//       </h1>
//       <div className="mb-12">
//         <span className="text-gray-600">Get TalkNotes: </span>
//         <span className="text-emerald-400 font-medium">ALL FEATURES</span>
//       </div>

//       {/* Pricing Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
//         {/* Monthly Plan */}
//         <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
//           <h2 className="text-2xl font-bold mb-2">Monthly</h2>
//           <p className="text-gray-500 mb-6">Try 7 days free then $19.97/month</p>
          
//           <div className="mb-8">
//             <span className="text-5xl font-bold">$19.97</span>
//             <span className="text-gray-500">/month</span>
//           </div>

//           <div className="space-y-4 mb-8">
//             {features.map((feature, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <Check className="text-emerald-400 w-5 h-5" />
//                 <span className="text-gray-700">{feature}</span>
//               </div>
//             ))}
//           </div>

//           <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors mb-4">
//             → Try 7 Days Free
//           </button>
//           <div className="text-emerald-400 text-sm flex items-center justify-center gap-1">
//             <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//             Secure payment
//           </div>
//         </div>

//         {/* Yearly Plan */}
//         <div className="bg-white rounded-2xl p-8 shadow-md border border-blue-100 relative">
//           <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
//             BEST VALUE
//           </div>
          
//           <h2 className="text-2xl font-bold mb-2">Yearly</h2>
//           <p className="text-gray-500 mb-6">Try 7 days free then $16/month</p>
          
//           <div className="mb-8">
//             <span className="text-5xl font-bold">$197</span>
//             <span className="text-gray-500">/year</span>
//           </div>

//           <div className="space-y-4 mb-8">
//             {features.map((feature, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <Check className="text-emerald-400 w-5 h-5" />
//                 <span className="text-gray-700">{feature}</span>
//               </div>
//             ))}
//           </div>

//           <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors mb-4">
//             → Try 7 Days Free
//           </button>
//           <div className="text-emerald-400 text-sm flex items-center justify-center gap-1">
//             <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//             Secure payment
//           </div>
//         </div>
//       </div>

//       {/* Trust Badge */}
//       <div className="text-gray-600 mb-8">
//         Trusted by +10,000 happy users ⭐⭐⭐⭐⭐
//       </div>

//       {/* Social Proof */}
//       <div className="flex justify-center items-center gap-8 mb-12">
//         {socialProof.map((brand, index) => (
//           <div key={index} className="relative h-8 w-24">
//             <Image
//               src={brand.image}
//               alt={brand.name}
//               layout="fill"
//               objectFit="contain"
//               className="opacity-50"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Testimonial */}
//       <div className="max-w-2xl mx-auto space-y-6">
//   {/* Testimonial 1 */}
//   <div className="flex items-center gap-4 bg-white p-6 rounded-xl s ">
//     <div className="w-12 h-12 relative flex-shrink-0">
//       <Image
//         src="/Images/1028-200x300.jpg"
//         alt="Testimonial"
//         layout="fill"
//         className="rounded-full"
//       />
//     </div>
//     <div className="text-left">
//       <p className="text-gray-700 mb-1">
//         "A perfect tool to work in different ways, whether it's notes, brainstorming, or translation - I love it!"
//       </p>
//       <p className="text-gray-500 text-sm">- Tanja Kos, reviewed on Trustpilot</p>
//     </div>
//   </div>

//   {/* Testimonial 2 */}
//   <div className="flex items-center gap-4 bg-white p-6 rounded-xl ">
//     <div className="w-12 h-12 relative flex-shrink-0">
//       <Image
//         src="/Images/216-200x300.jpg"
//         alt="Testimonial"
//         layout="fill"
//         className="rounded-full"
//       />
//     </div>
//     <div className="text-left">
//       <p className="text-gray-700 mb-1">
//         "A perfect tool to work in different ways, whether it's notes, brainstorming, or translation - I love it!"
//       </p>
//       <p className="text-gray-500 text-sm">- Tanja Kos, reviewed on Trustpilot</p>
//     </div>
//   </div>
// </div>

//     </div>
//   );
// };

// export default PricingSection;

'use client';
import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import UserTestimonials from './UserTestimonials';

const PricingSection = () => {
  const features = [
    'iOS and Android app',
    'Unlimited notes',
    '2h recording',
    'Upload files',
    'Custom styles',
    'Export to text, mail, URL etc',
    'Store and organize your notes'
  ];

  const socialProof = [
    { name: 'Medium', image: '/Images/sp-medium.svg' },
    { name: 'Indie Hackers', image: '/Images/sp-ih.svg' },
    { name: 'Foundr', image: '/Images/sp-foundr.svg' },
    { name: 'Scoop.it', image: '/Images/sp-scoopit.svg' }
  ];

  return (
    <div className="bg-[#eef2ff] w-full">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        {/* Header */}
        <div className="mb-2">
          <span className="text-gray-500">Pricing</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Start Your 7 Day Free Trial
        </h1>
        <div className="mb-12">
          <span className="text-gray-600">Get TalkNotes: </span>
          <span className="text-emerald-400 font-medium">ALL FEATURES</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Monthly Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-2">Monthly</h2>
            <p className="text-gray-500 mb-6">Try 7 days free then $19.97/month</p>

            <div className="mb-8">
              <span className="text-5xl font-bold">$19.97</span>
              <span className="text-gray-500">/month</span>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-emerald-400 w-5 h-5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

        

            <button className="w-full inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              → Try 7 Days Free
            </button>
            <div className="text-emerald-400 text-sm flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              Secure payment
            </div>
          </div>

          {/* Yearly Plan */}
          <div className="bg-white rounded-2xl p-8 shadow-md border border-blue-100 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              BEST VALUE
            </div>

            <h2 className="text-2xl font-bold mb-2">Yearly</h2>
            <p className="text-gray-500 mb-6">Try 7 days free then $16/month</p>

            <div className="mb-8">
              <span className="text-5xl font-bold">$197</span>
              <span className="text-gray-500">/year</span>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="text-emerald-400 w-5 h-5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              → Try 7 Days Free
            </button>
            <div className="text-emerald-400 text-sm flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              Secure payment
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-gray-600 mb-8">
          Trusted by +10,000 happy users ⭐⭐⭐⭐⭐
        </div>

        {/* Social Proof */}
        <div className="flex justify-center items-center gap-8 mb-12">
          {socialProof.map((brand, index) => (
            <div key={index} className="relative h-12 w-24">
              <Image
                src={brand.image}
                alt={brand.name}
                layout="fill"
                objectFit="contain"
                className="opacity-50"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Testimonial 1 */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-xl">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src="/Images/1028-200x300.jpg"
                alt="Testimonial"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="text-left">
              <p className="text-gray-700 mb-1">
                "A perfect tool to work in different ways, whether it's notes, brainstorming, or translation - I love it!"
              </p>
              <p className="text-gray-500 text-sm">- Tanja Kos, reviewed on Trustpilot</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex items-center gap-4 bg-white p-6 rounded-xl">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src="/Images/216-200x300.jpg"
                alt="Testimonial"
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="text-left">
              <p className="text-gray-700 mb-1">
                "A perfect tool to work in different ways, whether it's notes, brainstorming, or translation - I love it!"
              </p>
              <p className="text-gray-500 text-sm">- Tanja Kos, reviewed on Trustpilot</p>
            </div>
          </div>
        </div>
  <UserTestimonials/>
      </div>
    </div>
  );
};

export default PricingSection;
