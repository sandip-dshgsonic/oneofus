// components/CustomStyleModal.tsx
import React, { useState } from 'react';

interface CustomStyleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CustomStyleModal: React.FC<CustomStyleModalProps> = ({ isOpen, onClose }) => {
  const [customStyle, setCustomStyle] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your custom style creation logic here
    console.log('Custom Style:', customStyle);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add a custom style</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={customStyle}
            onChange={(e) => setCustomStyle(e.target.value)}
            placeholder="Describe the style you want to create..."
            className="w-full h-40 border rounded-lg p-4 mb-4"
          />
          <div className="flex justify-end space-x-4">
            <button 
              type="button" 
              onClick={onClose} 
              className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
            >
              Create Style
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomStyleModal;