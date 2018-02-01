const fs = require('fs');

const file = (process.argv[2] || '') + 'package.json';

var contents = fs.readFileSync(file, 'utf8');
contents = contents.replace(/react-scripts (start|build|test)/g, 'react-app-rewired $1');
fs.writeFileSync(file, contents);
