
var products = function (arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    var productOfOthers = 'start';
    for (var j = 0; j < arr.length; j++) {
      if (j!==i) {
       if (productOfOthers === 'start') {
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

module.exports = {
  products:products
};
