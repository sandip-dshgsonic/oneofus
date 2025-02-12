import React from "react";
import Image from "next/image";
import {
  Brain,
  AudioWaveform, // Correct icon name from lucide-react
  Glasses,
  Users,
} from "lucide-react";

const UseCasesPage = () => {
  const useCases = [
    {
      Icon: Brain,
      title: "Advanced AI Algorithms",
      description:
        "The software uses AI to analyze user performance, detect discrepancies, and provide constructive feedback. The AI is trained to recognize different musical patterns, chords, and rhythms, offering tailored recommendations to improve user technique.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      Icon: AudioWaveform, // Using the correct icon component
      title: "Real-Time Audio Analysis",
      description:
        "The software’s core AI engine can translate sound waves from real instruments into digital signals, ensuring low latency and accurate feedback.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      Icon: Glasses,
      title: "VR Integration",
      description:
        "The platform supports major VR headsets, creating a realistic environment where users can not only play music but also interact with digital avatars, virtual band members, and audiences.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      Icon: Users,
      title: "Interactive 3D Avatars",
      description:
        "The use of AI-driven avatars adds a layer of realism to the experience, allowing users to engage in verbal and physical interactions with virtual musicians.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Why OneOfUs is the the bleeding edge of music technology
      </h1>

      {/* Use Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mb-12">
        {useCases.map((useCase, index) => {
          const { Icon, title, description, bgColor, iconColor } = useCase;
          return (
            <div
              key={index}
              className={`p-6 rounded-xl ${bgColor} hover:shadow-lg transition-all duration-300 ease-in-out`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${bgColor}`}>
                  <Icon className={`w-8 h-8 ${iconColor}`} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action Button */}
      {/* CTA Button */}
      <div className="flex justify-center mt-10">
        {/* <button className="w-[200px] xl:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-10">
          <span>→</span>
          Get on the waitlist for this exciting app
        </button> */}


<button className="w-full md:w-[400px] lg:w-[500px] bg-gradient-to-r from-[#ff007a] to-[#8a00ff] text-white px-4 md:px-10 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:from-[#e60071] hover:to-[#7500d9] transition-all duration-300 flex items-center justify-center gap-4 md:gap-10 mb-6 md:mb-0">
              <span>→</span>
              Get on the waitlist for this exciting app
            </button>
      </div>
    </div>
  );
};

export default UseCasesPage;
