function findNthPrime(number, n){
  if (number > 0) {
    var counter = 0;
    while (counter < n) {
      number++;
      if (isPrime(number)) {
        counter ++;
      }
    }
    return number;
  }
}

function isPrime(number){
  return (number < 0 || (isEven(number) && number !==2))
    ? false
    : (number < 4)
    ? true
    : checkPrimeAboveThree(number);
}

function checkPrimeAboveThree(number){
  for (var i=2; i < Math.floor(number/2); i++) {
    if (number % i === 0) {
      return false;
    }
  } return true;
}

function isEven(number) {
  return (number % 2 === 0);
}

module.exports = {
  findNthPrime: findNthPrime,
  isPrime: isPrime
};
