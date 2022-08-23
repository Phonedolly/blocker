const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(404).send();
})

app.listen(4000, () => console.log('server ready at ' + PORT));
