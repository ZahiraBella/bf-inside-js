/**
 * Takes an array of strings and returns a new array containing numbers that aren't NaN
 * Does not modify the argument
 * @param {string[]} arr - The array of strings
 * @returns {number[]} An array containing numbers that aren't NaN
 */
export const numberyNumberify = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const num = Number(arr[i]);
    if (!isNaN(num)) {
      result.push(num);
    }
  }
  return result;
};
