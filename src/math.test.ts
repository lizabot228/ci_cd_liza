import { sum, multiply, sayHello } from './math';

test('sum works', () => {
  expect(sum(2, 3)).toBe(5);
});

test('multiply works', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('sayHello works', () => {
  expect(sayHello("Vasya")).toBe("Hello Vasya");
});
