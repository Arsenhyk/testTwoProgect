const express = require('express')
const app = express()
//подключаем патч для подтягивания папок
const path = require('path');
//подключаем патч для staticAsset
const staticAsset = require('static-asset'); 




//bodyParser
var bodyParser = require('body-parser')



//указываем  express использовать bodyParser
app.use(bodyParser.urlencoded({extended: true}));

//указываем  express использовать staticAsset
app.use(staticAsset(path.join(__dirname, 'public')))

//указываем  express подтягивать папки 
app.use(express.static(path.join(__dirname, 'public')))

//указываем  express использовать jquery
app.use('/javascripts', express.static(__dirname + '/node_modules/jquery/dist/'));


//указываем  express использовать  ejs
app.set('view engine', 'ejs')


//рендеринг главной страници 
app.get('/', (req, res) =>
 //обьекты рендеренга на главную страницу

 {
  res.render('index')
})

module.exports = app

