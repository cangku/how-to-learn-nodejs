var child = require('child_process');
var s = child.execSync('./phantomjs baidu.js');

console.log(s);
// https://github.com/amir20/phantomjs-node
// https://github.com/casperjs/casperjs
