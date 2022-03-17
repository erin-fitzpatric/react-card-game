import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const Button = styled.button`
  color: white;
  background-color: blue;
  padding: 16px 8px;
  border: 3px solid black;
  border-radius: 4px;
  min-width: 60px;
`;

const PurpleButton = styled(Button)`
  background-color: purple;
`;
const RedButton = styled(Button)`
  background-color: red;
`;

const ButtonsTab = ({ onButtonClick }) => (
  <ButtonWrapper>
    <Button name="down" onClick={onButtonClick} type="down">
      Lower
    </Button>
    <PurpleButton name="same" onClick={onButtonClick} type="same">
      Same
    </PurpleButton>
    <RedButton name="up" onClick={onButtonClick} type="up">
      Higher
    </RedButton>
  </ButtonWrapper>
);

export default ButtonsTab;
