import gamesData from './games.js';
import games2Data from './games2.js';

// Combine all game lists
const allGames = [...gamesData, ...games2Data];

// Optional: Sort games alphabetically by title
const sortedGames = allGames.sort((a, b) => a.title.localeCompare(b.title));

export default sortedGames;
