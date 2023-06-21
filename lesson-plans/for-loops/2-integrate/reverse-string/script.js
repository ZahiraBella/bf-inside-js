import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text

  let userText = readString('user-text');

  // use a for loop that counts down (i--) to reverse the input
  let reverse = '';

  for(let i = userText.length; i > 0; i--) {
  reverse += userText[i - 1];
  }
  // display the reversed string

  display('reversed-output', reverse)
});
