import { add, divide, multiple, subtract } from "./arithmeticFunc";

const arithemetic = {
  add: ["+", add],
  minus: ["-", subtract],
  multiple: ["x", multiple],
  divide: ["&divide", divide],
};

export const generateQuestion = (arith, ...numbers) => {
  let [symbol, func] = arithemetic[arith];
  console.log(arith);
  console.log(numbers);
  let question = "";
  for (let i = 0; i < numbers.length; i++) {
    question += numbers[i];
    if (i !== numbers.length - 1) {
      question += symbol;
    }
  }
  console.log(func(...numbers));
  let answer = func(...numbers);
  return [question, answer];
};
