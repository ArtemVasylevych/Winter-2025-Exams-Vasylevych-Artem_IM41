'use strict';

invert = (arr) {
  const inverted = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    inverted.push(arr[i]);
    }
  return inverted;
};

module.exports = invert;