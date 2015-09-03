function anagram(word, arrayOrWord) {
  var sortedWord = word.toLowerCase().split('').sort().join('');
  var anagrams = [];
  if (typeof(arrayOrWord) === 'object') {
    arrayOrWord.forEach(function (word) {
      if (word.toLowerCase().split('').sort().join('') === sortedWord) {
        anagrams.push(word);
      }
    });

  } else if(typeof(arrayOrWord) === 'string'){
    if (arrayOrWord.toLowerCase().split('').sort().join('') === sortedWord) {
      anagrams.push(arrayOrWord);
    }
  }
  console.log(word);
  console.log(anagrams);
  return anagrams;
}
// 
// function arrayFn() {
//
// }
//
// function stringFn() {
//
// }


module.exports = {
  anagram: anagram
};
