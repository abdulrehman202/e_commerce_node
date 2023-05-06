
const db = require('./connect.js');

async function authenticatetUser(email, password)
{
  let myDb = await db.dataBase();
  const collection = await myDb.collection('users');
  const filteredDocs = await collection.find({ email: email, password: password }).toArray();
  return filteredDocs;

}

module.exports = {getUserInfo: authenticatetUser};