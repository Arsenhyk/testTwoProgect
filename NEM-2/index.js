const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')

//указываем  express использовать bodyParser
app.use(bodyParser.urlencoded({extended: true}));


//указываем  express использовать  ejs
app.set('view engine', 'ejs')


//рендеринг главной страници 
app.get('/', (req, res) => {
  res.render('index')
})

//рендеринг create страници 
app.get('/create', (req, res) => {
  res.render('create')
})

//обработчик create страници 
app.post('/create', (req, res) => {
  console.log(req.body);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 