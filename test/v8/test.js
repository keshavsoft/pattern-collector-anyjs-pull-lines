import fs from 'fs';
import path from 'path';

import defaultFunc from '../../index.js';

import extractRegex from './extractRegex.js';

const filePath = path.join(process.cwd(), "routes.js");

const fileContent = fs.readFileSync(filePath, 'utf8');

const k1 = defaultFunc({
    fileContent,
    consumptionRegex: extractRegex.consumptionRegex,
    importRegex: extractRegex.importRegex,
    showLog: false,
    showLogStep1: false
});

console.log("ssssssssss : ", k1);

