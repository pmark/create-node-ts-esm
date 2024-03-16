#!/usr/bin/env node
const path = require('path');
const { copyTemplate } = require('./copy-template.js');

const run = () => {
    const targetDirName = process.argv[2]; // Get target directory name from command line arguments
    if (!targetDirName) {
        console.log('Usage: npx create-node-ts-esm <project-directory>');
        process.exit(1);
    }

    const targetPath = path.resolve(process.cwd(), targetDirName);
    copyTemplate(targetPath);
};

run();
