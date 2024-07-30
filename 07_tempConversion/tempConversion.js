const convertToCelsius = (fahToCel) => {
  return +(((fahToCel - 32) * 5) / 9).toFixed(1);
};

const convertToFahrenheit = (celToFah) => {
  return +((celToFah * 9) / 5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
