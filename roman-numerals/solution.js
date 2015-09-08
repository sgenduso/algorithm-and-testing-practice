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
  var numerals = romanNumeral.split('');
  numerals = numerals.map(function (numeral) {
    return romanNumerals[numeral];
  });
  var counter = 0;
  while (counter < numerals.length) {
    if (numerals[counter+1] > numerals[counter]) {
      decimalValue += (numerals[counter+1] - numerals[counter]);
      counter += 2;
    } else {
      decimalValue += numerals[counter];
      counter ++;
    }
  }
  console.log(decimalValue);
  return decimalValue;
}

module.exports = {
  convert: convert
};
