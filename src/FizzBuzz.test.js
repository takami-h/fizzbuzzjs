import {fizzbuzz} from './FizzBuzz'

describe('fizzbuzz', () => {
  it('should return "1" on 1', () => {
    expect(fizzbuzz(1)).toBe('1');
    expect(fizzbuzz(2)).toBe('2');
    expect(fizzbuzz(4)).toBe('4');
  });
  it('should return Fizz on number divisible by 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(3*2)).toBe('Fizz');
    expect(fizzbuzz(3*3)).toBe('Fizz');
  });
  it('should return Buzz on number divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(5*2)).toBe('Buzz');
    expect(fizzbuzz(5*4)).toBe('Buzz');
  });
  it('should return Fizz Buzz on number divisible by 3 and 5', () => {
    expect(fizzbuzz(5*3)).toBe('Fizz Buzz');
    expect(fizzbuzz(5*3*2)).toBe('Fizz Buzz');
    expect(fizzbuzz(5*3*3)).toBe('Fizz Buzz');
  });
  it('should throw an error on passing non-integer value', () => {
    expect(() => fizzbuzz('1')).toThrow();
    expect(() => fizzbuzz(0.1)).toThrow();
  });
  it('should throw an error on passing less than or equal to zero', () => {
    expect(() => fizzbuzz(0)).toThrow();
    expect(() => fizzbuzz(-1)).toThrow();
  });
});