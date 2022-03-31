const divisibleByN = (i, n) => i % n == 0;
const divisibleBy3 = (i) => divisibleByN(i, 3);
const divisibleBy5 = (i) => divisibleByN(i, 5);

function fizzbuzz(number) {
  if (!Number.isInteger(number)) throw `${number} is not an integer.`;

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

module.exports = fizzbuzz;
