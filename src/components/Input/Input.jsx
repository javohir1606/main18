import React from 'react';
import clsx from 'clsx';

export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(
        'px-4 py-2 rounded border transition duration-200 ease-in-out',
        'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300',
        'bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-2 dark:focus:ring-blue-300 shadow-sm'
      )}
    />
  );
}
