import React from 'react';
import clsx from 'clsx';

export default function Modal({ isOpen, onClose, children }) {
  return (
    <div
      className={clsx(
        'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300',
        { 'opacity-0 pointer-events-none': !isOpen, 'opacity-100': isOpen }
      )}
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 scale-95"
        style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)' }}
      >
        <button
          className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-red-600"
          onClick={onClose}
        >
          ❌
        </button>
        <h2 className="text-xl font-bold mb-4">Modal Content</h2>
        <p className="text-gray-700 dark:text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum,  <br />dolor sit amet
         consectetur adipisicing elit. 
        </p>
      </div>
    </div>
  );
}
