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


var getMaxObjArray = function(objArr) {
  var maxObjArr = 0;
  for(var i in objArr){
    if(objArr[i].id > maxObjArr){
      maxObjArr = objArr[i].id;
    }
  }
  return maxObjArr;
}


// save task
router.post('/task', function(req, res, next){
  var task = req.body;
  if(!task){
    res.status(400);
    res.json({
      "error": "Bad data"
    });
  } else {
    MongoClient.connect("mongodb://localhost:27017/mean", function (err, db) {

	     if(err){
         reject(err);
         return;
       }


       db.collection('Record', function (err, collection) {


          collection.find().toArray(function(err, items) {

            if(err) {
              reject(err); return;
            }

            console.log('service items from mongodb '+items);
            console.log('pr next'+items);


            var maxRecord = getMaxObjArray(items);
            console.log(maxRecord);

            collection.insert({ id: maxRecord+1, item: record }, function(err, result) {

              if(err) {
                reject(err);
                return;
              }

              db.close();
              //resolve(result);

  	        });

          });



	     });








    });
  }
});

module.exports = router;