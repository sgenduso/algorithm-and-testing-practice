var myCode = require('../solution.js');
var Node = myCode.Node;

describe('distance', function() {

  it('returns the distance between 2 objects which each have x and y coordinates', function() {

    var node1 = new Node(3, 5);
    var node2 = new Node(2, 2);

    expect(myCode.distance(node1, node2)).toEqual(Math.sqrt(10));

  });

});

describe('closestPlayer', function () {

  it('takes an array of players and a flag, finds the distance of each player from the flag, and returns the player who is closest to the flag', function () {

    // var players = generatePlayers(0,10,5);
    var players = [
      { x: 9, y: 9 },
      { x: 2, y: 1 },
      { x: 2, y: 5 },
      { x: 0, y: 2 },
      { x: 1, y: 2 }
    ];
    var flag = new Node(6,4);
    expect(myCode.closestPlayer(players, flag)).toEqual({ x: 2, y: 5 });

  });

});
