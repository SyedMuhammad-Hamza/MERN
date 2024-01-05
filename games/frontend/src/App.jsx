import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const toggleisLoggedin = () => {
    setIsLoggedin((prev) => !prev);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          {!isLoggedin ? (
            <>
              <Route
                path="/login"
                element={<Login toggleisLoggedin={toggleisLoggedin} />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
