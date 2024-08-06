const palindromes = (words) => {
  const alphaNums = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cleaned = words
    .toLowerCase()
    .split('')
    .filter((character) => alphaNums.includes(character))
    .join('');
  const reverWords = [...cleaned].toReversed('').join('');
  return reverWords === cleaned;
};

// Do not edit below this line
module.exports = palindromes;
