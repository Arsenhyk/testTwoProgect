const express = require('express')
const app = express()
const port = 3000

//указываем  express использовать  ejs
app.set('view engine', 'ejs')


//рендеринг главной страници 
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 