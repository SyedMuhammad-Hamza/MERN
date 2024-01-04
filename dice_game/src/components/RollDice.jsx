import styled from "styled-components";
import { createContext, useContext } from "react"; //c1

const RollDice = ({ /*currentDice c1*/ children, rollDice }) => {
  const CurrentDiceValue = useContext(CurrentDiceValue); //c1
  return (
    <DiceContainer className="dice" onClick={() => rollDice()}>
      <div>
        <img src={`/images/dice/dice_${1}.png`} />
      </div>
      <p>Click to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  flex-direction: column;

  .dice {
    cursor: pointer;
  }
`;
