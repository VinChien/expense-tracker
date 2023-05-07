const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();



if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT;

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`);
});
