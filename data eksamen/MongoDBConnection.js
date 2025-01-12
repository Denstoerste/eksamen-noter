const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

client.connect((err) => {
    if (err) throw err;
    console.log('Connected to MongoDB!');
    const db = client.db('my_database');
});
