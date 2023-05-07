const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const usePassport = require('./config/passport');
const routes = require('./routes');

const app = express();

require('./config/mongoose');
const PORT = process.env.PORT;

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
usePassport(app);
app.use(flash());
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  res.locals.user = req.user;
  res.locals.success_msg = req.flash('success_msg');
  res.locals.warning_msg = req.flash('warning_msg');
  res.locals.error_msg = req.flash('error');
  next();
});

app.use(routes);
app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`);
});
