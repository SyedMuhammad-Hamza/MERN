import React, { useEffect, useState } from "react";
import "./App.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";
// import {BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";

function App() {
  // const [counter, setCounter] = useState(0);
  // const [data, setData] = useState(null);
  // const [isDisabled, setisDisabled] = useState(false);
  // const [data2, setData2] = useState(null);
  // const [data3, setData3] = useState(null);
  // const reset = async () => {
  //   try {
  //     setCounter(0);
  //     setisDisabled(true);
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts/1"
  //     ).then((response) => response.json());
  //     setisDisabled(false);
  //     setData(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const func = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts/2"
  //     ).then((response) => response.json());
  //     setData2(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const func1 = async (id) => {
  //   try {
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts/" + id
  //     ).then((response) => response.json());
  //     setData3(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (counter > 0) func1(counter);
  // }, [counter]);

  // useEffect(() => {
  //   func();
  // }, []);

  // useEffect(() => {
  //   console.log("12345");
  // });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook/>}/>
      <Route path="books/edit/:id" element={<EditBook/>}/>
      <Route path="books/delete/:id" element={<DeleteBook/>}/>
    </Routes>
  );
}

export default App;
