import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5554/books")
      .then((response) => {
        setBooks(response.data);
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(books);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4"></div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to='books/create'>Create Book</Link>
      </div>
      <table className="w-full border-seperate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No.</th>
            <th className="border border-slate-600 rounded-md">User Id</th>
            <th className="border border-slate-600 rounded-md">Title</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Body
            </th>
          </tr>{" "}
        </thead>
        <tbody>
          {(books || []).map((book, index) => (
            <tr key={book.userId} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.userId}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.title}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.body}
              </td>
              <td className='border border-slate-700 rounded-md text-center'><div className='flex justify-center gap-x-4'>
              <Link to={`/books/edit/${book._id}`}>Edit Book </Link>
              <Link to={`/books/delete/${book._id}`}> Delete Book</Link>
              </div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
