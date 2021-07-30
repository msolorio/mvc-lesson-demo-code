////////////////////// CONFIGURATION /////////////////////
const express = require('express');
const app = express();
const port = 4000;
app.set('view engine', 'ejs');


const fruits = require('./models/fruit_model');


/////////////////////////// ROUTES ///////////////////////
app.get('/', (request, response) => {
  response.send('Welcome to the Fruits App');
});



app.get('/about', (request, response) => {
  response.send('All about my website');
})



// app.get('/fruits', (request, response) => {
//   response.send(fruits);
// })


app.get('/fruits', (request, response) => {
  // response.send(fruits);
  response.render('index.ejs', {
    allFruits: fruits
  });
})



app.get('/fruits/:fruitIndex', (request, response) => {
  // response.send(fruits[request.params.fruitIndex]);
  response.render('show.ejs', {
    oneFruit: fruits[request.params.fruitIndex]
  });
});






app.listen(port, () => {
  console.log(`Your server is running on port: ${port} 🚀`);
});
