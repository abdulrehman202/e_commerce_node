require('dotenv').config();
const { MongoClient } = require('mongodb');

// Connection URL
const url = `mongodb://localhost:${process.env.DATABASE_PORT}`;
const client = new MongoClient(url);

const dbName = process.env.DATABASE_NAME;

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to database');
    const db = client.db(dbName);
    return db;
  }

module.exports = {dataBase: main};