import React from 'react';

interface ButtonGroupProps {
  buttons: string[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <div className="flex flex-col ml-16 mt-4">
      {buttons.map((text, index) => (
        <button 
          key={index}
          className="w-full px-4 py-2 text-blue-800 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300 mb-4"
        >
          {text}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;





