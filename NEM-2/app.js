const express = require('express')
const app = express()

//подключаем post
const Post = require('./models/post');

//bodyParser
var bodyParser = require('body-parser')



//указываем  express использовать bodyParser
app.use(bodyParser.urlencoded({extended: true}));


//указываем  express использовать  ejs
app.set('view engine', 'ejs')


//рендеринг главной страници 
app.get('/', (req, res) =>
 //обьекты рендеренга на главную страницу
{
  Post.find({}).then(posts =>{
    res.render('index', {posts: posts})
  })
})
/*  {
  res.render('index', {arr: arr})
}) */

//рендеринг create страници 
app.get('/create', (req, res) => {
  res.render('create')
})

//обработчик create страници 
app.post('/create', (req, res) => {

  //заносим в БД
  const{title, body} = req.body; //рестрктирезация 

  Post.create({
    title: title,
    body: body
  }).then(post => console.log(post.id))

  //выводим на страницу
  //arr.push(req.body.title)

  res.redirect('/')
  console.log(req.body);
})

module.exports = app

