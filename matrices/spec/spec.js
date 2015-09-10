var myCode = require('../solution');

describe('twoByTwoIdentityMatrix', function() {
  it('returns the 2X2 identity matrix', function() {
    // pending();
    expect(myCode.twoByTwoIdentityMatrix()).toEqual([[1, 0], [0, 1]]);
  });
});

describe('identityMatrix', function() {
  it('returns an identity matrix sized corresponding to the argument', function() {
    // pending();
    var expectedOutput = [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ];

    expect(myCode.identityMatrix(4)).toEqual(expectedOutput);
  });
});

describe('matrixAddition', function() {
  it('returns the result of position-wise addition of two matrices (e.g. position ij of matrix A is added to position ij of matrix B for all i,j) of the same size', function() {
    // pending();
    var a = [
      [1, 0],
      [0, 1]
    ];

    var b = [
      [3, 4],
      [1,-1]
    ];

    var expected = [
      [4, 4],
      [1, 0]
    ];

    expect(myCode.matrixAddition(a, b)).toEqual(expected);
  });
});

describe('matrixSubtraction', function() {
  it('returns the result of position-wise subtraction of two matrices (e.g. position ij of matrix A is added to position ij of matrix B for all i,j) of the same size', function() {
    // pending();
    var a = [
      [1, 0],
      [0, 1]
    ];

    var b = [
      [3, 4],
      [1,-1]
    ];

    var expected = [
      [-2, -4],
      [-1,  2]
    ];

    expect(myCode.matrixSubtraction(a, b)).toEqual(expected);
  });
});

describe('matrixConstantMultiplication', function () {
  it('returns the product of a constant times each element of the matrix', function () {
    // pending();
    var matrix = myCode.identityMatrix(3);
    var expected = [
      [3, 0, 0],
      [0, 3, 0],
      [0, 0, 3]
    ];

    expect(myCode.matrixConstantMultiplication(3, matrix)).toEqual(expected);
  });
});
