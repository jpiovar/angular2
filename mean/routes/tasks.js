var express = require('express');
var router = express.Router();
var Promise = require('native-promise-only');
//var mongojs = require('mongojs');
//var db = mongojs('mongodb://brad:brad@ds047666.mlab.com:47666/mytasklist_brad', ['tasks']);

var MongoClient = require('mongodb').MongoClient;
var colectionMongoDb = 'Record';




var getRecord = function() {
  return new Promise(function(resolve, reject) {
    MongoClient.connect("mongodb://localhost:27017/mean", function (err, db) {

      if(err) {
        reject(err); return;
      }

      db.collection('Record', function (err, collection) {

        collection.find().toArray(function(err, items) {

          if(err) {
            reject(err); return;
          }

          console.log('service items from mongodb '+items);
          console.log('pr next'+items);
          resolve(items);
          db.close();

        });

      });

    });

  });

};



// Get All Tasks
router.get('/tasks', function(req, res, next){
    /*db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });*/
    
    getRecord().then(function(tasks){
      /*res.setHeader('content-type', 'application/json');
      res.json({ 'responseAction': items });
      res.end();*/
      
      console.log(tasks);
      res.json(tasks);
    });
    
});

// Get Single Task
router.get('/task/:id', function(req, res, next){
    /*db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });*/
    
    
    
});

//Save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.title || !(task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        /*db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });*/
        
        
        
    }
});

// Delete Task
router.delete('/task/:id', function(req, res, next){
    /*db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });*/
    
    
    
});

// Update Task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};
    
    if(task.isDone){
        updTask.isDone = task.isDone;
    }
    
    if(task.title){
        updTask.title = task.title;
    }
    
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        /*db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });*/
        
        
        
    }
});

module.exports = router;