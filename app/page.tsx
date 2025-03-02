"use client";

import { useState } from "react";
import HeadingText from "@/components/ui/heading-text";
import NewBook from "@/components/ui/new-book";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FiSearch, FiFilter } from "react-icons/fi";

export default function Home() {
  const books = useQuery(api.book.getBook);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  // Filter books based on search term
  const filteredBooks = books
    ? books
        .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => (sortOrder === "latest" ? b.createdAt - a.createdAt : a.createdAt - b.createdAt))
    : [];

  return (
    <div className="w-full h-full">
      <div className="mx-auto max-w-screen-xl p-4 flex flex-col">
        <div className="flex items-center w-full justify-between">
          <HeadingText
            title="WritersWorld"
            description="The place to create, share, and read content from around the world"
          />
          <NewBook />
        </div>

        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 p-4 rounded-lg shadow-sm">
          {/* Search Bar */}
          <div className="relative w-full md:w-2/3">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search for books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 p-2 border border-neutral-300 rounded-md dark:bg-gray-900 dark:text-white"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
            <button
              onClick={() => setSortOrder("latest")}
              className={`flex items-center px-4 py-2 rounded-md ${
                sortOrder === "latest" ? "bg-yellow-500 text-white" : "bg-gray-300"
              }`}
            >
              <FiFilter className="mr-2" /> Newest First
            </button>
            <button
              onClick={() => setSortOrder("oldest")}
              className={`flex items-center px-4 py-2 rounded-md ${
                sortOrder === "oldest" ? "bg-yellow-500 text-white" : "bg-gray-300"
              }`}
            >
              <FiFilter className="mr-2" /> Oldest First
            </button>
          </div>
        </div>

        {/* Books Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book._id} className="p-4  rounded-md shadow-sm">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Created: {new Date(book.createdAt).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 mt-6">
              No books found. Try creating one!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
