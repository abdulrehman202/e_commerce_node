require('dotenv').config();
const http = require('http');
const express = require('express');
const db = require('../scripts/connect.js');

const app = express();

const port = process.env.PORT;

const nocache = (_, resp, next) => {
  resp.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  resp.header('Expires', '-1');
  resp.header('Pragma', 'no-cache');
  next();
}


async function addDataToDB(req, resp, next)
{
  let myDb = await db.dataBase();
  const collection = await myDb.collection('col');
  const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  resp.json({result: 'ok'});
}

app.get('/sample', nocache , addDataToDB);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});


