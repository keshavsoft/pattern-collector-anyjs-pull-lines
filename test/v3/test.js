import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

import defaultFunc from '../../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "routes.js");

const fileContent = fs.readFileSync(filePath, 'utf8');

const parseRegex = /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/;

const searchString = /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm;

const k1 = defaultFunc({
    fileContent, parseRegex, searchRegex: searchString,
    showLog: false, showLogStep1: false
});

console.log("ssssssssss : ", JSON.stringify(k1, null, 2));

