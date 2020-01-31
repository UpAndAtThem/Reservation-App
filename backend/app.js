const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const Tool = require('./models/tool');

mongoose
  .connect(
    'mongodb+srv://Jason:7EWHpUQ8R4FtnMXk@m001-79uyp.mongodb.net/tools?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true  }
  )
  .then(res => {
    console.log('\n\nconnected to mongoDB\n\n');
  })
  .catch(() => {
    console.log('connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.get('/api/tools', (req, res, next) => {
  Tool.find()
    .then(dbTools => {
      res.json({ message: 'Tools sent sucessfully', tools: dbTools});
    });
});

app.post('/api/addTool', (req, res, next) => {
  const toolDB = new Tool(req.body);

  toolDB.save();
  res.status(201).json({ message: 'Tool added successfully' });
});

module.exports = app;
