"use client";

import React, { useState } from "react";
import Logo from "./logo";
import NewBookForm from "../form/new-book-form";

const BookModal = () => {
    const [isOpen, setIsOpen] = useState(false);


  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

const handleBookSubmit = (book: any) => {
  console.log("Book Saved:", book);
};
  return (
    <>
        <button
         onClick={toggleDrawer}
        className="p-2 bg-gray-800 text-white rounded-md"
        >
            Post Book
        </button>

           {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-90 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
            {/* Side Drawer */}
            <div
        className={`fixed top-0 left-0 h-full w-90 bg-white  shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
           <div className="p-4 border-b border-neutral-100 dark:border-neutral-700">
          <Logo />
          <button
            onClick={toggleDrawer}
            className="absolute top-4 right-4 text-gray-100 rounded-full bg-red-700 p-1 hover:text-gray-700 dark:text-gray-400"
          >
            ✕
          </button>
        </div>
        {/* Body (Book Form) */}

        <div className="p-4 flex-1 overflow-y-auto">
           <NewBookForm
          />
        </div>
        </div>

    </>
  )
}

export default BookModal