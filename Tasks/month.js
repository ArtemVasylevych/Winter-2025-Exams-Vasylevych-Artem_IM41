'use strict';

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const monthNum = (input) => {
  const monthName = input.toLowerCase();
  
  for (let i = 0; i < l; i++) {
    if (monthName.startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = monthNum;
