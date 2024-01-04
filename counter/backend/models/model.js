import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    userId: { type: Number },
    title: { type: String, required: true },
    body: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export const Book = mongoose.model("Book", bookSchema);
