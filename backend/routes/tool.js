const express = require('express');
const Tool = require('../models/tool');

const router = express.Router();

router.get('/tools', (req, res, next) => {
  Tool.find().then(dbTools => {
    res.json({ message: 'Tools sent sucessfully', tools: dbTools });
  });
});

router.post('/addTool', (req, res, next) => {
  const toolDB = new Tool(req.body);

  toolDB.save();
  res.status(201).json({ message: 'Tool added successfully' });
});

router.post('/updateTool', (req, res, next) => {
  Tool.updateOne({_id: req.body._id}, req.body).then((resp => {
    res.status(201).json({ message: 'Tool updated successfully'});
  }));
});

router.post('/deleteTool', (req, res, next) => {
  Tool.deleteOne({_id: req.body._id}, (err) => {
    res.status(201).json({ message: 'Tool Deleted successfully'});
  });
});

module.exports = router;
