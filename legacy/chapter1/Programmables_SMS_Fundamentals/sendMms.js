//hrm. refactor readline to be more shareable. should i just export question as a function?
const utilFile = '../../util';
const question = require(utilFile).question
question('hi', (err, data) => {
  console.log(data);
});