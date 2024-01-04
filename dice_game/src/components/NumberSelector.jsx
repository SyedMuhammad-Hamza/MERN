import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  seterror,
  error,
  selectedNumber,
  setselectedNumber,
}) => {
  const array1 = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {array1.map((value, i) => (
          <Box
            isselected={value === selectedNumber}
            key={i}
            onClick={() => setselectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  place-items: center;
  font-size: 24px;
  display: grid;
  font-weight: 700;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (!props.isselected ? "black" : "white")};
`;
