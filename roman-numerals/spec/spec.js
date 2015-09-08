var myCode = require('../solution.js');

describe('convert', function() {

  it('takes a roman numeral and returns a decimal value', function() {

    expect(myCode.convert('IX')).toEqual(9);
    expect(myCode.convert('LX')).toEqual(60);
    expect(myCode.convert('MMXV')).toEqual(2015);

});

});
