import fs from 'fs';
import path from 'path';

import defaultFunc from '../../index.js';

const filePath = path.join(process.cwd(), "routes.js");

const fileContent = fs.readFileSync(filePath, 'utf8');

const importRegex = {};

importRegex.parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

importRegex.searchString = /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm;

const consumptionRegex = {};

consumptionRegex.parseRegex = /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/;

consumptionRegex.searchString = /^[ \t]*router\.use\b.*?;/gm;

const k1 = defaultFunc({
    fileContent,
    importRegex, consumptionRegex,
    showLog: true,
    showLogStep1: true
});

console.log("ssssssssss : ", k1);

