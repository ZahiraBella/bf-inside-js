import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  // debugger;

  // read user values

    let skipSize = readNumber('skip-size');

    let userText = readString('user-text');

  // create a new string with skipped characters

  let skip = '';

  for(let i = 0; i < userText.length; i = i + skipSize) {
    skip += userText[i];
  }

  // display the skipped string

  display('skipped-output', skip);
});
