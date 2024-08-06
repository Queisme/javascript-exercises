const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = (nums) => {
  if (nums.length === 0) return 0;
  const answer = nums.reduce((prev, curr) => prev + curr);
  return answer;
};

const multiply = (multiNum) => {
  const multiAnswer = multiNum.reduce((prev, curr) => prev * curr);
  return multiAnswer;
};

const power = (num1, num2) => {
  const powerAnswer = Math.pow(num1, num2);
  return powerAnswer;
};

const factorial = (factNum) => {
  return factNum === 0 ? 1 : factNum * factorial(factNum - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
