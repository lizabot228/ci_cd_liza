import { sum, multiply, sayHello } from './math';

test('sum works', () => {
  if (sum(2, 3) !== 5) throw new Error();
});

test('multiply works', () => {
  if (multiply(2, 3) !== 6) throw new Error();
});

test('sayHello works', () => {
  if (sayHello("Vasya") !== "Hello Vasya") throw new Error();
});
