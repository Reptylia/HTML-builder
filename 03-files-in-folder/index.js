const path = require('path');
const fs = require('fs');
const poppyCheck = path.join(__dirname, '/secret-folder');

fs.readdir(poppyCheck, (err, data) => {
  if (err) {
    throw err;
  }

data.forEach(file => {
    fs.stat(`${poppyCheck}/${file}`, (err, st) => {
      if (err) {
        throw err;
      }
      let fileName1 = path.extname(file).slice(1);
      let fileName2 = path.parse(file).name;
      let fileName3 = st.size;

      if (st.isFile()) {
        let lolly = `${fileName2} - ${fileName1} - ${fileName3}kb`;
        console.log(lolly);
      }
    })
  })
});