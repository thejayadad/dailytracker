import { mutation } from "../convex/_generated/server"; // Correct import for Convex mutation
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
