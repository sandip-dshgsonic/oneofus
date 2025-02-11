// 'use client';
// import React, { useEffect, useRef } from 'react';
// import { FileText, Video, Mail, Linkedin, Book, FileText as Note, ListTodo, Twitter, List, Mic, LayoutList, MoreHorizontal } from 'lucide-react';

// const styles = [
//   {
//     id: 'blog-post',
//     title: 'Blog post',
//     description: 'Transform voice notes into a structured blog post, with clear headings and paragraphs.',
//     icon: FileText
//   },
//   {
//     id: 'video-script',
//     title: 'Video Script',
//     description: 'Organize voice notes into a script for videos, ensuring clarity and flow.',
//     icon: Video
//   },
//   {
//     id: 'newsletter',
//     title: 'Newsletter',
//     description: 'Turn voice notes into a newsletter, with a friendly and engaging tone.',
//     icon: Mail
//   },
//   {
//     id: 'linkedin-post',
//     title: 'LinkedIn Post',
//     description: 'Turn voice notes into a LinkedIn post, using emojis and a friendly tone.',
//     icon: Linkedin
//   },
//   {
//     id: 'journal',
//     title: 'Journal',
//     description: "Turn voice notes into a journal entry, adding today's date and maintaining the tone of voice.",
//     icon: Book
//   },
//   {
//     id: 'note',
//     title: 'Note',
//     description: 'Simplify and clarify ideas, keeping only the important points with simple sentences.',
//     icon: Note
//   },
//   {
//     id: 'task-list',
//     title: 'Task List',
//     description: 'Convert voice notes into a task list using "-" for tasks without numbers.',
//     icon: ListTodo
//   },
//   {
//     id: 'tweet',
//     title: 'Tweet',
//     description: 'Create a short tweet from voice notes, keeping it casual and friendly.',
//     icon: Twitter
//   },
//   {
//     id: 'podcast-planner',
//     title: 'Podcast Planner',
//     description: 'Organize the main ideas from your voice notes and organize them into multiple podcast outlines.',
//     icon: List
//   },
//   {
//     id: 'podcast-script',
//     title: 'Podcast Script',
//     description: 'Create detailed scripts for podcast episodes from voice notes, forming a coherent narrative.',
//     icon: Mic
//   },
//   {
//     id: 'blog-post-planner',
//     title: 'Blog post planner',
//     description: 'Organize the main ideas in your voice note into multiple blog post outlines.',
//     icon: LayoutList
//   },
//   {
//     id: 'and-more',
//     title: 'And more...',
//     description: 'We add new styles frequently, and you can even create your own!',
//     icon: MoreHorizontal
//   }
// ];

// export default function StylesSelector() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-6">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-2">+100 premade styles to pick from</h1>
//         <p className="text-gray-600">
//           Boost your productivity with styles for every need. From task lists and meeting notes to full transcripts, TalkNotes helps you turn ideas into action!
//         </p>
//       </div>

//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
//           {styles.map((style) => (
//             <div 
//               key={style.id} 
//               className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
//             >
//               <div className="flex items-center gap-2 mb-2">
//                 <style.icon className="w-5 h-5 text-gray-800" strokeWidth={2} />
//                 <h3 className="text-base font-semibold text-gray-800">{style.title}</h3>
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">{style.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="max-w-5xl mx-auto mb-12">
//           <div className="flex flex-col lg:flex-row items-center gap-8">
//             <div className="lg:w-1/2 text-center lg:text-left">
//               <h2 className="text-3xl font-bold text-gray-800 mb-3">...or create your own!</h2>
//               <p className="text-gray-600">
//                 Can't find the perfect style or need something very specific? Give your own instructions for the AI to follow in just a few clicks. Your creativity is the only limit!
//               </p>
//             </div>
            
//             <div className="lg:w-1/2">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <video 
//                   ref={videoRef}
//                   className="w-full aspect-video object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                 >
//                   <source src="/Videos/custom-style.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="text-center">
//           <a 
//             href="#"
//             className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
//           >
//             → Try TalkNotes free for 7 days
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import React, { useEffect, useRef } from 'react';
import { FileText, Video, Mail, Linkedin, Book, FileText as Note, ListTodo, Twitter, List, Mic, LayoutList, MoreHorizontal } from 'lucide-react';

const styles = [
  {
    id: 'blog-post',
    title: 'Blog post',
    description: 'Transform voice notes into a structured blog post, with clear headings and paragraphs.',
    icon: FileText
  },
  {
    id: 'video-script',
    title: 'Video Script',
    description: 'Organize voice notes into a script for videos, ensuring clarity and flow.',
    icon: Video
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    description: 'Turn voice notes into a newsletter, with a friendly and engaging tone.',
    icon: Mail
  },
  {
    id: 'linkedin-post',
    title: 'LinkedIn Post',
    description: 'Turn voice notes into a LinkedIn post, using emojis and a friendly tone.',
    icon: Linkedin
  },
  {
    id: 'journal',
    title: 'Journal',
    description: "Turn voice notes into a journal entry, adding today's date and maintaining the tone of voice.",
    icon: Book
  },
  {
    id: 'note',
    title: 'Note',
    description: 'Simplify and clarify ideas, keeping only the important points with simple sentences.',
    icon: Note
  },
  {
    id: 'task-list',
    title: 'Task List',
    description: 'Convert voice notes into a task list using "-" for tasks without numbers.',
    icon: ListTodo
  },
  {
    id: 'tweet',
    title: 'Tweet',
    description: 'Create a short tweet from voice notes, keeping it casual and friendly.',
    icon: Twitter
  },
  {
    id: 'podcast-planner',
    title: 'Podcast Planner',
    description: 'Organize the main ideas from your voice notes and organize them into multiple podcast outlines.',
    icon: List
  },
  {
    id: 'podcast-script',
    title: 'Podcast Script',
    description: 'Create detailed scripts for podcast episodes from voice notes, forming a coherent narrative.',
    icon: Mic
  },
  {
    id: 'blog-post-planner',
    title: 'Blog post planner',
    description: 'Organize the main ideas in your voice note into multiple blog post outlines.',
    icon: LayoutList
  },
  {
    id: 'and-more',
    title: 'And more...',
    description: 'We add new styles frequently, and you can even create your own!',
    icon: MoreHorizontal
  }
];

export default function StylesSelector() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">+100 premade styles to pick from</h1>
        <p className="text-gray-600">
          Boost your productivity with styles for every need. From task lists and meeting notes to full transcripts, TalkNotes helps you turn ideas into action!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-16">
        {styles.map((style) => (
          <div 
            key={style.id} 
            className="bg-white w-full max-w-[280px] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <style.icon className="w-5 h-5 text-gray-800" strokeWidth={2} />
              <h3 className="text-[17px] font-semibold text-gray-800">{style.title}</h3>
            </div>
            <p className="text-gray-600 text-[15px] leading-relaxed">{style.description}</p>
          </div>
        ))}
      </div>

      {/* Rest of the component remains the same */}
      {/* Custom Style Section with Video */}
      <div className="max-w-6xl mx-auto pb-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">...or create your own!</h2>
            <p className="text-gray-600 mb-8">
              Can't find the perfect style or need something very specific? Give your own instructions for the AI to follow in just a few clicks. Your creativity is the only limit!
            </p>
          </div>
          
          {/* Video Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-3/4">
              <video 
                ref={videoRef}
                className="w-full aspect-video object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/Videos/custom-style.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Try TalkNotes Button */}
      <div className="text-center">
      <a 
          href="#"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          → Try TalkNotes free for 7 days
        </a>
      </div>
    </div>
  );
}