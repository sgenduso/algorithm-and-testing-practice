function Node(x,y){
  this.x = x;
  this.y = y;
}

function distance(node1, node2){
  return Math.sqrt((Math.pow((node2.x-node1.x),2)) + (Math.pow((node2.y-node1.y),2)));
}

function generatePlayers(min, max, numOfPlayers){
  var players = [];
  for (var i = 0; i < numOfPlayers; i++) {
    var randX = Math.floor(Math.random()*(max-min+1)+min);
    var randY = Math.floor(Math.random()*(max-min+1)+min);
    players.push(new Node(randX, randY));
  }
  return players;
}

function closestPlayer(players, flag){
  var closest = players[0];
  for (var i = 1; i < players.length; i++) {
    var d = distance(players[i], flag);
    console.log('distance: ' + d);
    if (d < distance(closest,flag)){
      closest = players[i];
    }
  }
  console.log('closest player: ' + closest);
  console.log('closest player\'s distance: ' + distance(closest, flag));
  return closest;
}

var players = generatePlayers(0,10,5);
console.log(players);
var flag = new Node(6,4);

closestPlayer(players, flag);

module.exports = {
  Node: Node,
  distance: distance,
  generatePlayers: generatePlayers,
  closestPlayer: closestPlayer
};
