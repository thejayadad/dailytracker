"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import React from "react";
import { Id } from "@/convex/_generated/dataModel";
import { useParams } from "next/navigation";

const SingleBookPage = () => {
  const params = useParams();
  const bookId = params?.id as string;

  if (!bookId) {
    return <div className="text-center text-red-500 mt-10">Invalid Book ID</div>;
  }

  const documentId: Id<"books"> = bookId as Id<"books">;
  const book = useQuery(api.book.getBookById, { id: documentId });

  // Handle loading state
  if (book === undefined) {
    return <div className="text-center text-gray-500 mt-10">Loading book...</div>;
  }

  // Handle book not found case
  if (!book) {
    return <div className="text-center text-red-500 mt-10">Book not found.</div>;
  }

  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-screen-xl p-4 flex flex-col w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 h-[60vh]">
          <div className="col-span-1  p-6 rounded-lg">
            {/* Book Preview */}
            <div
              className={`w-full h-full flex items-center justify-center  shadow-lg ${
                book.roundedCorners ? "rounded-lg" : "rounded-none"
              }`}
              style={{
                backgroundColor: book.backgroundColor || "#F3F4F6",
                color: book.textColor || "#000",
              }}
            >
              <p className="text-lg font-semibold">{book.title}</p>
            </div>
          </div>

          <div className="col-span-1">
            {/* Book Details */}
            <h1 className="text-2xl font-bold">{book.title}</h1>
            {book._id}
            <p className="text-gray-600 dark:text-gray-300">Author: {book.author || "Unknown"}</p>
            <p className="text-gray-500 text-sm">
              Created: {new Date(book.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookPage;
