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
  let i = 0;

  for (const month of months) {
    i++;
    if (monthName.startsWith(month)) {
      return i;
    }
  }
  return -1;
};

module.exports = monthNum;
