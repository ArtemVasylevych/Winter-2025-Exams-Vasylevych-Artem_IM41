'use strict';

const findObjByValue = (object, value) => {
  const names = Object.keys(obj);
  for (const name of names) {
    if (object[name] === value) {
      return name;
    }
    }
    return undefined;
  };

module.exports = findObjByValue;
