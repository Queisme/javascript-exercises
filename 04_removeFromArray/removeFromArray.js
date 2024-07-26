const removeFromArray = (arrs, ...reMove) => {
  const trying = new Set(reMove);
  return arrs.filter((value) => !trying.has(value));
};

// Do not edit below this line
module.exports = removeFromArray;
