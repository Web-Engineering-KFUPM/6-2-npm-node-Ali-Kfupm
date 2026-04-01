import _ from "lodash";

export function parseNumbers(inputs) {
  const numbers = inputs.map((value) => Number(value));
  return numbers.filter((num) => !isNaN(num));
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}