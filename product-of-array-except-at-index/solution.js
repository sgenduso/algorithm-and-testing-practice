// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
//
// For example, given:
//
//   [1, 7, 3, 4]
// your function would return:
//
//   [84, 12, 28, 21]
// by calculating:
//
//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]
// Do not use division in your solution.



var products = function (arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    var productOfOthers = 0;
    for (var j = 0; j < arr.length; j++) {
      if (j!==i) {
       if (productOfOthers === 0) {
          productOfOthers = arr[j];
        } else {
        productOfOthers *= arr[j];
        }
      }
    }
    output.push(productOfOthers);

  }
  return output;
};

var questionArray = [1, 7, 3, 4];

console.log(products(questionArray));

module.exports = {
  products:products
};
