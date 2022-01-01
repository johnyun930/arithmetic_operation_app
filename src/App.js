import logo from "./logo.svg";
import { Answerbox } from "./components/answerbox/answerbox";

import { generateQuestion } from "./functions/generatingQuestion";
import { generateInt } from "./functions/generatingNumbers";
import { QuestionDisplay } from "./components/displayBox/displayBox";

function App() {
  const [question, answer] = generateQuestion(
    "add",
    generateInt(2),
    generateInt(2)
  );
  return (
    <div className="App">
      <QuestionDisplay mathQuestion={question} />
      <Answerbox answer={answer} />
    </div>
  );
}

export default App;
