function anagram(word, arrayOrWord) {
  return (typeof(arrayOrWord) === 'object') ? arrayFn(word, arrayOrWord) : stringFn(word, arrayOrWord);
}

function arrayFn(word, arrayToSearch) {
  return arrayToSearch.filter(function (arrayWord) {
    return sortWord(arrayWord) === sortWord(word);
  });
}

function stringFn(word, wordToSearch, arraytoPopulate) {
  if (sortWord(wordToSearch) === sortWord(word)) {
    return [wordToSearch];
  }
}

function sortWord(word) {
  return word.toLowerCase().split('').sort().join('');
}

module.exports = {
  anagram: anagram
};
