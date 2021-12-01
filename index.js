let express = require('express');
let app = express();




const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const path = require('path');


let PORT = process.env.PORT || 3003;

//Configure the express-handlebars module
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const session = require('express-session');
const { compile } = require('handlebars');
const { query } = require('express');



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));


  

  
  app.listen(PORT, function () {
    console.log('App starting on port', PORT);
  });
