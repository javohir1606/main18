import React, { useState, useEffect } from "react";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; 
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6">
      <div className="flex space-x-4 mb-10 pt-40">
        <Button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
        <Button onClick={() => setIsModalOpen(true)} variant="secondary">
          Open Modal
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Modal Content</h2>
        <p className="text-gray-700 dark:text-gray-300">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem minima ab, nostrum iste omnis vitae pariatur vero, similique consequuntur, ullam magnam voluptas blanditiis tenetur doloremque harum! Error omnis vel doloremque illo at voluptatum sint impedit necessitatibus quaerat atque, exercitationem fugiat itaque facilis nulla commodi, asperiores accusamus veritatis! Accusantium, quod nobis!
        </p>
      </Modal>
    </div>
  );
}

export default App;
