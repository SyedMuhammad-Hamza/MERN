import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setisGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route
            path="/"
            element={
              isGameStarted ? (
                <GamePlay />
              ) : (
                <StartGame toggle={toggleGamePlay} />
              )
            }
          /> */}
          <Route path="/" element={<StartGame />} />
          <Route path="/gameplay" element={<GamePlay />} />
        </Routes>
      </BrowserRouter>
    </>

    // <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
//routes
//state management , useContext()
