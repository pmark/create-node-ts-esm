import { add, fetchData, isTruthy } from '../src/index';

// Basic testing of the add function
describe('add', () => {
  it('correctly adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
  });
});

// Testing async code
describe('fetchData', () => {
  it('fetches data successfully', async () => {
    const data = await fetchData();
    expect(data).toBe('data from api');
  });
});

describe('isTruthy function', () => {
  it('returns the correct value', () => {
    const result = isTruthy();
    expect(result).toBeTruthy();
  });
});
