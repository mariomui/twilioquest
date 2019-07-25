
require('dotenv').config();
const readline = require('readline');
const twilio = require('twilio')(process.env.TWILIO_TEST_SID, process.env.TWILIO_TEST_AUTH_TOKEN)
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

const question = () => {
  rl.question('Who do you want to call\n', (dest) => {
    if (dest !== '') {
      createMessage(dest);
    } else {
      question();
    }
  })
}

function createMessage(dest) {
  twilio.messages.create({
    body: 'hello man',
    from: process.env.TWILIO_NUMBER,
    to: dest
  })
  .then((message) => {
    console.log(message.SID);
    rl.pause();
  })
  .catch(error);
}

question();