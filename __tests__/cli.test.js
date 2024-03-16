const { copyTemplate } = require('../src/copy-template.js');
const fs = require('fs');
const mockFs = require('mock-fs');

beforeEach(() => {
  // Setup a mock file system
  mockFs({
    'template': {
      'file.txt': 'content',
    },
  });
});

afterEach(() => {
  // Restore the file system
  mockFs.restore();
});

test('copyTemplate copies files correctly', async () => {
  process.argv = ['node', 'cli.js', 'new-project'];

  await copyTemplate('new-project');

  // Assert that the expected file exists in the mock file system
  const exists = fs.existsSync('new-project/file.txt');
  expect(exists).toBe(true);
});
