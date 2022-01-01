import React, { useState } from "react";
import { Answerinput } from "./answerbox.styles";

export const Answerbox = ({ answer }) => {
  const [userAnswer, setUserAnswer] = useState("");
  return (
    <>
      <Answerinput
        value={userAnswer}
        onChange={(e) => {
          setUserAnswer(e.target.value);
        }}
      />
      <Answerinput type="hidden" value={answer}></Answerinput>
      <button
        onClick={() => {
          console.log(userAnswer);
          console.log(answer);
          if (userAnswer == answer) {
            alert("Corret");
          } else {
            alert("Stupid");
          }
        }}
      >
        submit the answer
      </button>
    </>
  );
};
