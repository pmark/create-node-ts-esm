import { fetchData } from '../src/index';

// Mocking a function
jest.mock('../src/index', () => ({
  ...jest.requireActual('../src/index'), // Import and retain the original implementations
  fetchData: jest.fn(() => Promise.resolve('mock data')), // Override fetchData
}));

describe('fetchData with mock', () => {
  it('fetches mock data successfully', async () => {
    const data = await fetchData();
    expect(data).toBe('mock data');
  });
});
