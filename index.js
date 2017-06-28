const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/index/:names', function (request, response) {
  const name = request.params.names || 'MyName';
});


app.get('/index', function(request, response) {
  response.render('index', {index: {}});
});

app.post('/index', function (request, response) {
  response.render('index', {index: request.body});
});

const PORT = 5555;
app.listen(PORT, () => {
  console.log(`Server is up and running, listening on http://localhost:${PORT}`);
});
