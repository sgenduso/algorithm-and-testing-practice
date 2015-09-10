module.exports = {
  twoByTwoIdentityMatrix: function() {
    return [
      [1,0],
      [0,1]
    ];
  },

  identityMatrix: function(n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
      matrix[i] = [];
      for (var j = 0; j < n; j++) {
        matrix[i][j] = (i === j) ? 1 : 0;
        }
      }
      return matrix;
  },

  matrixAddition: function (a, b) {
    return this.addOrSubtract('add', a, b);
  },

  matrixSubtraction: function (a, b) {
    return this.addOrSubtract('subtract', a, b);
  },

  matrixConstantMultiplication: function (multiplier, matrix) {
    return this.addOrSubtract(multiplier, matrix);
  },

  addOrSubtract: function (operation, matrix1, matrix2) {
    var mathedMatrix = [];
    for (var i = 0; i < matrix1[0].length; i++) {
      mathedMatrix[i] = [];
      for (var j = 0; j < matrix1[0].length; j++) {
        if (operation === 'add') {
          mathedMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
        } else if (operation === 'subtract') {
          mathedMatrix[i][j] = matrix1[i][j] - matrix2[i][j];
        } else {
          mathedMatrix[i][j] = matrix1[i][j] * operation;
        }
      }
    }
      return mathedMatrix;
  }

};
