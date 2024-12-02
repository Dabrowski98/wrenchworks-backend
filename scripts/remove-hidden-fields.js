const fs = require('fs');
const path = require('path');

function traverseDirectory(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}:`, err);
      return;
    }

    files.forEach((file) => {
      const fullPath = path.join(dir, file.name);
      if (file.isDirectory()) {
        traverseDirectory(fullPath);
      } else if (file.isFile() && path.extname(file.name) === '.ts') {
        processFile(fullPath);
      }
    });
  });
}

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    const hideFieldPattern = /@HideField\(\)\s*\n\s*[^;]+;\s*\n?/g;

    if (hideFieldPattern.test(data)) {
      let updatedData = data.replace(hideFieldPattern, '');

      updatedData = updatedData.replace(/(\r?\n){3,}/g, '\n\n');

      updatedData = updatedData.replace(/\n+\s*\}$/, '\n}');

      updatedData = updatedData.replace(/}\s*$/, '}');

      updatedData = updatedData.replace(/[ \t]+$/gm, '');

      fs.writeFile(filePath, updatedData, 'utf8', (writeErr) => {
        if (writeErr) {
          console.error(`Error writing file ${filePath}:`, writeErr);
        } else {
          console.log(`Updated file: ${filePath}`);
        }
      });
    }
  });
}

const startDir = path.join(__dirname, '../src/modules');

traverseDirectory(startDir);
