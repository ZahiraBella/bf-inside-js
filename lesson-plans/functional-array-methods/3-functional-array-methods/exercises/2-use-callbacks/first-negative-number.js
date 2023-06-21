/**
 * Finds the first negative number in an array, returns undefined if there is none
 * Does not modify the array
 * @param {any[]} arr - The array of values
 * @returns {(number|undefined)} The first negative number
 */
export const firstNegativeNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] < 0) {
      return arr[i];
    }
  }
  return undefined;
};
