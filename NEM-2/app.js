const express = require('express')
const app = express()


var bodyParser = require('body-parser')


const arr = ['hello', 'world', 'test']

//указываем  express использовать bodyParser
app.use(bodyParser.urlencoded({extended: true}));


//указываем  express использовать  ejs
app.set('view engine', 'ejs')


//рендеринг главной страници 
app.get('/', (req, res) => {
  res.render('index', {arr: arr})
})

//рендеринг create страници 
app.get('/create', (req, res) => {
  res.render('create')
})

//обработчик create страници 
app.post('/create', (req, res) => {
  arr.push(req.body.text)
  res.redirect('/')
  console.log(req.body);
})

module.exports = app

