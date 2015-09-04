function secondPrime(number){
  if (number > 0) {
    var counter = 0;
    while (counter < 2) {
      number++;
      if (isPrime(number)) {
        counter ++;
      }
    }
    return number;
  }
}


function isPrime(number){
  if (number > 2) {
    for (var i=2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    } return true;
  } else if (number > 0){
    return true;
  } else {
    return 'cannot check negative numbers';
  }
}

module.exports = {
  secondPrime: secondPrime
};
