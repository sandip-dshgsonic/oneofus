// src/app/components/StylesSelector.jsx


'use client';
import React, { useState } from 'react';
import { 
  DocumentTextIcon, 
  DocumentIcon, 
  NewspaperIcon, 
  LinkIcon, 
  ChatBubbleLeftIcon, 
  DocumentDuplicateIcon 
} from '@heroicons/react/24/outline';

const styles = [
  {
    id: 'blog-post',
    title: 'Blog post',
    description: 'Transform voice notes into a structured blog post, with clear headings and paragraphs.',
    icon: DocumentTextIcon
  },
  {
    id: 'video-script',
    title: 'Video Script',
    description: 'Organize voice notes into a script for videos, ensuring clarity and flow.',
    icon: DocumentIcon
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    description: 'Turn voice notes into a newsletter, with a friendly and engaging tone.',
    icon: NewspaperIcon
  },
  {
    id: 'linkedin-post',
    title: 'LinkedIn Post',
    description: 'Turn voice notes into a LinkedIn post, using emojis and a friendly tone.',
    icon: LinkIcon
  },
  {
    id: 'journal',
    title: 'Journal',
    description: 'Turn voice notes into a journal entry, adding today\'s date and maintaining the tone of voice.',
    icon: DocumentDuplicateIcon
  },
  {
    id: 'note',
    title: 'Note',
    description: 'Simplify and clarify ideas, keeping only the important points with simple sentences.',
    icon: DocumentIcon
  },
  {
    id: 'task-list',
    title: 'Task List',
    description: 'Convert voice notes into a task list using "-" for tasks without numbers.',
    icon: DocumentIcon
  },
  {
    id: 'tweet',
    title: 'Tweet',
    description: 'Create a short tweet from voice notes, keeping it casual and friendly.',
    icon: ChatBubbleLeftIcon
  }
];

export default function StylesSelector() {
  const [isCustomStyleModalOpen, setIsCustomStyleModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">+100 premade styles to pick from</h1>
        <p className="text-gray-600">
          Boost your productivity with styles for every need. From task lists and meeting notes to full transcripts, TalkNotes helps you turn ideas into action!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {styles.map((style) => (
          <div 
            key={style.id} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <style.icon className="w-5 h-10 text-purple-600 mr-4" />
              <h3 className="text-xl font-semibold text-gray-800">{style.title}</h3>
            </div>
            <p className="text-gray-600">{style.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button 
          onClick={() => setIsCustomStyleModalOpen(true)}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Create Custom Style
        </button>
      </div>
    </div>
  );
}