var doorArray = [];
var openCount=0;

//populate doors
for (var i = 0; i < 101; i++) {
  doorArray.push('closed');
}

//open or close on each pass based on odd or even
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

// run open&close function for each door
for (var i = 0; i < doorArray.length; i++) {
  singlePass(i);
}

doorArray.forEach(function (e, i) {
  console.log(i + ': ' + e);
});
console.log(openCount + ' lockers open');
