function anagram(word, array) {
  var sortedWord = word.toLowerCase().split('').sort().join('');
  var sorted = array.map(function (word) {
    return word.toLowerCase().split('').sort().join('');
  });
  var anagrams = [];
  sorted.forEach(function (word, i) {
    if (word === sortedWord) {
      anagrams.push(array[i]);
    }
  });
  console.log(word);
  console.log(anagrams);
  return anagrams;
}

module.exports = {
  anagram: anagram
};
