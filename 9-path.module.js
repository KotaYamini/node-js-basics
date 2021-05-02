const path = require('path');

console.log(path.sep);
const filePath = path.join('/content/', 'subfolder', 'test.txt');

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const dirName = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(dirName);

const relativePAth = path.relative(__dirname, '/content', '/subfolder', '/test.txt');
console.log(relativePAth);const path = require('path');

console.log(path.sep);
const filePath = path.join('/content/', 'subfolder', 'test.txt');

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const dirName = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(dirName);

const relativePAth = path.relative(__dirname, '/content', '/subfolder', '/test.txt');
console.log(relativePAth);