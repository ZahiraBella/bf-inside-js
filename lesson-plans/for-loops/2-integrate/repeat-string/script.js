import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  let userText = readString('user-text');

  let numberOfTimes = readNumber('number-of-times')

  // repeat the string
    let repeated = '';
    for (let j = 0; j < numberOfTimes; j++){
    repeated += userText;
    }
  // display the repeated string

  display('repeated-output', repeated);
});