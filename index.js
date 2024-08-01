const express = require('express');
const app = express();
const server = app.listen(8080, () => {
    console.log(`Server running on port ${server.address().port}`);
});
console("Static html files loaded")
app.use(express.static('static'))