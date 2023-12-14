import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/model.js";
import BookRoute from "./routes/Book.js";
import cors from "cors";

const app = express();
app.use(cors());

//Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Middleware for handling CORS policy , run: npm i cors

app.get("/", (request, response) => {
  return response.status(234).send("Salam");
});

app.use("/books", BookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to database, thanks Allah");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(5554, async () => {
  console.log(`server up on port 5554`);
});

//npm init
//npm install express mongoose cors

//frontend: table,
