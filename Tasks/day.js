'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (dayName) => {
  let i = 0;
  for (const day of days) {
    if (dayName.startsWith(day.toLowerCase())) {
      return i + 1;
    }
    i++
  }
  return -1;
};

module.exports = parseDay;
