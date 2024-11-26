import * as fs from 'fs';
import * as path from 'path';

const searchPattern1 = /@Validator\.IsNotEmpty\(\s*{\s*groups:\s*\[\s*CREATE/;
const searchPattern2 = /@Validator\.IsOptional\(\s*{\s*groups:\s*\[\s*UPDATE/;
const importStatement = "import { CREATE, UPDATE } from 'src/common/constants/validation-groups';\n";

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (searchPattern1.test(content) || searchPattern2.test(content)) {
            if (!content.includes("import { CREATE, UPDATE } from 'src/common/constants/validation-groups'")) {
                const lines = content.split('\n');
                let lastImportIndex = -1;
                
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].startsWith('import ')) {
                        lastImportIndex = i;
                    }
                }

                if (lastImportIndex !== -1) {
                    lines.splice(lastImportIndex + 1, 0, importStatement);
                    const updatedContent = lines.join('\n');
                    fs.writeFileSync(filePath, updatedContent);
                    console.log(`Updated ${filePath}`);
                }
            }
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
}

function walkDTOFolders(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            if (fullPath.includes('modules') && file === 'dto') {
                fs.readdirSync(fullPath)
                    .filter(f => f.endsWith('.ts'))
                    .forEach(f => processFile(path.join(fullPath, f)));
            } else {
                walkDTOFolders(fullPath);
            }
        }
    });
}

const srcPath = path.join(process.cwd(), 'src');
walkDTOFolders(srcPath); 