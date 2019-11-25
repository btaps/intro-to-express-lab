
// getting express module
const express = require('express');
const path = require('path');
// const namesList = require('./data/name-list')
 const namesList = require('./data/names-list');

// create express app
const app = express();


 // Configure the app (app.set)
 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'))

// define a 'root' derictly on app
app.get('/', (req, res)=>{
res.redirect('/home');


})

app.get('/home', (req, res)=>{
	res.render('home');

})

// app.get('/names-list', (req, res)=>{
// 	res.render('names/index.ejs', {
// 		names : namesList.getAll()
// 	});
// });

 app.get('/names', function(req, res) {
   res.render('namesFolder/index', {
     names: namesList.getAll()
   });
 });


app.listen(9000)