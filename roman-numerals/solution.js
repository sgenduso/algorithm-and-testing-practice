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

function convertRecursively(romanNumeral){
  var decimalValue = 0;
  var numerals = romanNumeral.split('').map(function (numeral) {
    return romanNumerals[numeral];
  });
  return addRecursively(numerals);
}

function addRecursively(array){
  if (array.length === 0) {
    return 0;
  } else if (array[1] > array[0]){
    var spliced = array.splice(0,2);
    return (spliced[1] - spliced[0]) + addRecursively(array);
  } else {
    return array.splice(0,1)[0] + addRecursively(array);
  }
}

module.exports = {
  convert: convert,
  convertRecursively: convertRecursively
};
