// Common JS , every file is module(by default)
// Modules -  Encapsulated the code(minimum share)

// const names = require("./4-names");
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

require("./7-mind-grenade");

sayHi("yamini");
sayHi(john);
sayHi(peter);
