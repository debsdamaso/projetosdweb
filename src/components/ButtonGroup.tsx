// components/ButtonGroup.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonGroupProps {
  buttons: { text: string; route: string }[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <div className="flex flex-col ml-16 mt-4">
      {buttons.map(({ text, route }, index) => (
        <Link href={route} key={index}>
          <button className="w-full px-4 py-2 text-blue-800 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition duration-300 mb-4">
            {text}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default ButtonGroup;




