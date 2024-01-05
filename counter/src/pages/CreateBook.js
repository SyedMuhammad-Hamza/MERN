import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, settitle] = useState("");
  const [userId, setuserId] = useState("");
  const [body, setbody] = useState("");
  const navigate = useNavigate();
  const SaveBook = () => {
    const data = { userId, title, body };
    console.log(data);
    axios
      .post("http://localhost:5554/books", data)
      .then(() => {
        console.log("success Alhumdulillah.");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  console.log(userId, title, body);
  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Craete Book</h1>
      <Link to="/">Show Book's List</Link>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">User Id</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setuserId(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          ></input>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Book Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          ></input>
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Body</label>
          <input
            type="text"
            value={body}
            onChange={(e) => setbody(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          ></input>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={SaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
