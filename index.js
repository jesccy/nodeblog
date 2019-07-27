const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const appConfig = require('./config/appConfig.js')


//middlewares

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(function (req, res) {    
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))  
})   



const port = 3000
var fs = require('fs');
//let helloworldfuntion = (req, res) => res.send('Hello World!')
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(appConfig.port, () => {
  console.log(`Example app listening on port ${appConfig.port}!`);
  let connectionString = `mongodb://${appConfig.db.host}:${appConfig.db.port}/${appConfig.db.name}`;
  let db = mongoose.connect(connectionString, { useNewUrlParser: true });
  mongoose.set('useCreateIndex', true);
});

let routesPath = "./routes";

fs.readdirSync(routesPath).forEach(function (file) {
  if (file.indexOf('.js')) {
    console.log("module loaded" + routesPath + '/' + file)
    let route = require(routesPath + '/' + file);
    route.setRouter(app);
  }
});


let modelsPath = "./models";
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js')) {
    console.log("module loaded" + modelsPath + '/' + file)
    require(modelsPath + '/' + file);

  }  

});


var db = mongoose.connection;
db.on('error', function (err) {
  // we're connected!
  console.log("error in function");
  console.log("errror");
});
db.once('open', function (err) {
  if (err) {
    console.log("there is an error");
  } else {
    console.log("database connection can sucess");
  }
});

// var files = fs.readdirSync('./routes');
// for (var i in files) { 
//   var definition = require('./routes/' + files[i]).Model;
//   console.log('Model Loaded: ' + files[i]);


// }  

// var http = require('http');
// // var dt = require('./routes');


// var http = require('http');
// var dt = require('./routes/blog');

// app.get(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();  
// });  





// var routes = require('./routes');
// app.use('/api', routes);