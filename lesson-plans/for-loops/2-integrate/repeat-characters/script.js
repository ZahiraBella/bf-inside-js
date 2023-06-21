import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values

  let userText = readString('user-text');

  let numberOfTimes = readNumber('number-of-times');

  // repeat the characters in the text

  let repeatedText = '';
  for (let i = 0; i < userText.length; i++) {
    for (let j = 0; j < numberOfTimes; j++) {
      repeatedText += userText[i];
    }
  }

  // display the text with repeated characters

  display('repeated-output', repeatedText);
});


