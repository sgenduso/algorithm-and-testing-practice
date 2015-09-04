var myCode = require('../solution.js');

describe('findNthPrime', function() {

  it('takes any positive integer and returns the nth prime number after that number', function() {


    expect(myCode.isPrime(2)).toEqual(true);
    expect(myCode.isPrime(3)).toEqual(true);
    expect(myCode.isPrime(4)).toEqual(false);
    expect(myCode.isPrime(5)).toEqual(true);
    expect(myCode.isPrime(9)).toEqual(false);

    expect(myCode.findNthPrime(-2, 2)).toEqual(undefined);
    expect(myCode.findNthPrime(2, 2)).toEqual(5);
    expect(myCode.findNthPrime(3, 2)).toEqual(7);
    expect(myCode.findNthPrime(5, 2)).toEqual(11);

    expect(myCode.findNthPrime(3, 3)).toEqual(11);
    expect(myCode.findNthPrime(5, 3)).toEqual(13);


  });

});
