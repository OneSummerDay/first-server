const express = require('express');

const app = express();


app.get('/hello/:name', (request, response) => {
    response.send(`<h1>Hello ${request.params.name}!</h1>`)
});

app.get('/goodbye', (request, response) => {
    response.send(`<h1>Goodbye ${request.query.name ?? express}!</h1>`)
});

app.listen(80);
