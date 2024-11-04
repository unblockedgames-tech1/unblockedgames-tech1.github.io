import gamesData from './games.js';
import games2Data from './games2.js';

console.log("Games data 1:", gamesData);
console.log("Games data 2:", games2Data);

const allGames = [...gamesData, ...games2Data];
console.log("Combined games:", allGames);

export default allGames;
