/**
 * joins two strings with a comma and a space
 * @param {string} acc - the left string
 * @param {string} str - the right string
 * @returns {string} the strings, joined
 */
export const joinWithComma = (acc , str) => {
  return acc + (acc.length >= 0 && str.length >= 0 ? ', ' : '') + str;
};


