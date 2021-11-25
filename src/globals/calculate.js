export default function Calculate(current, operand, number) {
  current = parseFloat(current);
  console.log(current);
  number = parseFloat(number);
  console.log(number);
  console.log(operand);
  if (operand === "Add") {
    return current + number;
  } else if (operand === "Subtract") {
    return current - number;
  } else if (operand === "Multiply") {
    return current * number;
  } else if (operand === "Divide") {
    return current / number;
  } else if (operand === "Square Root") {
    return sqrt(current);
  }
}
function sqrt(a) {
  var x,
    x1 = a / 2;

  do {
    x = x1;
    x1 = (x + a / x) / 2;
  } while (x !== x1);
  return x;
}
