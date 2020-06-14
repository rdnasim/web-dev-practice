const team = {
    _players: [
        {
            firstName: "Ray",
            lastName: "Yao",
            age: 28
        },

        {
            firstName: "Josh",
            lastName: "Wilcox",
            age: 30
        },

        {
            firstName: "Teja",
            lastName: "Gotimukala",
            age: 25
        },
    ],
    _games: [
        {
            opponent: "Fuel",
            teamPoints: 3,
            opponentPoints: 2
        },

        {
            opponent: "Dragons",
            teamPoints: 1,
            opponentPoints: 3
        },

        {
            opponent: "NYXL",
            teamPoints: 0,
            opponentPoints: 3
        },

    ],


    get players(){
        return this._players;
    },

    get games(){
        return this._games;
    },

    addPlayer(firstName, lastName, age){
        let newPlayer = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(newPlayer);
    },

    addGame(opp, myPts, oppPts){
        const newGame = {
            opponent: opp,
            teamPoints: myPts,
            opponentPoints: oppPts
        };
        this.games.push(newGame);
    }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Curry', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Outlaws', 1, 3);
team.addGame('Gladiators', 3, 1);
team.addGame('Mayhem', 3, 0);

console.log(team.players);
console.log();
console.log(team.games);
