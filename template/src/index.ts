import { truthy } from './module.js';

// A simple function to add two numbers
export const add = (a: number, b: number): number => {
  return a + b;
};

export const isTruthy = () => {
  return truthy;
}

// A mock function to simulate fetching data from an API
export const fetchData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data from api');
    }, 1000);
  });
};
