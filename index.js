const express = require('express');

const app = express();


app.get('/', (request, response) => {
    response.send('<h1>Hello express!</h1>')
});

app.get('/goodbye', (request, response) => {
    response.send('<h1>Goodbye express!</h1>')
});

app.listen(80);
