import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useNavigate, useParams} from 'react-router-dom'

const DeleteBook = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const delBook = () => {
    axios
      .delete(`http://localhost:5554/books/${id}`)
      .then(() => {
        console.log("success Alhumdulillah.");
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Delete Book</h1>
      <Link to='/'>Show Book's List</Link>
      <button className="p-2 bg-sky-300 m-8" onClick={delBook}>
          Delete Book
        </button>
    </div>
  );
};

export default DeleteBook;
