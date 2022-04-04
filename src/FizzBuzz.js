const divisibleByN = (i, n) => i % n == 0;
const divisibleBy3 = (i) => divisibleByN(i, 3);
const divisibleBy5 = (i) => divisibleByN(i, 5);

/**
 * returns Fizz, Buzz, Fizz Buzz, or number based on number passed.
 * @param {number} number 
 * @returns {string}
 */
function fizzbuzz(number) {
  if (!Number.isInteger(number)) throw `${number} is not an integer.`;
  if (number <= 0) throw `${number} is not a positive integer`;

  if (divisibleBy3(number) && divisibleBy5(number)) {
    return 'Fizz Buzz';
  } else if (divisibleBy3(number)) {
    return 'Fizz';
  } else if (divisibleBy5(number)) {
    return 'Buzz';
  } else {
    return String(number);
  }
}

export {fizzbuzz};
