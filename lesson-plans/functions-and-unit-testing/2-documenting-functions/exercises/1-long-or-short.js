'use strict';

console.log('-- begin --');

/**
 * Determines if a given text is long or short based on a cutoff length.
 *
 * @param {string} text - The text to be evaluated.
 * @param {number} cutoff - The cutoff length for determining if the text is long or short.
 * @returns {string} Returns 'long' if the text length is greater than or equal to the cutoff,
 *                   and 'short' if the text length is less than the cutoff.
 */

const longOrShort = (text, cutoff) => {
  if (text.length < cutoff) {
    return 'short';
  } else {
    return 'long';
  }
};

const _1_expect = 'long';
const _1_actual = longOrShort('qwerty', 5);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'long';
const _2_actual = longOrShort('qwerty', 6);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'short';
const _3_actual = longOrShort('qwerty', 7);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'long';
const _4_actual = longOrShort('', -1);
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');
