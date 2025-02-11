// pages/how-it-works.js

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';

export default function HowItWorks() {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };

  const steps = [
    {
      id: 1,
      title: "Record with One Button",
      text: "Effortlessly capture your thoughts with a single tap. Start recording instantly and let TalkNotes run in the background, so you can stay focused on what matters without interruptions.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "Select Your Style",
      text: "Customize your notes to match your workflow. Choose from different formats and layouts for easy readability.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Transcribe & Summarize with 99% Accuracy",
      text: "Our AI-driven technology ensures near-perfect transcription and summarization, so you never miss an important detail.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 4,
      title: "Edit, then Share & Export Notes Easily",
      text: "Refine your notes, share with your team, and export in multiple formats effortlessly.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Take Notes in Seconds, Stay Ahead for Hours
      </h1>

      <div className="w-full max-w-4xl space-y-6 mx-auto p-4">
        {steps.map((step) => (
          <div key={step.id} className="border-b pb-6">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleStep(step.id)}
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {step.id}. {step.title}
              </h2>
              <span className="text-gray-400 text-2xl">
                {openStep === step.id ? "×" : "+"}
              </span>
            </div>
            {openStep === step.id && (
              <div className="mt-4 space-y-4">
                <p className="text-gray-600">{step.text}</p>
                <div className="relative w-full h-48">
                  <ReactPlayer url={step.videoUrl} width="100%" height="100%" controls />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="mt-12">
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
          → Try TalkNotes free for 7 days
        </button>
      </div>

      {/* Testimonials */}
      <div className="mt-16 max-w-3xl w-full space-y-6">
        <div className="bg-gray-100 p-6 rounded-lg flex items-start space-x-4">
          <Image
            src="/Images/73x73.png"
            alt="Elwyn Davies"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <p className="text-gray-700 italic mb-2">
              "So simple, yet effective. I use TalkNotes to write most of our blog posts. I would highly recommend to those looking to up their content game."
            </p>
            <p className="text-gray-500">- Elwyn Davies, from Pixelhaze Studio</p>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg flex items-start space-x-4">
          <Image
            src="/Images/original.avif"
            alt="Iskandar Charca"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <p className="text-gray-700 italic mb-2">
              "This is really helpful for taking notes on the fly. The app is user friendly, easy to use, and does exactly as advertised."
            </p>
            <p className="text-gray-500">- Iskandar Charca, review from Product Hunt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
