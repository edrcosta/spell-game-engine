/**
 * There is 3 ways of distribute games... 
 * 
 * 1 - your on node server like bellow 
 * 2 - raw html code **full opensource 
 * 3 - something like 
 */

const express = require('express');

const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();


app.use(express.static('public', 'public'))
app.use(favicon(__dirname + './src/documentation/favicon.ico'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/documentation/index.html'));
});
app.listen(port);