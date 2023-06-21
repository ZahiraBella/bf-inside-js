import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text

  let toPyramid = readString('to-pyramid');

  // create the pyramid
  let pyramid = '';
  for (let i = 0; i < toPyramid.length; i++) {
    pyramid = pyramid + '\n';
    for (let j = i; j < toPyramid.length ; j++) {
    pyramid = pyramid + toPyramid[j];
    }
  }

  // display the pyramid

  display('pyramided', pyramid);
});
