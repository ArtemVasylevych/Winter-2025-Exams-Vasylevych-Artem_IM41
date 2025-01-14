'use strict';

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (dayName) => {
  let i;
  for (i = 0; i < days.length; i++) {
    if (s.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
