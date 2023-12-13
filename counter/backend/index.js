import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/model.js";
import PostRoute from "./routes/PostRoute.js";
import cors from "cors";

const app = express();
app.use(cors());

//Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Middleware for handling CORS policy , run: npm i cors
//opt1: allow all origins with default of cors(*)

app.get("/", (request, response) => {
//   console.log(request);
  return response.status(234).send("Salam");
}); //route

app.post("/", async (request, response) => {
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
  


//app.use("/books", PostRoute);

// mongoose.connect(mongoDBURL)
// .then(()=>{console.log('app connected to database, thanks Allah')
//     app.listen(PORT, () =>{console.log('Running');});})
// .catch((error)=>{console.log(error)});

app.listen(5554, async () => {
    console.log(`server up on port 5554`);
  });


//npm init
//npm install express mongoose cors
