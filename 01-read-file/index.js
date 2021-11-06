const path = require('path');
const fs = require('fs');
const readableStream = fs.createReadStream(path.join(__dirname,'./text.txt'),
'utf-8',
(err, data) => {
    if (err) throw err;
    console.log(data);
});
readableStream.on('data', chunk => console.log(chunk));