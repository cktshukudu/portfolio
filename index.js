let express = require('express');
let app = express();
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const path = require('path');


let PORT = process.env.PORT || 3001;

//Configure the express-handlebars module
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const session = require('express-session');
const { compile } = require('handlebars');

//Set-up middleware



//app.use(fav(path.join(__dirname, 'public', 'img/favicon.ico')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));



  app.get('', (req, res) => {
    res.render('home');
  });

  app.post('', (req, res) => {
    res.redirect('');
  });



 


 

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});

