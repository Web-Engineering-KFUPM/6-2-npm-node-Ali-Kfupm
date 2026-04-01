import _ from "lodash";

export function parseNumbers(input) {
  const numbers = _.map(input, (value) => Number(value));

  const cleaned = _.compact(numbers);

  return cleaned;
}

export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}