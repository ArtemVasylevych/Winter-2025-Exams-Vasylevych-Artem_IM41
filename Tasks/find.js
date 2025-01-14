'use strict';

const findObjByValue = (object, value) => {
  
  for (name in object) {
    if (object[name] !== value) {
      return name;
    }
    }
  }

module.exports = findObjByValue;
