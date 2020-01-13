const express = require('express')
const app = express()
const hbs = require('hbs');
const helpers = require('./hbs/helpers/helpers')

const port = process.env.PORT || 3000;

app.use( express.static(__dirname + '/public'));

// Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {  
  res.render('home', {
      name: 'tona flores castelan',
  });
});

app.get('/about', function (req, res) {
  res.render('about');
});
 
app.listen(port, () => {
    console.log(`Peticiones en el puerto ${ port }`);
})