import express from "express";
import { Book } from "../models/model.js";
const router = express.Router();
import { createBook, deletBook, getBook, getBooks, updateBook } from "../Controller/Books.js";

//post
router.post("/", createBook);

//get all books
router.get("/", getBooks);

//get one book by id
router.get("/:id", getBook);

//update a book
router.put("/:id", updateBook);

//delete a book
router.delete( "/:id", deletBook);

export default router;
