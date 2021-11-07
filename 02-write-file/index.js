console.log('Введите текст:');

const path = require('path');
const fs = require('fs');
const readline = require('readline');
const process = require('process');
      process.on('exit', () => console.log('Работа программы завершена'));
const poppyText = path.join(__dirname, 'text.txt');
const stream = fs.createWriteStream(poppyText);
const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  }
)
rl.on('line', (e) => {
  if (e === 'exit') {
    rl.close();
    return;
  }

  fs.appendFile(poppyText, `${e} \n`, (err) => {
    if (err) {
      throw err;
    }
  })
});





