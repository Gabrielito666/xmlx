const path = require('path');
const builder = require("../builder");

const input = path.resolve(process.cwd(), "./test/index.xmlx.test.js");
const output = path.resolve(process.cwd(), "./test/index.bundle.test.js");

const entryFile = path.resolve(process.cwd(), input);
const outFile = path.resolve(process.cwd(), output);

builder(entryFile, outFile);