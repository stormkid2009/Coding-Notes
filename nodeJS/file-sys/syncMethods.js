const {readFileSync,writeFileSync} = require('fs');
//const fs = require('fs');

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

writeFileSync('./content/result.txt',`append to result text`,{flag:'a'});