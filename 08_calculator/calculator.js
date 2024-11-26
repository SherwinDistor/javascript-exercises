const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	const totalSum = array.reduce((total, currentNum) => {
    return total + currentNum;
  }, 0);
  return totalSum;
};

const multiply = function(array) {
  const totalSum = array.reduce((total, currentNum) => {
    return total * currentNum;
  }, 1);
  return totalSum;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let product = 1;
  for (let i = num; i > 0 ; i--) {
    product *= i;
  };
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
