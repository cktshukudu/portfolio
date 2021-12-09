let express = require('express');
let app = express();
const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');
const path = require('path');


let PORT = process.env.PORT || 3001;

//Configure the express-handlebars module
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));



  app.get('', (req, res) => {
    res.render('home');
  });

  app.post('', (req, res) => {
    res.redirect('');
  });


  app.get('/project', (req, res) => {
    res.render('project');
  });

 
  app.post('/project', (req, res) => {
    res.redirect('/home');
  });

  app.post('/cv', (req, res) => {
    var fileId = '1ZdR3L3qP4Bkq8noWLJHSr_iBau0DNT4Kli4SxNc2YEo';
var dest = fs.createWriteStream('/tmp/resume.pdf');
drive.files.export({
  fileId: fileId,
  mimeType: 'application/pdf'
})
    .on('end', function () {
      console.log('Done');
    })
    .on('error', function (err) {
      console.log('Error during download', err);
    })
    .pipe(dest);

    res.redirect('/home');
  });

app.listen(PORT, function () {
  console.log('App starting on port', PORT);
});

