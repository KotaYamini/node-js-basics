// GLOBALS - NO WINDOW !!!

// dirname - path to current directory
// __filename -  file name
// require - function to use modules (Common JS)
//module - info abput current module (file)

console.log(__dirname);
var y = setInterval(() => {
  console.log(__filename);
}, 1000);

clearInterval(y);
