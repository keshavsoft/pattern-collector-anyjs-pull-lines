import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

import extractRegex from './extractRegex.js';

const fileContent = fs.readFileSync(appJsPath, 'utf8');

const k1 = defaultFunc({
    fileContent,
    consumptionRegex: extractRegex.consumptionRegex,
    importRegex: extractRegex.importRegex,
    showLog: {
        keysOnly: true,
        withValues: true
    },
    showLogStep1: {
        keysOnly: true,
        withValues: true
    }
});

console.log("ssssssssss : ", k1);

