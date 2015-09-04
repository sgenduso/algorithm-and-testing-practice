var myCode = require('../solution.js');

describe('secondPrime', function() {

  it('takes any positive integer and returns the second prime number after that number', function() {


    expect(myCode.secondPrime(2)).toEqual(5);

    expect(myCode.secondPrime(3)).toEqual(7);

    expect(myCode.secondPrime(5)).toEqual(11);


  });

});
