// "use client";
// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import dynamic from 'next/dynamic';

// // Dynamically import ReactPlayer to avoid SSR issues
// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

// const Hero = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//   });
//   const [recaptchaValue, setRecaptchaValue] = useState(null);
//   const [hasWindow, setHasWindow] = useState(false);
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);

//   // Check if window is available (client-side only)
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setHasWindow(true);
//     }
//   }, []);

//   const handleRecaptchaChange = (value) => {
//     setRecaptchaValue(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!recaptchaValue) {
//       alert("Please complete the reCAPTCHA verification");
//       return;
//     }

//     // Here you would typically verify the reCAPTCHA token server-side
//     // Handle form submission logic here
//     console.log("Form submitted:", formData);
//     console.log("reCAPTCHA token:", recaptchaValue);

//     setIsOpen(false);
//     setFormData({ name: "", phone: "", email: "" });
//     setRecaptchaValue(null);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handlePlayClick = () => {
//     if (videoRef.current) {
//       videoRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="pt-16 md:pt-20 pb-8 md:pb-12 mt-16">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8 lg:mb-16">
//           {/* Left Column */}
//           <div className="text-center lg:text-left">
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#0378c0]">
//               Transform The Music Industry By Integrating VR And
             
//                 AI Into An Innovative Music Platform.
             
//             </h1>
//             <p className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
//               Interactive Effective Learn Perform
//             </p>

//             <p className="text-sm md:text-base text-gray-600 mb-4">
//               Play alongside iconic stars from the past and present in a virtual
//               setting, receiving real-time feedback and enjoying social
//               interactions that enhance musical skill development.
//             </p>

//             <button
//               onClick={() => setIsOpen(true)}
//               className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0"
//             >
//               <span>→</span>
//               Get on the waitlist for this exciting app
//             </button>
//           </div>

//           {/* Right Column */}
//           <div className="relative flex justify-center w-full max-w-sm mx-auto lg:max-w-none">
//             <img
//               src="/Images/OUR VISION.png"
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
//           <div 
//             className="animate-bounce cursor-pointer" 
//             onClick={handlePlayClick}
//             title="Watch demo video"
//           >
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

        // {/* Video Section with Enhanced Frame */}
        // <div ref={videoRef} className="mt-16 mb-16 relative">
        //   <div className="text-center mb-8">
        //     <h2 className="text-2xl md:text-3xl font-bold text-[#0378c0] mb-3">
        //       Experience The Future of Music
        //     </h2>
        //     <p className="text-gray-600 max-w-3xl mx-auto">
        //       See how our innovative platform combines VR and AI to create an immersive musical experience
        //       unlike anything you've ever seen before.
        //     </p>
        //   </div>
          
        //   {/* Premium Video Frame */}
        //   <div className="relative mx-auto max-w-4xl">
        //     {/* Outer decorative frame */}
        //     <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
            
        //     {/* Inner frame with 3D effect */}
        //     <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-2xl shadow-2xl">
        //       <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-sm opacity-50"></div>
              
        //       {/* Video container with inner shadow */}
        //       <div className="relative bg-[#111827] rounded-xl p-0.5 backdrop-blur-xl overflow-hidden shadow-inner">
        //         {/* Decorative corners */}
        //         <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#0378c0] rounded-tl-lg z-10"></div>
        //         <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#8a00ff] rounded-tr-lg z-10"></div>
        //         <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#ff007a] rounded-bl-lg z-10"></div>
        //         <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#ff007a] rounded-br-lg z-10"></div>
                
        //         {/* Shine effect */}
        //         <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none z-10">
        //           <div className="absolute -inset-[200%] top-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform rotate-45 translate-x-1/2 animate-[shine_6s_ease-in-out_infinite]"></div>
        //         </div>
                
        //         {/* Video player with autoplay and muted */}
        //         {hasWindow && (
        //           <div className="bg-black rounded-xl overflow-hidden" style={{ paddingTop: '56.25%', position: 'relative' }}>
        //             <ReactPlayer
        //               ref={playerRef}
        //               url="/Videos/Oneofus.mp4"
        //               width="100%"
        //               height="100%"
        //               style={{ position: 'absolute', top: 0, left: 0 }}
        //               playing={true}
        //               muted={true}
        //               loop={true}
        //               controls={true}
        //               playsinline={true}
        //               onReady={() => console.log('Video ready')}
        //               onError={(e) => console.error('Video error:', e)}
        //               config={{
        //                 file: {
        //                   attributes: {
        //                     controlsList: "nodownload",
        //                     disablePictureInPicture: true,
        //                     autoPlay: true,
        //                     muted: true,
        //                   },
        //                   forceVideo: true,
        //                 },
        //               }}
        //             />
        //           </div>
        //         )}
                
        //         {/* Fallback for when ReactPlayer can't load */}
        //         {!hasWindow && (
        //           <div className="bg-black rounded-xl overflow-hidden" style={{ paddingTop: '56.25%', position: 'relative' }}>
        //             <div className="absolute inset-0 flex items-center justify-center">
        //               <div className="text-white text-lg">Loading video player...</div>
        //             </div>
        //           </div>
        //         )}
        //       </div>
        //     </div>            
        //     {/* Extra glow effects */}
        //     <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
        //     <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-10"></div>
        //   </div>
          
        //   {/* Unmute instruction */}
        //   <div className="text-center mt-4">
        //     <p className="text-gray-500 text-sm">🔊 Click the video to unmute</p>
        //   </div>
          
        //   {/* Call to action below video */}
        //   <div className="text-center mt-8">
        //     <p className="text-gray-600 mb-4">Ready to transform your musical journey?</p>
        //     <button
        //       onClick={() => setIsOpen(true)}
        //       className="bg-gradient-to-r from-[#0378c0] to-[#8a00ff] text-white px-6 py-3 rounded-lg font-medium hover:from-[#0360a0] hover:to-[#7500d9] transition-all duration-300 shadow-lg"
        //     >
        //       Join the Waitlist Now
        //     </button>
        //   </div>
        // </div>
      // </div>

