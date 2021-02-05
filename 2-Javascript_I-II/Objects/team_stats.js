//1.We want a data structure to store the information about our team. Create an empty team object.
//2.Our team has players, and the team plays games. We want to represent both of these. Add two properties to your team object. A _players property and a _games property that are both initialized to empty arrays.
//3.Populate the empty array that corresponds to the _players key in your team object with three actual players. They should be in the following format:
//4.Populate the empty array that corresponds to the _games key in your object with three actual games. They should be in the following format:
//5.Create getter methods for your _players and _games keys. You do not need to create setter methods, because we don’t want anyone to change the values saved to these keys.
//8.The scorekeeper has some new information for us! Add a similar method for recording game results called addGame that:takes in an opponent’s name, your team’s points, the opponent’s points, creates a game object, adds the game object to your team‘s games array.
const team = {
  _players: [   //3
    {firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 12},
    {firstName: 'Olbap',
    lastName: 'Zechan',
    age: 15},
    {firstName: 'Olaf',
    lastName: 'Zuria',
    age: 13},
  ],
  _games: [   //4
    {opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27},
    {opponent: 'Brad',
    teamPoints: 35,
    opponentPoints: 26},
    {opponent: 'Tacos',
    teamPoints: 56,
    opponentPoints: 28},
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer (firstName, lastName, age) {  //6
  player = {
     firstName,
     lastName,
     age,
  };
  this._players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints) { //8
    game = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this._games.push(game);
  }
};
//7.Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76. Print out the team‘s players to check they were all properly added.
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

//9. Invoke your addGame method on three games and print the team‘s updated games array.
team.addGame('Burritos', 28, 29);
team.addGame('Ramen', 26, 58);
team.addGame('Kimchi', 22, 33);
console.log(team._games);
