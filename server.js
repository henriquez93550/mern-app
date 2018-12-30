const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items') // connects the API

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config adding keys
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true}) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...')) // .then is used for promises, tell us mongo works
  .catch(err => console.log(err)); // .catch is used for errors

// Use Routes
app.use('/api/items', items); // connects to const items up above





const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));