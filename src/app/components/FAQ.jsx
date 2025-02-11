// 'use client';
// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const FaqItem = ({ question, answer }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="border-b border-gray-200">
//       <button
//         className="w-full py-4 px-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-base text-gray-800">{question}</span>
//         <ChevronDown 
//           className={`w-5 h-5 text-gray-400 transition-transform ${
//             isOpen ? 'transform rotate-180' : ''
//           }`}
//         />
//       </button>
//       {isOpen && (
//         <div className="px-6 py-4 bg-white">
//           <p className="text-gray-600">{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const FAQ = () => {
//   const faqData = [
//     {
//       question: "Is there a mobile app?",
//       answer: "Yes, our mobile app is available on both iOS and Android platforms."
//     },
//     {
//       question: "How accurate is the voice-to-text conversion?",
//       answer: "Our voice-to-text conversion is highly accurate, using advanced AI technology to ensure precise transcription."
//     },
//     {
//       question: "Can I use TalkNotes in different languages?",
//       answer: "Yes, TalkNotes supports multiple languages for both voice recognition and text output."
//     },
//     {
//       question: "Can I upload my own audio files?",
//       answer: "Yes, you can upload audio files in various formats including MP3, WAV, and M4A."
//     },
//     {
//       question: "Can I edit the text once it's converted?",
//       answer: "Yes, you have full editing capabilities for all converted text."
//     },
//     {
//       question: "Do I need an internet connection to use TalkNotes?",
//       answer: "Yes, an internet connection is required for real-time voice-to-text conversion."
//     },
//     {
//       question: "What about privacy?",
//       answer: "We take privacy seriously and use enterprise-grade encryption to protect your data."
//     },
//     {
//       question: "How can I contact support if I have questions or need help?",
//       answer: "Our support team is available 24/7 through email and live chat."
//     },
//     {
//       question: "How can I cancel my subscription?",
//       answer: "You can cancel your subscription anytime through your account settings."
//     },
//     {
//       question: "How long is the discount valid when I subscribe?",
//       answer: "Promotional discounts are typically valid for 30 days from when they're offered."
//     }
//   ];

//   return (
//     <div className="max-w-2xl mx-auto py-12 px-4">
//       <h2 className="text-2xl font-bold text-center mb-8">F.A.Q</h2>
//       <div className="bg-white rounded-lg shadow-sm">
//         {faqData.map((faq, index) => (
//           <FaqItem key={index} question={faq.question} answer={faq.answer} />
//         ))}
//       </div>
      
//       <div className="text-center mt-8">
//         <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors">
//           Try TalkNotes free for 7 days
//         </button>
//       </div>

//       <div className="mt-16 bg-indigo-600 text-white rounded-lg p-8">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="md:w-1/2 mb-6 md:mb-0">
//             <h3 className="text-2xl font-bold mb-4">
//               Get Ahead with AI-Powered, Actionable Note Taking
//             </h3>
//             <p className="mb-6">
//               Turn your ideas into organized, actionable insights—no matter how complex. Capture your thoughts and let our AI help you make sure they're clear, actionable, and on top of your mind.
//             </p>
//             <button className="bg-white text-indigo-600 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
//               Get TalkNotes →
//             </button>
//           </div>
//           <div className="md:w-1/2 flex justify-end"> 
    
//           <div className="md:w-1/2 relative">
//             <img 
//               src="/Images/banner-thumbnail.jpg" 
//               alt="TalkNotes Banner" 
//               className="w-full h-full object-cover rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
//             />
//             <div className="absolute bottom-4 right-4 text-sm text-white opacity-80">
//               ...and more!
//             </div>
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;


'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base text-gray-800">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    { question: "Is there a mobile app?", answer: "Yes, our mobile app is available on both iOS and Android platforms." },
    { question: "How accurate is the voice-to-text conversion?", answer: "Our voice-to-text conversion is highly accurate, using advanced AI technology to ensure precise transcription." },
    { question: "Can I use TalkNotes in different languages?", answer: "Yes, TalkNotes supports multiple languages for both voice recognition and text output." },
    { question: "Can I upload my own audio files?", answer: "Yes, you can upload audio files in various formats including MP3, WAV, and M4A." },
    { question: "Can I edit the text once it's converted?", answer: "Yes, you have full editing capabilities for all converted text." },
    { question: "Do I need an internet connection to use TalkNotes?", answer: "Yes, an internet connection is required for real-time voice-to-text conversion." },
    { question: "What about privacy?", answer: "We take privacy seriously and use enterprise-grade encryption to protect your data." },
    { question: "How can I contact support if I have questions or need help?", answer: "Our support team is available 24/7 through email and live chat." },
    { question: "How can I cancel my subscription?", answer: "You can cancel your subscription anytime through your account settings." },
    { question: "How long is the discount valid when I subscribe?", answer: "Promotional discounts are typically valid for 30 days from when they're offered." }
  ];

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">F.A.Q</h2>
      <div className="bg-white rounded-lg shadow-sm">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      
      <div className="text-center mt-12">
      <a 
          href="#"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          → Try TalkNotes free for 7 days
        </a>
      </div>

      <div className=" mt-16 bg-indigo-600 text-white rounded-lg p-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">
            Get Ahead with AI-Powered, Actionable Note Taking
          </h3>
          <p className="mb-6">
            Turn your ideas into organized, actionable insights—no matter how complex. Capture your thoughts and let our AI help you make sure they're clear, actionable, and on top of your mind.
          </p>
          <button className="bg-pink-500 text-white px-6 py-2 hover:bg-pink-600 transition-colors rounded-md">
            Get TalkNotes →
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <img src="/Images/banner-thumbnail.jpg" alt="TalkNotes Banner" className="w-54 h-54 object-cover rounded-lg " />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
