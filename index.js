const fs = require('fs');

try {
  const data = JSON.parse(process.argv[2]);
  console.log(data);
} catch {
  console.log('Unable to parse');
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const filename = 'data/' + uuidv4() + '.txt';
console.log('Writing file: ' + filename);
fs.writeFileSync(filename, process.argv[2]);