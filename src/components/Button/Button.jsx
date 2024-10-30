import React from "react";
import clsx from "clsx";

export default function Button({ children, onClick, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded transition-transform duration-200 ease-in-out transform",
        variant === "primary"
          ? "bg-blue-500 text-white hover:bg-blue-600 active:scale-95"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300 active:scale-95",
        "dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:active:bg-gray-600 shadow-md hover:shadow-lg"
      )}
    >
      {children}
    </button>
  );
}
