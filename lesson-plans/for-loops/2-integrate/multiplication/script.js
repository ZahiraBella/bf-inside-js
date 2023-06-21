import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  const leftValue = readNumber('left');
  const rightValue = readNumber('right');
  
  // use a for loop to multiply the two numbers
  let product = 0;
  for (let i = 0; i < rightValue; i++) {
    product += leftValue;
  }

  // display the product
  display('product', product);
});
