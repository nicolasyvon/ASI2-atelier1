'use strict';

global.CONFIG = require('./config.json');

const {resolve} = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const GameRouter = require('./app/routers/GameRouter');


const app = express();
app.use(bodyParser.json({}));

app.use(function(req, res, next){
    console.log(req.path);
    next();
});

//app.use(express.static(CONFIG.publicDir));

app.use('/api', GameRouter);

app.use(function(req, res){
  console.warn(`${req.path} 404`);
  res.status(404);
  //res.sendFile(resolve(`${CONFIG.publicDir}/img/404.png`));
  res.redirect('/img/404.png');
});

app.listen(CONFIG.port, () => {
  console.log('listening on http://localhost:'+CONFIG.port);
});