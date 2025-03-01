"use client";

import React from "react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";

const NewBook = () => {
  const createBook = useMutation(api.book.createBook); // Use the correct mutation
  const router = useRouter(); // Initialize router for navigation

  const onCreate = async () => {
    const promise = createBook({ title: "Untitled" })
      .then((bookId) => {
        toast.success("New Book Created!");
        router.push(`/${bookId}`); // Redirect to book page
      })
      .catch(() => {
        toast.error("Failed to create the book.");
      });

    toast.promise(promise, {
      loading: "Creating a book...",
      success: "New Book created!",
      error: "Failed to create the book.",
    });
  };

  return (
    <div>
      <button onClick={onCreate} className="flex items-center space-x-1 bg-neutral-500 text-yellow-500 px-4 py-2 rounded-md">
        <FiPlus className="h-4 w-4" />
        <span>Create Book</span>
      </button>
    </div>
  );
};

export default NewBook;
