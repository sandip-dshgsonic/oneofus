// import Image from "next/image";
// import { Play, Mic, Trash2 } from "lucide-react";

// const Hero = () => {
//   return (
//     <div className="pt-16 md:pt-20 pb-8 md:pb-12 mt-9">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8 lg:mb-16">
//           {/* Left Column */}
//           <div className="text-center lg:text-left">
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
//               Transform The Music Industry By Integrating VR And
//               <span className="text-purple-600">
//                 {" "}
//                 AI Into An Innovative Music Platform.
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
//               Interactive Effective Learn Perform
//             </p>

//             <p className="text-sm md:text-base text-gray-600 mb-4">
//               Play alongside iconic stars from the past and present in a virtual
//               setting, receiving real-time feedback and enjoying social
//               interactions that enhance musical skill development.
//             </p>

//             <button className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0">
//               <span>→</span>
//               Get on the waitlist for this exciting app
//             </button>
//           </div>

//           {/* Right Column */}
//           <div className="relative flex justify-center w-full max-w-sm mx-auto lg:max-w-none">
//             <img
//               src="/Images/guitarist_static.gif" // Replace with your actual image path
//               alt="Demo"
//               className="w-full h-auto object-cover rounded-lg"
//             />
//           </div>
//         </div>

//         {/* Platform Logos */}
//         <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-12 md:mt-20">
//           {[
//             "sp-medium.svg",
//             "sp-ih.svg",
//             "sp-foundr.svg",
//             "sp-scoopit.svg",
//           ].map((logo) => (
//             <Image
//               key={logo}
//               src={`/Images/${logo}`}
//               alt={logo.split(".")[0]}
//               width={120}
//               height={40}
//               className="opacity-60 hover:opacity-80 transition-opacity"
//             />
//           ))}
//         </div>

//         {/* Bouncing Arrow */}
//         <div className="flex justify-center mt-8 md:mt-12">
//           <div className="animate-bounce">
//             <svg
//               className="w-8 h-8 md:w-12 md:h-12 text-gray-400"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path d="M19 14l-8 8m0 0l-8-8m8 8"></path>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



'use client';
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
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

  return (
    <div className="pt-16 md:pt-20 pb-8 md:pb-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8 lg:mb-16">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Transform The Music Industry By Integrating VR And
              <span className="text-purple-600">
                {" "}
                AI Into An Innovative Music Platform.
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Interactive Effective Learn Perform
            </p>

            <p className="text-sm md:text-base text-gray-600 mb-4">
              Play alongside iconic stars from the past and present in a virtual
              setting, receiving real-time feedback and enjoying social
              interactions that enhance musical skill development.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0"
            >
              <span>→</span>
              Get on the waitlist for this exciting app
            </button>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center w-full max-w-sm mx-auto lg:max-w-none">
            <img
              src="/Images/guitarist_static.gif"
              alt="Demo"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Platform Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-12 md:mt-20">
          {["sp-medium.svg", "sp-ih.svg", "sp-foundr.svg", "sp-scoopit.svg"].map(
            (logo) => (
              <Image
                key={logo}
                src={`/Images/${logo}`}
                alt={logo.split(".")[0]}
                width={120}
                height={40}
                className="opacity-60 hover:opacity-80 transition-opacity"
              />
            )
          )}
        </div>

        {/* Bouncing Arrow */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 md:w-12 md:h-12 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-8 8m0 0l-8-8m8 8"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
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
};

export default Hero;