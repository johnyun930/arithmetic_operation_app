export function add(...numbers) {
  return numbers.reduce((accu, val) => (accu += val));
}

export function subtract(number, ...substracts) {
  return number - add(...substracts);
}

export function multiple(...numbers) {
  return numbers.reduce((accu = 1, val) => val * accu);
}

export function divide(number, ...dividers) {
  return number / multiple(...dividers);
}
