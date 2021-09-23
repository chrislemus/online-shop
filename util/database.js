const mongodb = require('mongodb');
const { MongoClient } = mongodb;
const mongoDbPassword = encodeURIComponent(process.env.MONGO_DB_PASSWORD);
let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://adminUser:${mongoDbPassword}@cluster0.rwx03.mongodb.net/nodejs-online-shop?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log('connected to mongo DB');
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

module.exports = { mongoConnect, getDb };
