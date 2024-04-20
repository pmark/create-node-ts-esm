const fs = require('fs-extra');
const path = require('path');

const copyTemplate = async (targetPath) => {
  const templatePath = path.join(__dirname, '..', 'template');
  try {
    await fs.copy(templatePath, targetPath);
    console.log(
      `Project created successfully in "${targetPath}" from ${templatePath}`
    );
  } catch (error) {
    console.error('Error creating project:', error);
    process.exit(1);
  }
};

module.exports = {
  copyTemplate,
};
