import express from "express";
import { Book } from "../models/model.js";
const router = express.Router();

//post
export const createBook = async (request, response) => {
  try {
    //console.log(request.body);
    if (!request.body.title || !request.body.userId || !request.body.body) {
      return response.status(400).send({ message: "Send all fields" });
    }
    const newBook = {
      userId: request.body.userId,
      title: request.body.title,
      body: request.body.body,

    };

    const book = await Book.create(newBook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

//get all books
export const getBooks = async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

//get one book by id
export const getBook = async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

//update a book
export const updateBook = async (request, response) => {
  try {
    console.log(request);
    if (!request.body.title || !request.body.userId || !request.body.body) {
      return response.status(400).send({ message: "Send all fields" });
    }
    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Book not found." });
    }
    return response
      .status(200)
      .send({ message: "Book updated successfully, Alhumdulillah." });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

//delete a book
export const deletBook = async (request, response) => {
  try {
  const { id } = request.params;
  const result = await Book.findByIdAndDelete(id);
  if (!result) {
    return response.status(404).json({ message: "Book not found." });
  }
  return response
    .status(200)
    .send({ message: "Book deleted successfully, Alhumdulillah." });
} catch (error) {
  console.log(error.message);
  response.status(500).send({ message: error.message });
}
};

//export default router;
