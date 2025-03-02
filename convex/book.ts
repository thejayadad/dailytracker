import { mutation, query } from "../convex/_generated/server"; // Correct import for Convex mutation
import { v } from "convex/values";

export const createBook = mutation({
  args: {
    title: v.string(), // Required field
  },
  handler: async (ctx, args) => {
    const { db } = ctx; // Extract `db` explicitly

    // Insert book with timestamp
    const bookId = await db.insert("books", {
      title: args.title,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return bookId; // Return the newly created book ID
  },
});


export const getBook = query({
  handler: async(ctx) => {
    const books = await ctx.db
    .query("books")
    .collect()
    console.log("Books " + books)

    return books
  }
})

export const getBookById = query({
  args: { id: v.id("books") }, // Require a valid book ID
  handler: async (ctx, { id }) => {
    const book = await ctx.db.get(id); // Fetch book by ID
    if (!book) {
      throw new Error("Book not found");
    }
    return book;
  },
});