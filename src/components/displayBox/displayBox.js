import React from "react";
import { DisplayBox, Question } from "./displayBox.styled";

export const QuestionDisplay = ({ mathQuestion }) => {
  return (
    <DisplayBox>
      <Question>{mathQuestion}</Question>
    </DisplayBox>
  );
};
