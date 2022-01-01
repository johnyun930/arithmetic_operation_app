import React, { useState } from "react";
import { Answerinput } from "./answerbox.styles";

export const Answerbox = () => {
  const [answer, setAnswer] = (useState = "");
  return (
    <Answerinput
      value={answer}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
    />
  );
};
