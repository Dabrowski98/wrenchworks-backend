const fs = require('fs');
const path = require('path');

/**
 * Recursively traverses the given directory and removes specified strings from each `.ts` file.
 * Removes only the lines that become empty after the removals, preserving existing empty lines.
 * @param {string} directoryPath - The path to the directory to process.
 * @param {string[]} stringsToRemove - An array of exact strings to remove from the files.
 */
function flexibleRemoveStrings(directoryPath, stringsToRemove) {
    // Convert strings to remove into regular expressions with global flag
    const regexPatterns = stringsToRemove.map(str => {
        // Escape special regex characters in the string
        const escapedStr = str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        return new RegExp(escapedStr, 'g');
    });

    // Read all items in the current directory
    const items = fs.readdirSync(directoryPath);

    items.forEach(item => {
        const itemPath = path.join(directoryPath, item);
        const stats = fs.statSync(itemPath);

        if (stats.isDirectory()) {
            // Recursively process subdirectories
            flexibleRemoveStrings(itemPath, stringsToRemove);
        } else if (path.extname(item) === '.ts') {
            // Process TypeScript files
            let fileContent = fs.readFileSync(itemPath, 'utf8');
            let modified = false;

            // Split content into lines for processing
            let lines = fileContent.split('\n');
            let updatedLines = [];

            lines.forEach((line, index) => {
                let originalLine = line;
                let modifiedLine = line;
                let lineModified = false;

                // Remove each specified string from the line
                regexPatterns.forEach((pattern, idx) => {
                    if (pattern.test(modifiedLine)) {
                        modifiedLine = modifiedLine.replace(pattern, '');
                        lineModified = true;
                        console.log(`Removed "${stringsToRemove[idx]}" from ${itemPath} (Line ${index + 1})`);
                    }
                });

                if (lineModified && modifiedLine.trim() === '') {
                    // Line was modified and is now empty; do not include it
                    modified = true;
                    // Optionally, log the removal of the empty line
                    console.log(`Removed empty line at Line ${index + 1} in ${itemPath}`);
                } else {
                    // Keep the modified or original line
                    updatedLines.push(modifiedLine);
                }
            });

            if (modified) {
                // Rejoin the lines into a single string
                fileContent = updatedLines.join('\n');

                // Additional cleanup:
                // 1. Remove any trailing commas before closing braces
                fileContent = fileContent.replace(/,\s*}/g, '}');
                // 2. Remove any multiple consecutive commas
                fileContent = fileContent.replace(/,{2,}/g, ',');
                // 3. Trim lines to remove any trailing whitespace
                fileContent = fileContent.split('\n').map(line => line.trimEnd()).join('\n');

                fs.writeFileSync(itemPath, fileContent, 'utf8');
                console.log(`Updated file: ${itemPath}`);
            }
        }
    });
}

// Entry point: Target the 'src/modules' directory
const targetDirectory = path.join(__dirname, '../src/modules');

// Define the strings you want to remove
const stringsToRemove = [
    // "import { CREATE, UPDATE } from 'src/constants/validation-groups';",
    // "@Validator.IsOptional({groups: [UPDATE]})",
    // "groups: [UPDATE],",
    // "groups: [CREATE],",
    // "{groups: [UPDATE]}",
    // "{groups: [CREATE]}",
];

// Ensure the target directory exists
if (!fs.existsSync(targetDirectory)) {
    console.error(`Error: The directory ${targetDirectory} does not exist.`);
    process.exit(1);
}

// Execute the removal process
flexibleRemoveStrings(targetDirectory, stringsToRemove);
