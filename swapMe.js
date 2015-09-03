var swapMe = function (array, index1, index2) {
var iFirst = array[index1];
var iSecond = array[index2];
  array[index1] = iSecond;
  array[index2] = iFirst;
return array;
};
