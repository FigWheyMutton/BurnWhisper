const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const { Cookie } = require('express-session');
const { session } = require('./utils/passport');




const app = express();
const PORT = process.env.PORT || 3001;


app.use(require('./controllers'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
