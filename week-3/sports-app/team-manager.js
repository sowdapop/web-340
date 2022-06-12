//Kayla McDanel
//12 June 2022
//Assignment 3.2
//Node's Module System
//used https://momentjs.com/guides/ to research use for date

function findTeams(){
  return teams
}

//Defines team objects
const teams = [
    {
      name: 'Wyoming',
      mascot: 'Cows',
      playerCount: '22',
      color: 'purple',
      rank: '6',
    },
    {      
    name: 'Connecticut',
    mascot: 'Yales',
    playerCount: '25',
    color: 'yellow',
    rank: '9',
    },
    {      
      name: 'Idaho',
      mascot: 'Potatoes',
      playerCount: '29',
      color: 'brown',
      rank: '4',
    },
    {      
      name: 'Wisconsin',
      mascot: 'Cheeses',
      playerCount: '32',
      color: 'green',
      rank: '7',
    },
    {      
      name: 'Maine',
      mascot: 'Lobsters',
      playerCount: '36',
      color: 'red',
      rank: '2',
    }
  ];

console.log(findTeams());

//This is supposed to get team names.
function findTeam(team){
    return (name, mascot);
}

//Moment declaration for the date
var date = moment.js().format('MM DD YY');
console.log(date);

//return string including date
function getGame(string){
    return (team + mascot + "is playing" + team + mascot + "on" + date + "at 7:30PM CST");
}

//Exports two functions
module.exports = 'findTeams()';
module.exports = 'getGame()';