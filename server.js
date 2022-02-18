const express = require('express'); // lets you run express
const app = express(); // calls express to work 

app.get('/greeting', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>');
});



app.listen(3000, () => {
    console.log('Hello Trainers')
})