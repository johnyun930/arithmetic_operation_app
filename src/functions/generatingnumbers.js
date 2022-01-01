export const generateInt = (digit) => {
  let min = Math.pow(10, digit - 1);
  let max = Math.pow(10, digit) - 1;

  return Math.floor(Math.random() * (max - min) + min);
};

export const generateDecimal = (digit, decimal) => {
  let min = Math.pow(10, digit - 1);
  let max = Math.pow(10, digit) - 1;
  return (Math.random() * (max - min) + min).toFixed(decimal);
};
