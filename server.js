var MongoClient = require('mongodb').MongoClient;
var express = require('express');
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello Shoplist!');
});

app.post('/save', async (req, res) => {
  MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true }, async (err, client) => {
    var db = client.db('shoplist');
    if (err) {
      throw err;
    }
    try {
      await db.collection("lists").replaceOne({ name: req.body.name }, req.body, { upsert: true });
      res.sendStatus(200);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  });
});

app.get('/open/:name', async (req, res) => {
  MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, async (err, client) => {
    var db = client.db('shoplist');
    if (err) {
      throw err;
    }
    var result = await db.collection('lists').findOne({ name: req.params.name });
    res.send(result);
  });
});

app.delete('/delete/:name', async (req, res) => {
  MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, async (err, client) => {
    var db = client.db('shoplist');
    if (err) {
      throw err;
    }
    try {
      await db.collection('lists').deleteOne({ name: req.params.name });
      res.sendStatus(200);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  });
});

app.get('/all', async (req, res) => {
  MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, async (err, client) => {
    var db = client.db('shoplist');
    if (err) {
      throw err;
    }
    try {
      let result = await db.collection('lists').find({}).toArray()
      res.send(result);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});