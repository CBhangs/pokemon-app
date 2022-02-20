const express = require('express'); // lets you run express
const app = express(); // calls express to work 
const pokemon = require('./models/pokemon');

app.get('/greeting', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
});

app.get('/pokemon', (req, res) => {
    res.send(pokemon)
});



app.listen(3000, () => {
    console.log('Hello Trainers')
})