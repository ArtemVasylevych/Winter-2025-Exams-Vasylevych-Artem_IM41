'use strict';

invert = (arr) {
  const inverted = [];
  const lengthOfArray = arr.length
  for (let i = lengthOfArray - 1; i >= 0; i--) {
    inverted.push(arr[i]);
    }
  return inverted;
};

module.exports = invert;