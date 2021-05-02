const { readFile, writeFile } = require("fs");
console.log('start');
readFile("./content/subfolder/first.txt", "utf8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("res:", res);
  const first = res;
  readFile("./content/subfolder/second.txt", "utf8", (err, res) => {
    if(err){
      console.log(err);
      return;
    }
    console.log("res:", res);
  });
  const second = res;
  writeFile("./content/subfolder/result-async-file.txt",
  `Here is the result, ${first} ${second}` ,(err, result) => {
    if(err){
      console.log(err);
      return; 
    }
    console.log("done with this task");
})

});
console.log('done after all tasks');
