import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const StartGame = () => {
  const navigate = useNavigate();

  function changePlay() {
    navigate("/gameplay");
  }

  return (
    <Container>
      <div>
        <img src="/images/p1.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={changePlay}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;
