const app = require('./app');
const database = require('./dataBase');
const config = require('./config');

database().then(info => {
  console.log(`Connect to ${info.host}:${info.port}/${info.name}`)

app.listen(config.PORT, () => {
  console.log(`Example app listening at http://localhost:${config.PORT}`)
  }) 
})






