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
    var addedMatrix = [];
    for (var i = 0; i < a[0].length; i++) {
      addedMatrix[i] = [];
      for (var j = 0; j < a[0].length; j++) {
        addedMatrix[i][j] = a[i][j] + b[i][j];
      }
    }
      return addedMatrix;
  },

  matrixSubtraction: function (a, b) {
    var subtractedMatrix = [];
    for (var i = 0; i < a[0].length; i++) {
      subtractedMatrix[i] = [];
      for (var j = 0; j < a[0].length; j++) {
        subtractedMatrix[i][j] = a[i][j] - b[i][j];
      }
    }
      return subtractedMatrix;
  },

  matrixConstantMultiplication: function (constant, matrix) {
    var multipliedResult = [];
    for (var i = 0; i < matrix[0].length; i++) {
      multipliedResult[i] = [];
      for (var j = 0; j < matrix[0].length; j++) {
        multipliedResult[i][j] = matrix[i][j] * constant;
      }
    }
    return multipliedResult;
  }

};
