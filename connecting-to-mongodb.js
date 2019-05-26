//providing a mongodb client
var mongoClient=require('mongodb').MongoClient;

//a url at which Mongodb service is runing
//var url="mongodb:localhost:27017";
var url="mongodb://myTester:xyz123@localhost:27017/ecommercedb";

//make a connection to mongodb service
mongoClient.connect(url,function(err,db){
    if(err){
        throw err;
    }

    console.log('successfully connected to db');
    db.close
})