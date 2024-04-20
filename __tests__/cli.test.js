const { copyTemplate } = require('../src/copy-template.js');
const fs = require('fs');
// const mockFs = require('mock-fs');

beforeEach(() => {
  fs.rmSync('new-project', { recursive: true, force: true });
});

afterEach(() => {
  fs.rmSync('new-project', { recursive: true, force: true });
});

test('copyTemplate copies files correctly', async () => {
  await copyTemplate('new-project');

  // Assert that the expected files exist
  expect(fs.existsSync('new-project')).toBe(true);
  expect(fs.existsSync('new-project/package.json')).toBe(true);
  expect(fs.existsSync('new-project/.prettierrc')).toBe(true);
});
