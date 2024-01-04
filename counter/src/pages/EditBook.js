import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, settitle] = useState("");
  const [userId, setuserId] = useState("");
  const [body, setbody] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  // const methods = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:5554/books/${id}`)
      .then((response) => {
        setbody(response.data.body);
        setuserId(response.data.userId);
        settitle(response.data.title);
      })
      .catch((error) => {
        console.log(error);
        alert("An error happened while editing the book.");
      });
  }, []);

  const editBook = () => {
    // if (userId === "") {
    //   window.alert("userId");
    // }
    const data = { userId, title, body };
    console.log(data);
    axios
      .put(`http://localhost:5554/books/${id}`, data)
      .then(() => {
        console.log("success Alhumdulillah.");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const userData = [
    { userId: 1, name: "John Doe", email: "john.doe@example.com" },
    { userId: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { userId: 3, name: "Alex Johnson", email: "alex.johnson@example.com" },
    { userId: 4, name: "Sarah Brown", email: "sarah.brown@example.com" },
    { userId: 5, name: "Michael Wilson", email: "michael.wilson@example.com" },
    { userId: 6, name: "Emily Davis", email: "emily.davis@example.com" },
    { userId: 7, name: "Brian Miller", email: "brian.miller@example.com" },
    { userId: 8, name: "Olivia Taylor", email: "olivia.taylor@example.com" },
    { userId: 9, name: "Ethan White", email: "ethan.white@example.com" },
    { userId: 10, name: "Sophia Clark", email: "sophia.clark@example.com" },
  ];

  const filterid = userData.filter(function (user) {
    return user.userId === 11;
  });
  console.log({ filterid });

  const findid = userData.find(function (user) {
    return user.userId === 11;
  });
  console.log({ findid });

  const mapname = userData.map((user) => {
    return {
      userId: user.userId,
      fname: user.name.split(" ")[0],
      email: user.email,
    };
  });
  console.log({ mapname });
  console.log(userData);
  console.log(userId, title, body);
  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Edit Book</h1>
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
        <button className="p-2 bg-sky-300 m-8" onClick={editBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