//       {/* Modal Overlay */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 mt-9">
//           {/* Modal Content */}
//           <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-md relative">
//             {/* Close Button */}
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

//             {/* Form Header */}
//             <div className="text-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                 Join the Waitlist
//               </h2>
//               <p className="text-gray-600">
//                 Get early access to our innovative platform
//               </p>
//             </div>

//             {/* Form */}
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

//               {/* reCAPTCHA Component */}
//               {/* {6LcL7dYqAAAAAER3l4pvCbcoIryC6jAgWSz6yzjE  (secrete key)}
              
//               {6LcL7dYqAAAAAOSjiPzhd4BJQvURR7sFi2fnfVoZ} (site key)*/}

//               <div className="flex justify-center">
//                 <ReCAPTCHA
//                   sitekey="6LcL7dYqAAAAAER3l4pvCbcoIryC6jAgWSz6yzjE"
//                   onChange={handleRecaptchaChange}
//                 />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white py-3 rounded-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300"
//               >
//                 Join Waitlist
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;





"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import dynamic from 'next/dynamic';
import WaitlistPopup from '../WaitlistPopup';

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  // Check if window is available (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16 md:pt-20 pb-8 md:pb-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8 lg:mb-16">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#0378c0]">
              Transform The Music Industry By Integrating VR And AI Into An Innovative Music Platform.
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
              src="/Images/OUR VISION.png"
              alt="Demo"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Platform Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mt-12 md:mt-20">
          {[
            "sp-medium.svg",
            "sp-ih.svg",
            "sp-foundr.svg",
            "sp-scoopit.svg",
          ].map((logo) => (
            <Image
              key={logo}
              src={`/Images/${logo}`}
              alt={logo.split(".")[0]}
              width={120}
              height={40}
              className="opacity-60 hover:opacity-80 transition-opacity"
            />
          ))}
        </div>

        {/* Bouncing Arrow */}
        <div className="flex justify-center mt-8 md:mt-12">
          <div 
            className="animate-bounce cursor-pointer" 
            onClick={handlePlayClick}
            title="Watch demo video"
          >
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

        {/* Video Section with Enhanced Frame */}
        <div ref={videoRef} className="mt-16 mb-16 relative">
       {/* Video Section with Enhanced Frame */}
       <div ref={videoRef} className="mt-16 mb-16 relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0378c0] mb-3">
              Experience The Future of Music
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See how our innovative platform combines VR and AI to create an immersive musical experience
              unlike anything you've ever seen before.
            </p>
          </div>
          
          {/* Premium Video Frame */}
          <div className="relative mx-auto max-w-4xl">
            {/* Outer decorative frame */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
            
            {/* Inner frame with 3D effect */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1 rounded-2xl shadow-2xl">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-sm opacity-50"></div>
              
              {/* Video container with inner shadow */}
              <div className="relative bg-[#111827] rounded-xl p-0.5 backdrop-blur-xl overflow-hidden shadow-inner">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#0378c0] rounded-tl-lg z-10"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#8a00ff] rounded-tr-lg z-10"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#ff007a] rounded-bl-lg z-10"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#ff007a] rounded-br-lg z-10"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none z-10">
                  <div className="absolute -inset-[200%] top-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform rotate-45 translate-x-1/2 animate-[shine_6s_ease-in-out_infinite]"></div>
                </div>
                
                {/* Video player with autoplay and muted */}
                {hasWindow && (
                  <div className="bg-black rounded-xl overflow-hidden" style={{ paddingTop: '56.25%', position: 'relative' }}>
                    <ReactPlayer
                      ref={playerRef}
                      url="/Videos/Oneofus.mp4"
                      width="100%"
                      height="100%"
                      style={{ position: 'absolute', top: 0, left: 0 }}
                      playing={true}
                      muted={true}
                      loop={true}
                      controls={true}
                      playsinline={true}
                      onReady={() => console.log('Video ready')}
                      onError={(e) => console.error('Video error:', e)}
                      config={{
                        file: {
                          attributes: {
                            controlsList: "nodownload",
                            disablePictureInPicture: true,
                            autoPlay: true,
                            muted: true,
                          },
                          forceVideo: true,
                        },
                      }}
                    />
                  </div>
                )}
                
                {/* Fallback for when ReactPlayer can't load */}
                {!hasWindow && (
                  <div className="bg-black rounded-xl overflow-hidden" style={{ paddingTop: '56.25%', position: 'relative' }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-lg">Loading video player...</div>
                    </div>
                  </div>
                )}
              </div>
            </div>            
            {/* Extra glow effects */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500 rounded-full filter blur-3xl opacity-10"></div>
          </div>
          
          {/* Unmute instruction */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm">🔊 Click the video to unmute</p>
          </div>
          
          {/* Call to action below video */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Ready to transform your musical journey?</p>
            <button
              onClick={() => setIsOpen(true)}
              className="bg-gradient-to-r from-[#0378c0] to-[#8a00ff] text-white px-6 py-3 rounded-lg font-medium hover:from-[#0360a0] hover:to-[#7500d9] transition-all duration-300 shadow-lg"
            >
              Join the Waitlist Now
            </button>
          </div>
        </div>

        </div>
      </div>

      {/* Waitlist Popup */}
      <WaitlistPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default HeroSection;