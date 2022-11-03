const fs = require('fs')
const path = require('path');

const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), { encoding : 'utf8' });

stream.on('data', (data) => {
  console.log(data)
});
