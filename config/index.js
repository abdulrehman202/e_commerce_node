require('dotenv').config();
const http = require('http');
const express = require('express');
const db = require('../scripts/login.js');

const app = express();

const port = process.env.PORT;

const nocache = (_, resp, next) => {
  resp.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  resp.header('Expires', '-1');
  resp.header('Pragma', 'no-cache');
  next();
}

async function login(req, res,next)
{
  const response = await db.getUserInfo(req.params.email, req.params.password);
  res.json({result: response});
}


app.get('/login/:email/:password', nocache , login);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});


