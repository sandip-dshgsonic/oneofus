// "use client";

// import React, { useState, useEffect } from "react";
// import ReactPlayer from "react-player";
// import ReCAPTCHA from "react-google-recaptcha";

// export default function HowItWorks() {
//   const [openStep, setOpenStep] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [capVal, setCapVal] = useState(null);

//   // Cleanup effect for recaptcha
//   useEffect(() => {
//     return () => {
//       setCapVal(null); // Reset reCAPTCHA
//     };
//   }, []);

//   const onReCAPTCHAChange = (value) => {
//     setCapVal(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate reCAPTCHA
//     if (!capVal) {
//       setError("Please complete the reCAPTCHA verification");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);

//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch('/api/waitlist', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ...formData,
//           recaptchaToken: capVal
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit form');
//       }

//       // Reset form on success
//       setFormData({ name: "", phone: "", email: "" });
//       setCapVal(null);
//       setIsOpen(false);
//       alert('Successfully joined the waitlist!');
      
//     } catch (error) {
//       console.error('Form submission error:', error);
//       setError('Failed to submit form. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setError(null); // Clear any previous errors
//   };

//   const toggleStep = (id) => {
//     setOpenStep(openStep === id ? null : id);
//   };

//   const steps = [
//     {
//       id: 1,
//       title: "Real Instrument Integration",
//       text: "Offers a realistic playing experience that enhances learning and engagement by allowing musicians to use their own instruments.",
//     },
//     {
//       id: 2,
//       title: "Immersive Live Stage Experience",
//       text: "Delivers an engaging, dream-like experience that combines entertainment with skill-building, offering a sense of achievement and belonging.",
//     },
//     {
//       id: 3,
//       title: "AI-Driven Performance Feedback",
//       text: "Helps users improve their musical skills efficiently, as they receive detailed, actionable insights on how to enhance their performance.",
//     },
//     {
//       id: 4,
//       title: "Virtual Interaction with Music Icons",
//       text: "Makes the experience more engaging and motivating by enabling users to receive personalized coaching from legendary artists.",
//     },
//     {
//       id: 5,
//       title: "Social and Collaborative Features",
//       text: "Promotes collaboration and community-building, creating a vibrant network of users who can learn from each other.",
//     },
//     {
//       id: 6,
//       title: "VR Compatibility",
//       text: "Enhances the realism and depth of the music experience, making it feel like users are on a real stage with live audiences.",
//     },
//   ];

//   return (
//     <div className="relative pattern-background">
//       <div className="pattern-overlay"></div>
//       <div className="relative z-10 min-h-screen flex flex-col items-center py-10 px-4 md:py-16 md:px-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
//           Why OneOfUs is one of a kind music app
//         </h1>

//         <div className="w-full max-w-4xl space-y-6 mx-auto p-4">
//           {steps.map((step) => (
//             <div key={step.id} className="border-b pb-4 md:pb-6">
//               <div
//                 className="flex justify-between items-center cursor-pointer py-2"
//                 onClick={() => toggleStep(step.id)}
//               >
//                 <h2 className="text-lg md:text-xl font-semibold text-white-700">
//                   {step.id}. {step.title}
//                 </h2>
//                 <span className="text-purple-900 text-xl md:text-2xl">
//                   {openStep === step.id ? "×" : "+"}
//                 </span>
//               </div>
//               {openStep === step.id && (
//                 <div className="mt-3 md:mt-4 space-y-3 md:space-y-4">
//                   <p className="text-white-600 text-sm md:text-base">
//                     {step.text}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-10">
//           <button
//             onClick={() => setIsOpen(true)}
//             className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0"
//           >
//             <span>→</span>
//             Get on the waitlist for this exciting app
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-md relative">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             <div className="text-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                 Join the Waitlist
//               </h2>
//               <p className="text-gray-600">
//                 Get early access to our innovative platform
//               </p>
//             </div>

//             {error && (
//               <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
//                 {error}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
//                 />
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Address"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
//                 />
//               </div>

//               <div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Contact Number"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
//                 />
//               </div>

//               {/* <div className="flex justify-center">
//               <ReCAPTCHA
//                   sitekey="6LcsM9cqAAAAAFJUjYWibNwgPAwOEkTVcqApXm1V"
//                   onChange={onReCAPTCHAChange}
//                   onError={() => {
//                     setError('reCAPTCHA error occurred. Please try again.');
//                   }}
//                 />
//               </div> */}

//               <button
//                 type="submit"
//                 disabled={isLoading || !capVal}
//                 className="w-full bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white py-3 rounded-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isLoading ? (
//                   <span className="flex items-center justify-center">
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Processing...
//                   </span>
//                 ) : (
//                   "Join Waitlist"
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




"use client";

import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import ReCAPTCHA from "react-google-recaptcha";
import WaitlistPopup from '../WaitlistPopup';


export default function HowItWorks() {
  const [openStep, setOpenStep] = useState(null);
  
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [capVal, setCapVal] = useState(null);

  // Cleanup effect for recaptcha
  useEffect(() => {
    return () => {
      setCapVal(null); // Reset reCAPTCHA
    };
  }, []);

  const onReCAPTCHAChange = (value) => {
    setCapVal(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate reCAPTCHA
    if (!capVal) {
      setError("Please complete the reCAPTCHA verification");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: capVal
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Reset form on success
      setFormData({ name: "", phone: "", email: "" });
      setCapVal(null);
      setIsOpen(false);
      alert('Successfully joined the waitlist!');
      
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null); // Clear any previous errors
  };

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };

  const steps = [
    {
      id: 1,
      title: "Real Instrument Integration",
      text: " We offer a realistic playing experience that boosts learning and engagement, letting musicians play with their own instruments!",
    },
    {
      id: 2,
      title: "Immersive Live Stage Experience",
      text: "We deliver an engaging, dream-like experience that blends entertainment and skill-building, giving you a sense of achievement and belonging!",
    },
    {
      id: 3,
      title: "AI-Driven Performance Feedback",
      text: "We help users rapidly elevate their musical skills with detailed, actionable insights for peak performance!",
    },
    {
      id: 4,
      title: "Virtual Interaction with Music Icons",
      text: "We make the experience more engaging and motivating by offering personalized coaching from legendary artists!",
    },
    {
      id: 5,
      title: "Social and Collaborative Features",
      text: "We foster collaboration and community, connecting users in a vibrant network to learn, grow, and thrive together!",
    },
    {
      id: 6,
      title: "VR Compatibility",
      text: "We amplify the realism and depth of the music experience, making users feel like they're on a real stage with a live audience!",
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

      <div className="flex justify-center mt-10">
        {/* <button
          onClick={() => setIsOpen(true)}
          className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0"
        >
          <span>→</span>
          Get on the waitlist for this exciting app
        </button> */}

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
          <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-md relative">
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

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Join the Waitlist
              </h2>
              <p className="text-gray-600">
                Get early access to our innovative platform
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                {error}
              </div>
            )}

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

              {/* <div className="flex justify-center">
              <ReCAPTCHA
                  sitekey="6LcsM9cqAAAAAFJUjYWibNwgPAwOEkTVcqApXm1V"
                  onChange={onReCAPTCHAChange}
                  onError={() => {
                    setError('reCAPTCHA error occurred. Please try again.');
                  }}
                />
              </div> */}

              <button
                type="submit"
                disabled={isLoading || !capVal}
                className="w-full bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white py-3 rounded-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Join Waitlist"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

            <WaitlistPopup isOpen={isOpen} setIsOpen={setIsOpen} />
      
    </div>
  );
}