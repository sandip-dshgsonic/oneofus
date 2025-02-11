// pages/use-cases.js
import React from 'react';
import Image from 'next/image';

const UseCasesPage = () => {
  const useCases = [
    {
      icon: '⏱️',
      title: 'Save Time',
      description: 'Focus on what matters. Let AI handle the busywork of organizing your notes so you can reclaim your time and dedicate it to high-impact tasks.'
    },
    {
      icon: '📋',
      title: 'Get More Done',
      description: 'Boost your productivity. Capture thoughts quickly, stay on top of your workload, and move through tasks with greater efficiency.'
    },
    {
      icon: '🧠',
      title: 'Work Smart, Not Hard',
      description: 'Leverage AI for effortless organization. TalkNotes makes it easy to stay productive and efficient without the hassle of manual note-taking.'
    },
    {
      icon: '🚀',
      title: 'Get Ahead Instead of Left Behind',
      description: 'Stay competitive in an AI-driven world. Using AI isn\'t optional — it\'s essential. Keep pace with modern tools to maintain your edge.'
    },
    {
      icon: '📑',
      title: 'Stay Organized',
      description: 'Turn chaos into clarity. With customizable templates and automatic structuring, TalkNotes ensures that every thought and idea is right where you need it.'
    },
    {
      icon: '✔️',
      title: 'Never Miss a Thing',
      description: 'Capture every idea, every detail. TalkNotes helps you avoid information overload by keeping all your thoughts organized and accessible whenever you need them.'
    }
  ];

  const testimonials = [
    {
      name: 'Thomas Mickeleit',
      company: 'KommunikationNeuDenken',
      quote: '"The quality of the transcriptions is fantastic and require virtually no rework. Compared to incomparably more expensive tools, the results are dimensions better."',
      avatar: '/Images/unnamed.webp'
    },
    {
      name: 'Unknown User',
      company: '',
      quote: '"I\'ve started using TalkNotes for my work and it has helped me save a lot of time. When I have a meeting, I just record it and let it transcribe everything and summarize it. When having an idea, or..."',
      avatar: '/Images/strawberries-frisch-ripe-sweet-89778.jpeg'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Here is how TalkNotes can help you
      </h1>

      {/* Use Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mb-12">
        {useCases.map((useCase, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="text-4xl mb-4">{useCase.icon}</div>
            <h2 className="text-xl font-semibold mb-4">{useCase.title}</h2>
            <p className="text-gray-600">{useCase.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity mb-12">
        → Try TalkNotes free for 7 days
      </button>

      {/* Testimonials */}
      <div className="max-w-3xl w-full space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg flex items-start space-x-4">
            <Image 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              width={64} 
              height={64} 
              className="rounded-full"
            />
            <div>
              <p className="text-gray-700 italic mb-2">
                {testimonial.quote}
              </p>
              <p className="text-gray-500">
                {testimonial.name ? `- ${testimonial.name}` : ''}
                {testimonial.company ? `, from ${testimonial.company}` : ''}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCasesPage;