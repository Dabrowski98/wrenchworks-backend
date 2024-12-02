const fs = require('fs');
const path = require('path');

function flexibleRemoveStrings(directoryPath, stringsToRemove) {
    const regexPatterns = stringsToRemove.map(str => {
        const escapedStr = str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        return new RegExp(escapedStr, 'g');
    });

    const items = fs.readdirSync(directoryPath);

    items.forEach(item => {
        const itemPath = path.join(directoryPath, item);
        const stats = fs.statSync(itemPath);

        if (stats.isDirectory()) {
            flexibleRemoveStrings(itemPath, stringsToRemove);
        } else if (path.extname(item) === '.ts') {
            let fileContent = fs.readFileSync(itemPath, 'utf8');
            let modified = false;

            let lines = fileContent.split('\n');
            let updatedLines = [];

            lines.forEach((line, index) => {
                let originalLine = line;
                let modifiedLine = line;
                let lineModified = false;

                regexPatterns.forEach((pattern, idx) => {
                    if (pattern.test(modifiedLine)) {
                        modifiedLine = modifiedLine.replace(pattern, '');
                        lineModified = true;
                        console.log(`Removed "${stringsToRemove[idx]}" from ${itemPath} (Line ${index + 1})`);
                    }
                });

                if (lineModified && modifiedLine.trim() === '') {
                    modified = true;
                    console.log(`Removed empty line at Line ${index + 1} in ${itemPath}`);
                } else {
                    updatedLines.push(modifiedLine);
                }
            });

            if (modified) {
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

const targetDirectory = path.join(__dirname, '../src/modules');

const stringsToRemove = [
    // "import { CREATE, UPDATE } from 'src/constants/validation-groups';",
    // "@Validator.IsOptional({groups: [UPDATE]})",
    // "groups: [UPDATE],",
    // "groups: [CREATE],",
    // "{groups: [UPDATE]}",
    // "{groups: [CREATE]}",
];

if (!fs.existsSync(targetDirectory)) {
    console.error(`Error: The directory ${targetDirectory} does not exist.`);
    process.exit(1);
}

flexibleRemoveStrings(targetDirectory, stringsToRemove);
