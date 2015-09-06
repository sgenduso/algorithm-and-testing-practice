var doorArray = [];
var openCount=0;
for (var i = 0; i < 101; i++) {
  doorArray.push('closed');
  if (doorArray[i-1] === 'closed') {
  }
}

function singlePass(x) {
  for (var i = 0; i < doorArray.length; i++) {
    if (i % x === 0) {
      if (doorArray[i] === 'closed') {
        doorArray[i] = 'open';
        openCount++;
      } else {
        doorArray[i] = 'closed';
        openCount--;
      }
    }
  }
}

for (var i = 0; i < doorArray.length; i++) {
  singlePass(i);
}

doorArray.forEach(function (e, i) {
  console.log(i + ': ' + e);
});
console.log(openCount + ' lockers open');

// for (var i = 1; i < 101; i++) {
//   for (var j = 0; j < doorArray.length; j+=i) {
//     if (doorArray[j] === 'open') {
//       doorArray[j] = 'closed';
//       openCount--;
//     } else {
//       doorArray[j] = 'open';
//       openCount++;
//     }
//   }
// }
// console.log(openCount, doorArray);
