var MongoClient = require('mongodb').MongoClient;
var express = require('express');
const bodyParser = require("body-parser");
const keys = require('./keys');

const client = new MongoClient(keys.mongoUri, { useUnifiedTopology: true });

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());//del
app.use(express.json());//del

client.connect();

app.get('/', function (req, res) {
  res.send('Hello Shoplist!');
});

app.post('/save', async (req, res) => {
  var db = client.db('shoppinglist');
  try {
    await db.collection("lists").replaceOne({ name: req.body.name }, req.body, { upsert: true });
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}); 

app.get('/open/:name', async (req, res, next) => {
  var db = client.db('shoppinglist');
  var result = await db.collection('lists').findOne({ name: req.params.name });
  if(result === null){
    return res.status(404).send();
  }
  res.send(result);
});

app.delete('/delete/:name', async (req, res) => {
  var db = client.db('shoppinglist');
  try {
    await db.collection('lists').deleteOne({ name: req.params.name });
    res.sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.get('/all', async (req, res) => {
  var db = client.db('shoppinglist');
  try {
    let result = await db.collection('lists').find({}).toArray()
    res.send(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.listen(8000, function () {
  console.log('Server listening on port 8000!');
});