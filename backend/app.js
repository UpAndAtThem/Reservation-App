const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const Tool = require('./models/tool');

// Mongo cluster user: 'Jason' password: 7EWHpUQ8R4FtnMXk or m001-mongodb-basics if it didn't update.
mongoose
  .connect(
    'mongodb+srv://Jason:7EWHpUQ8R4FtnMXk@m001-79uyp.mongodb.net/tools?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(res => {
    console.log('\n\nconnected to mongoDB\n\n');
  })
  .catch(() => {
    console.log('connection failed');
  });

let toolId = 6;

const tools = [
  {
    toolName: 'CNC Machine',
    toolDescription:
      // tslint:disable-next-line: max-line-length
      'A Computer numerical control (CNC) is a method for automating control of machine tools through the use of software embedded in a microcomputer attached to the tool.',
    userNeedsCert: true,
    userMaxMonthlyReservations: 4

  },
  {
    toolName: '3D Printer',
    toolDescription:
      'A 3D printer is a computer-aided manufacturing (CAM) device that creates three-dimensional objects.',
    userNeedsCert: true,
    userMaxMonthlyReservations: 4
  },
  {
    toolName: 'Circular Saw',
    toolDescription:
      // tslint:disable-next-line: max-line-length
      'A circular saw is a power-saw using a toothed or abrasive disc or blade to cut different materials using a rotary motion spinning around an arbor.',
    userNeedsCert: true,
    userMaxMonthlyReservations: 4
  },
  {
    toolName: 'Hammer Drill',
    toolDescription:
      // tslint:disable-next-line: max-line-length
      'A Hammer Drill is a power tool used chiefly for drilling in hard materials. It is a type of rotary drill with an impact mechanism that generates a hammering motion',
    userNeedsCert: true,
    userMaxMonthlyReservations: 4
  },
  {
    toolName: 'Angle Grndr',
    toolDescription:
      'An angle grinder, also known as a side grinder or disc grinder, is a handheld power tool used for grinding and polishing.',
    userNeedsCert: true,
    userMaxMonthlyReservations: 4
  }
];

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
      res.json({ message: 'Tools sent sucessfully', tools: dbTools });
    });
});

app.post('/api/addTool', (req, res, next) => {
  const toolDB = new Tool(req.body);

  toolDB.save();
  res.status(201).json({ message: 'Tool added successfully' });

  // this saves mock data in the global tools object for the moment
  // let tool = req.body;
  // tool.toolId = toolId++;

  // tools.push(tool);
});

module.exports = app;
