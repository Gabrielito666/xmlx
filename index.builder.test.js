const path = require('path');
const builder = require("../builder");

const [_, __, input, output] = process.argv;

const entryFile = path.resolve(process.cwd(), input);
const outFile = path.resolve(process.cwd(), output);

builder(entryFile, outFile);