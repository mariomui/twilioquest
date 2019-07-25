const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('SIGINT', () => {
  rl.question('do you want to close, Y or N', (opt) => {
    switch (opt) {
      case 'n':
        break;
      case 'y':
        rl.pause();
        break;
      default:
        console.log('pick one');
    }
  });
})

// rl.question('kdfjdkfj', (answer) => {
//   console.log(answer);
// })