const mongodb = require('mongodb');
const { MongoClient } = mongodb;
const mongoDbPassword = encodeURIComponent(process.env.MONGO_DB_PASSWORD);
const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://adminUser:${mongoDbPassword}@cluster0.rwx03.mongodb.net/nodejs-online-shop?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log('connected to mongo DB');
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
