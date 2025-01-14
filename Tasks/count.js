'use strict'

const count = (obj) => {
  let sum = 0;
  const objValues = Object.values(obj);
  for (const value of objValues) {
    if (typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
};

module.exports = count;
