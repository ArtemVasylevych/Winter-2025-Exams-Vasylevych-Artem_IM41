'use strict';

invert = (arr) {
  T = Object.keys(arr, 4);
  T.forEach((_, i) => {
    T[i] = arr.pop(); 
    })
  return T;
};

module.exports = invert;
