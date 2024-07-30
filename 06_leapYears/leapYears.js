// const leapYears = (year) => {
//   return new Date(year, 1, 29).getMonth() === 1;
// };

const leapYears = (year) =>
  (0 === year % 4 && 0 !== year % 100) || 0 === year % 400 ? true : false;

// Do not edit below this line
module.exports = leapYears;
