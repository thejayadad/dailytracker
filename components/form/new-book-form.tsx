'use client'

import React from 'react'

interface BookFormProps {
    initialData?: {
        title?: string;
        author?: string;
        backgroundColor?: string;
        textColor?: string;
        roundedCorners?: string;
        coverStyle?: string;
        titlePosition?: string;
        authorPosition?: string;
        hasShadow?: boolean;
        borderThickness?: string;
        showSpine?: boolean;        
    }
    bookId?: string;
}


//    title: v.string(), // Required field
//     author: v.optional(v.string()),
//     backgroundColor: v.optional(v.string()),
//     textColor: v.optional(v.string()),
//     authorColor: v.optional(v.string()), // Optional author text color
//     coverImage: v.optional(v.string()),
//     roundedCorners: v.optional(v.boolean()),
//     coverStyle: v.optional(v.union(v.literal("flat"), v.literal("paged"))),
//     titlePosition: v.optional(v.union(v.literal("top"), v.literal("center"), v.literal("bottom"))),
//     authorPosition: v.optional(v.union(v.literal("top"), v.literal("center"), v.literal("bottom"))),
//     hasShadow: v.optional(v.boolean()),
//     borderThickness: v.optional(v.number()),
//     showSpine: v.optional(v.boolean()),

const NewBookForm: React.FC<BookFormProps>= ({initialData, bookId}) => {
  return (
    <div className='p-4'>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        {bookId ? "Update Book" : "Create a New Book"}
      </h2>
      <div>
        
      </div>
    </div>
  )
}

export default NewBookForm




// "use client";

// import React, { useState, useEffect } from "react";
// import { FiAlignLeft, FiAlignCenter, FiAlignRight, FiBook, FiLayers } from "react-icons/fi";

// interface BookData {
//   id?: string;
//   title: string;
//   author: string;
//   description: string;
//   coverColor: string;
//   textColor: string;
//   authorColor: string;
//   coverImage?: string;
//   roundedCorners: boolean;
//   coverStyle: "flat" | "paged";
//   titlePosition: "top" | "center" | "bottom";
//   authorPosition: "top" | "center" | "bottom";
// }

// interface NewBookFormProps {
//   book?: BookData;
//   onSubmit: (book: BookData) => void;
// }

// const NewBookForm: React.FC<NewBookFormProps> = ({ book, onSubmit }) => {
//   const [bookData, setBookData] = useState<BookData>({
//     title: book?.title || "",
//     author: book?.author || "",
//     description: book?.description || "",
//     coverColor: book?.coverColor || "#F3F4F6",
//     textColor: book?.textColor || "#000000",
//     authorColor: book?.authorColor || "#555555",
//     coverImage: book?.coverImage || "",
//     roundedCorners: book?.roundedCorners || false,
//     coverStyle: book?.coverStyle || "flat",
//     titlePosition: book?.titlePosition || "center",
//     authorPosition: book?.authorPosition || "bottom",
//   });

//   useEffect(() => {
//     if (book) {
//       setBookData(book);
//     }
//   }, [book]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value, type } = e.target;
//     setBookData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
//     }));
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setBookData((prev) => ({ ...prev, coverImage: reader.result as string }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSelect = (field: keyof BookData, value: string) => {
//     setBookData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(bookData);
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
//       <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
//         {book ? "Update Book" : "Create a New Book"}
//       </h2>

//       {/* Live Preview */}
//       <div className="flex justify-center mb-6">
//         <div
//           className={`relative w-36 h-48 ${
//             bookData.roundedCorners ? "rounded-lg" : "rounded-none"
//           } flex flex-col justify-between items-center p-2 border shadow-md`}
//           style={{
//             backgroundColor: bookData.coverColor,
//             color: bookData.textColor,
//             backgroundImage: bookData.coverImage ? `url(${bookData.coverImage})` : "none",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {!bookData.coverImage && (
//             <>
//               <p
//                 className={`text-lg font-semibold ${
//                   bookData.titlePosition === "top" ? "self-start" : bookData.titlePosition === "bottom" ? "self-end" : "self-center"
//                 }`}
//                 style={{ color: bookData.textColor }}
//               >
//                 {bookData.title || "Your Book Title"}
//               </p>
//               <p
//                 className={`text-sm font-medium ${
//                   bookData.authorPosition === "top" ? "self-start" : bookData.authorPosition === "bottom" ? "self-end" : "self-center"
//                 }`}
//                 style={{ color: bookData.authorColor }}
//               >
//                 {bookData.author || "Author Name"}
//               </p>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
//         <input
//           type="text"
//           name="title"
//           placeholder="Book Title"
//           value={bookData.title}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
//         />

//         <input
//           type="text"
//           name="author"
//           placeholder="Author Name"
//           value={bookData.author}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
//         />

//         {/* Color Pickers */}
//         <div className="flex gap-4">
//           <div>
//             <label className="block text-gray-700 dark:text-gray-300">Title Color</label>
//             <input type="color" name="textColor" value={bookData.textColor} onChange={handleChange} className="w-10 h-10 cursor-pointer" />
//           </div>
//           <div>
//             <label className="block text-gray-700 dark:text-gray-300">Author Color</label>
//             <input type="color" name="authorColor" value={bookData.authorColor} onChange={handleChange} className="w-10 h-10 cursor-pointer" />
//           </div>
//         </div>

//         {/* Position Selectors */}
//         <div className="flex gap-4">
//           <div>
//             <label className="block text-gray-700 dark:text-gray-300">Title Position</label>
//             <div className="flex gap-2">
//               {["top", "center", "bottom"].map((pos) => (
//                 <button
//                   key={pos}
//                   type="button"
//                   onClick={() => handleSelect("titlePosition", pos)}
//                   className={`p-2 rounded-md border ${
//                     bookData.titlePosition === pos ? "bg-yellow-500 text-white" : "bg-gray-200"
//                   }`}
//                 >
//                   <FiAlignCenter size={20} />
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div>
//             <label className="block text-gray-700 dark:text-gray-300">Author Position</label>
//             <div className="flex gap-2">
//               {["top", "center", "bottom"].map((pos) => (
//                 <button
//                   key={pos}
//                   type="button"
//                   onClick={() => handleSelect("authorPosition", pos)}
//                   className={`p-2 rounded-md border ${
//                     bookData.authorPosition === pos ? "bg-yellow-500 text-white" : "bg-gray-200"
//                   }`}
//                 >
//                   <FiAlignLeft size={20} />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Book Style Selector */}
//         <div>
//           <label className="block text-gray-700 dark:text-gray-300">Cover Style</label>
//           <div className="flex gap-2">
//             {["flat", "paged"].map((style) => (
//               <button
//                 key={style}
//                 type="button"
//                 onClick={() => handleSelect("coverStyle", style)}
//                 className={`p-2 rounded-md border ${
//                   bookData.coverStyle === style ? "bg-yellow-500 text-white" : "bg-gray-200"
//                 }`}
//               >
//                 {style === "flat" ? <FiBook size={20} /> : <FiLayers size={20} />}
//               </button>
//             ))}
//           </div>
//         </div>

//         <button type="submit" className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-md shadow-md hover:bg-yellow-600 transition">
//           {book ? "Update Book" : "Create Book"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewBookForm;
