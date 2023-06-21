// #todo

'use strict';

console.log('-- begin --');

// a % b
// cast both values to Number then evaluate the remainder when x is divided by y
//  what happens when you use Infinity?
//  what happens when you use 0?
//  what happens when you use NaN?

const _1_expect = 0; // __
const _1_native = Number('1' )% 1;
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_expect = NaN; // __
const _2_native = 0 % Number(null);
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_expect = NaN; // __
const _3_native = Number(false) % Number(null);
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_expect = NaN; // __
const _4_native = Number('12') % Number(false);
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_expect = 0; // __
const _5_native = Number(false )% Number(true);
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_expect = 13; // __
const _6_native = Number('13') % Number(Infinity) ;
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_expect = NaN; // 18 % NaN
const _7_native = Number('18') % Number('aa');
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_expect = NaN; // NaN % NaN
const _8_native = Number('hello') %Number('goodbye');
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_expect = NaN; // __
const _9_native = Number(undefined) % Number('');
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

console.log('-- end --');
