import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  books: defineTable({
    title: v.string(), // Required field
    author: v.optional(v.string()),
    backgroundColor: v.optional(v.string()),
    textColor: v.optional(v.string()),
    authorColor: v.optional(v.string()), // Optional author text color
    coverImage: v.optional(v.string()),
    roundedCorners: v.optional(v.boolean()),
    coverStyle: v.optional(v.union(v.literal("flat"), v.literal("paged"))),
    titlePosition: v.optional(v.union(v.literal("top"), v.literal("center"), v.literal("bottom"))),
    authorPosition: v.optional(v.union(v.literal("top"), v.literal("center"), v.literal("bottom"))),
    hasShadow: v.optional(v.boolean()),
    borderThickness: v.optional(v.string()),
    showSpine: v.optional(v.boolean()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_author", ["author"]),
});
