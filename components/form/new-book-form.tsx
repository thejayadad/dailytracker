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