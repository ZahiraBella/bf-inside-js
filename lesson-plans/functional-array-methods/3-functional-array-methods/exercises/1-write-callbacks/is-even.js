/**
 * returns true if a number is even
 * otherwise returns false
 * @param {number} num - the number
 * @returns {boolean} is the number even?
 */
// export const isEven = (num) => {
//   if(num % 2 === 0) {
//     return num;
//   } else return !num;
// };

export const isEven = (num = 0) => {
  return num % 2 === 0;
};
