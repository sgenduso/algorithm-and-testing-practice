var romanNumerals = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1
};

function convert(romanNumeral){
  var decimalValue = 0;
  var numerals = romanNumeral.split('').map(function (numeral) {
    return romanNumerals[numeral];
  });
  var i = 0;
  while (i < numerals.length) {
    if (numerals[i+1] > numerals[i]) {
      decimalValue += (numerals[i+1] - numerals[i]);
      i += 2;
    } else {
      decimalValue += numerals[i];
      i ++;
    }
  }
  return decimalValue;
}

module.exports = {
  convert: convert
};
