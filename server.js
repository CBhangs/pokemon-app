const express = require('express'); // lets you run express
const app = express(); // calls express to work 
const pokemons = require('./models/pokemon'); // imports pokemon array


const port = 3000 

//  set up views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
});

// index
app.get('/pokemon', (req, res) => {
    res.render('Index', {
        pokemons: pokemons
    })
});





app.listen(port, () => {
    console.log('Hello Trainers')
})