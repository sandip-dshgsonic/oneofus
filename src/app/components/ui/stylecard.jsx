// components/StyleCard.tsx
import React from 'react';

interface StyleCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const StyleCard: React.FC<StyleCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
      <div className="flex items-center mb-4">
        <Icon className="w-10 h-10 text-purple-600 mr-4" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default StyleCard;