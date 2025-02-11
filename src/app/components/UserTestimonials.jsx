// 'use client';
// import React from 'react';
// import Image from 'next/image';

// const UserTestimonials = () => {
//   const testimonials = [
//     {
//       text: "I just tried TalkNotes and it is extremely intuitive, the interface is pristine, the voice to text transcription was impeccable, it even performed well in Spanish.",
//       author: "Franyer",
//       handle: "@franyerverst"
//     },
//     {
//       text: "Luv it - picks your voice up without mistakes, AI conversion fantastic - Great service from Support",
//       author: "Campbell Watt",
//       handle: "@campbell_watt"
//     },
//     {
//       text: "Been using it for the last 2 months. Super easy. Saves me 5 hours every week minimum. A mobile app would be a great addition. Congrats on the launch!",
//       author: "Dan Kulkov",
//       handle: "@dronop"
//     },
//     {
//       text: "I have been trying to find something similar for a very long time... For example, when I am listening to an audio book I want to speak and make some notes, when I'm on my Peloton and watching some course on the laptop, I want to take some notes.. Your app will be the best thing to do this...",
//       author: "Sandeep Bansal",
//       handle: "@sandeep_bansal"
//     },
//     {
//       text: "The quality of the transcriptions is fantastic and require virtually no rework. Compared to incomparably more expensive professional transcription tools, the results are dimensions better.",
//       author: "Thomas Mickeleit",
//       handle: "@thomasmickeleit"
//     },
//     {
//       text: "TalkNotes is a great tool when you ask questions from your customers as you can tell them not to just reply with voice notes to take away the effort of writing from them. Congrats on the launch, Nico!",
//       author: "Rohit Gulam",
//       handle: "@rohitgulam1"
//     },
//     {
//       text: "I'm the type of indie dev that slams voice notes of ideas, and have dozens just sitting idle. This is pretty neat, now I can have them organised in text so I can actually search through my mind mess. great product.",
//       author: "elonsdev",
//       handle: "@elonsdev"
//     },
//     {
//       text: "It's an very nice product, clean and easy to use. Love to use it over Siri or other audio capture mechanism. Give it a try, Nico is building nice and clean products 🔥",
//       author: "Romain",
//       handle: "@romaindewoff"
//     },
//     {
//       text: "Sometimes I murmur because of habit and talks nonsense because it can get hard to put sentences and ideas together but this app does such a great job in making them more coherent in writings.",
//       author: "Inji",
//       handle: "@injiyoc"
//     },
//     {
//       text: "Getting my thoughts organized has always been difficult. Between meetings, I need to quickly capture my ideas and this helps tremendously with that. The AI features are really cool too!",
//       author: "Peter Witham",
//       handle: "@compileswift"
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-20 ">
//       <h2 className="text-2xl font-bold text-center mb-16 text-gray-900">
//         What Our Users Say
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
//           >
//             <p className="text-gray-600 mb-6 text-[15px] leading-relaxed min-h-[80px]">
//               {testimonial.text}
//             </p>
            
//             <div className="flex items-center gap-3">
//               {testimonial.author === "Campbell Watt" ? (
//                 <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium text-lg">
//                   C
//                 </div>
//               ) : testimonial.author === "Thomas Mickeleit" ? (
//                 <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium text-lg">
//                   T
//                 </div>
//               ) : testimonial.author === "Jason" ? (
//                 <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-medium text-lg">
//                   J
//                 </div>
//               ) : (
//                 <div className="w-10 h-10 relative flex-shrink-0">
//                   <Image
//                     src={`/avatars/${testimonial.author.toLowerCase().replace(' ', '-')}.png`}
//                     alt={testimonial.author}
//                     fill
//                     className="rounded-full object-cover"
//                   />
//                 </div>
//               )}
//               <div>
//                 <div className="font-medium text-gray-900 text-[15px]">
//                   {testimonial.author}
//                 </div>
//                 <div className="text-gray-500 text-sm">
//                   {testimonial.handle}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserTestimonials;


'use client';
import React from 'react';
import Image from 'next/image';

const UserTestimonials = () => {
  const testimonials = [
    {
      text: "I just tried TalkNotes and it is extremely intuitive, the interface is pristine, the voice to text transcription was impeccable, it even performed well in Spanish.",
      author: "Franyer",
      image: "/Images/original (3).avif"
    },
    {
      text: "Luv it - picks your voice up without mistakes, AI conversion fantastic - Great service from Support",
      author: "Campbell Watt",
      image: "/Images/a09cba20-1b7b-4b52-892e-af48ea4d3362.avif"
    },
    {
      text: "Been using it for the last 2 months. Super easy. Saves me 5 hours every week minimum. A mobile app would be a great addition. Congrats on the launch!",
      author: "Dan Kulkov",
      image: "/Images/b3202454-d312-4cae-949a-f888c66beae9.avif"
    },
    {
      text: "I have been trying to find something similar for a very long time... For example, when I am listening to an audio book I want to speak and make some notes, when I'm on my Peloton and watching some course on the laptop, I want to take some notes.. Your app will be the best thing to do this...",
      author: "Sandeep Bansal",
      image: "/Images/original (2).avif"

    },
    {
      text: "The quality of the transcriptions is fantastic and require virtually no rework. Compared to incomparably more expensive professional transcription tools, the results are dimensions better.",
      author: "Thomas Mickeleit",
      image: "/Images/white.svg"
    },
    {
      text: "TalkNotes is a great tool when you ask questions from your customers as you can tell them not to just reply with voice notes to take away the effort of writing from them. Congrats on the launch, Nico!",
      author: "Rohit Gulam",
      image: "/Images/a5c5d0cb-c81d-4601-b45d-d9da1fd1ee44.avif"
    },
    {
      text: "I'm the type of indie dev that slams voice notes of ideas, and have dozens just sitting idle. This is pretty neat, now I can have them organised in text so I can actually search through my mind mess. great product.",
      author: "elonsdev",
      image: "/Images/original (4).avif"
    },
    {
      text: "It's an very nice product, clean and easy to use. Love to use it over Siri or other audio capture mechanism. Give it a try, Nico is building nice and clean products 🔥",
      author: "Romain",
      image: "/Images/144dd3aa-0b17-49d6-90ed-8072febbf9db.avif"
    },
    {
      text: "Sometimes I murmur because of habit and talks nonsense because it can get hard to put sentences and ideas together but this app does such a great job in making them more coherent in writings.",
      author: "Inji",
      image: "/Images/84a5c5cb-e0eb-4202-bdfc-c018a1fee597.avif"
    },
    {
      text: "Getting my thoughts organized has always been difficult. Between meetings, I need to quickly capture my ideas and this helps tremendously with that. The AI features are really cool too!",
      author: "Peter Witham",
      image: "/Images/white (1).svg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-bold text-center mb-16 text-gray-900">
        What Our Users Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <p className="text-gray-600 mb-6 text-[15px] leading-relaxed min-h-[80px]">
              {testimonial.text}
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-gray-900 text-[15px]">
                  {testimonial.author}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTestimonials;
