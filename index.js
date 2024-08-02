const express = require('express');
const app = express();
const server = app.listen(8080, () => {
    console.log(`Server running on port ${server.address().port}`);
});
app.use(express.static('static'));
console.log("Static html files loaded");
app.use(express.static('img'));
console.log('Static images loaded');
