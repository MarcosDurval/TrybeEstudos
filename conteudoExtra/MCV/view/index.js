const express = require('express');
const bodyParser = require('body-parser');

const authorController = require('./controllers/authorController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine','ejs');

app.set('views','./views');

app.get('/authors', authorController.listAuthors);

app.get('/authors/new', authorController.newAuthor);

app.get('/authors/:id', authorController.showAuthor);

app.post('/authors', authorController.createAuthor);


export default app
