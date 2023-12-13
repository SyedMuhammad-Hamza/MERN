import express from "express";
import { Book } from "../models/model.js";
const router = express.Router();

router.post("/", async (request, response) => {
  try {
    console.log(request.body);
    if (!request.body.title || !request.body.userId || !request.body.body) {
      return response.status(400).send({ message: "Send all fields" });
    }
    const newBook = {
      userId: request.body.userId,
      title: request.body.title,
      body: request.body.body,
    };

    //const book = await Book.create(newBook);
    return response.status(201).send(newBook);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
