// games2.js
const games2Data = [

    {
        title: "Example Game",
        imgSrc: "gameimg/example.png",
        link: __uv$config.prefix + __uv$config.encodeUrl("https://example.com/game")
    }
];

export default games2Data;

// gamesManager.js
import gamesData from './games.js';
import games2Data from './games2.js';

// Combine all game lists
const allGames = [...gamesData, ...games2Data];

export default sortedGames;
