const express = require('express');
const app = express();
const bodyParser = require('body-parser')

let toolId = 6;
const tools = [
  {
    toolId: 1,
    toolName: 'CNC Machine',
    toolDescription:
      // tslint:disable-next-line: max-line-length
      'A Computer numerical control (CNC) is a method for automating control of machine tools through the use of software embedded in a microcomputer attached to the tool.',
    userNeedsCert: true
  },
  {
    toolId: 2,
    toolName: '3D Printer',
    toolDescription:
      'A 3D printer is a computer-aided manufacturing (CAM) device that creates three-dimensional objects.',
    userNeedsCert: true
  },
  {
    toolId: 3,
    toolName: 'Circular Saw',
    toolDescription:
      // tslint:disable-next-line: max-line-length
      'A circular saw is a power-saw using a toothed or abrasive disc or blade to cut different materials using a rotary motion spinning around an arbor.',
    userNeedsCert: true
  },
  {
    toolId: 4,
    toolName: 'Hammer Drill',
    toolDescription:
      // tslint:disable-next-line: max-line-length
      'A Hammer Drill is a power tool used chiefly for drilling in hard materials. It is a type of rotary drill with an impact mechanism that generates a hammering motion',
    userNeedsCert: true
  },
  {
    toolId: 5,
    toolName: 'Angle Grinder',
    toolDescription:
      'An angle grinder, also known as a side grinder or disc grinder, is a handheld power tool used for grinding and polishing.',
    userNeedsCert: true
  }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

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
  res.json({ message: 'Tools sent sucessfully', tools: tools });
});

app.post('/api/addTool', (req, res, next) => {
  let tool = req.body;
  tool.toolId = toolId++;

  console.log('within express addTool post route');
  console.log(tools);
  tools.push(tool);
  res.status(201).json({message: 'Tool added successfully'});
});

module.exports = app;
