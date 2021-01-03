const express = require('express')
const app = express()
const port = 3000

//указываем  express использовать  ejs
app.set('view engine', 'ejs')


//рендеринг главной страници 
app.get('/', (req, res) => {
  res.render('index')
})

//рендеринг  страници create
app.get('/create', (req, res) => {
  res.render('create')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 