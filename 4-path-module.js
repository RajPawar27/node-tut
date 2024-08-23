
const { log } = require("console");
const path = require("path");

// log(path);
// log(path.sep);

// const filePath = path.join("/abc","/text.txt");
// log(filePath);
// log(`file name : ${path.basename(filePath)}`)

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'
// log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));


// path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'