const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const error = (err) => {
  console.log(err, `Press 'Q' to exit.`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'q') {
    rl.pause();
  }
})
// hava function activate
// have it question.

const question = (question, cb) => {  
  rl.question(sanitizeDest(question) + '\n', (dest) => {
    if (!cb) {
      throw new Error(`You don't have a callback`);    
    }
    if (dest !== '') {
      cb(null, dest);
    } else {
      question();
    }
  })
}

function sanitizeDest(question) {
  if (question.slice(0, -1) !== '?') {
    return question + '?';
  }
  return question;
}
module.exports = {question, error}

// rl.question('kdfjdkfj', (answer) => {
//   console.log(answer);
// })