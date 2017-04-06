var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var colectionMongoDb = 'tasks';

// get all tasks
router.get('/tasks', function(req, res, next){
    //res.send('TASK API');
    MongoClient.connect("mongodb://localhost:27017/mean", function (err, db) {

      if(err) {reject(err); return;}

      db.collection('Record', function (err, collection) {

        collection.find().toArray(function(err, items) {

          if(err) {
            reject(err); return;
          }

          console.log('service items from mongodb '+items);
          res.json(items);
          db.close();

        });

      });

    });

});


// get single task
router.get('/task/:id', function(req, res, next){
    //res.send('TASK API');
    var tempId = Number(req.params.id);

    MongoClient.connect("mongodb://localhost:27017/mean", function (err, db) {

      if(err) {reject(err); return;}

      db.collection('Record', function (err, collection) { 

        collection.findOne({id:tempId}, function(err, item) {

          if(err) {
            reject(err); return;
          }

          console.log('service items from mongodb '+item);
          res.json(item);
          db.close();

        });

      });

    });

});


module.exports = router;