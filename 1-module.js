console.log(__filename);

const names = require("./names");
const SayHi = require("./fun-3");

console.log(names);
console.log(SayHi);

SayHi('Raj');
SayHi(names.ram);
SayHi(names.sham);