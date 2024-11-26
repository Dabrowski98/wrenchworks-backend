const fs = require('fs');
const path = require('path');

// Set the path to the src/modules directory
const modulesDir = path.join(__dirname,'..', 'src', 'modules');

// Function to delete 'dto' folders recursively
function removeDtoFolders(directory) {
  // Read the contents of the directory
  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${directory}: ${err.message}`);
      return;
    }

    // Loop through each item in the directory
    files.forEach((file) => {
      const filePath = path.join(directory, file.name);

      if (file.isDirectory()) {
        // If the folder is named 'dto', delete it
        if (file.name === 'dto') {
          fs.rm(filePath, { recursive: true, force: true }, (err) => {
            if (err) {
              console.error(`Error deleting directory ${filePath}: ${err.message}`);
            } else {
              console.log(`Deleted directory: ${filePath}`);
            }
          });
        } else {
          // If it's another folder, recursively call removeDtoFolders
          removeDtoFolders(filePath);
        }
      }
    });
  });
}

// Start the script by removing 'dto' folders in modulesDir
removeDtoFolders(modulesDir);