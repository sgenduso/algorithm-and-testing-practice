
module.exports = {
  twoByTwoIdentityMatrix: function() {
    return [
      [1,0],
      [0,1]
    ];
  },

  identityMatrix: function(n) {
    var container = [];
    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n; j++) {
        if (i === j) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      container.push(row);
    }
      return container;
  },

  matrixAddition: function (a, b) {
    var addedResult = [];
    for (var i = 0; i < a[0].length; i++) {
      var row = [];
      for (var j = 0; j < a[0].length; j++) {
        row.push(a[i][j] + b[i][j]);
      }
      addedResult.push(row);
    }
      return addedResult;
  },

  matrixSubtraction: function (a, b) {
    var subtractedResult = [];
    for (var i = 0; i < a[0].length; i++) {
      var row = [];
      for (var j = 0; j < a[0].length; j++) {
        row.push(a[i][j] - b[i][j]);
      }
      subtractedResult.push(row);
    }
      return subtractedResult;
  },

  matrixConstantMultiplication: function (constant, matrix) {
    var multipliedResult = [];
    for (var i = 0; i < matrix[0].length; i++) {
      var row = [];
      for (var j = 0; j < matrix[0].length; j++) {
        row.push(matrix[i][j] * constant);
      }
      multipliedResult.push(row);
    }
    return multipliedResult;
  }

};
