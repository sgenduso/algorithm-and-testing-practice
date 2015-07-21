var myCode = require('../solution.js');

describe('products', function() {

  it('takes an array and for each index of the array returns the product of every integer except at that index', function() {
    var integers = [1, 7, 3, 4];

    expect(myCode.products(integers)).toEqual([84, 12, 28, 21]);
  });

});