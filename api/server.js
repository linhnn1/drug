var express = require("express");
var mongodb = require("mongodb");
var app = express();
var MongoClient = mongodb.MongoClient;
var connect;
var port=4000;
const cors = require('cors');
const personsRoute = require('./Person.router');
const bodyParser = require("body-parser");
//const mongoose = require('mongoose');
app.use('/persons', personsRoute);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 
// Initialize connection once
MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if (err) throw err;
  connect = client;

  // Start the application after the database connection is ready
  app.listen(port);
  console.log("Listening on port 3000");
});


// Reuse database object in request handlers
app.get("/", function (req, res) {
  let abc = connect.db("todo");
  console.log(abc)
//   abc.collection("linh").insert([{ name:"linh",age:20 },{name:"abc",age:29}], function (err, r) {
//      // console.log(r);
//     res.send({status: 200, message: "OK"})   
//   });

    ///updateOne, updateMany
//   abc.collection("linh").updateMany({a:1},{$set:{b:1}},function(err, r) {
//     res.send({status: 200, message: "OK"}) 
//   })
//   /////delete
//   abc.collection("linh").deleteMany({a:1},function(err, r) {
//       res.send({status: 200, message: "OK"})
//   })
  
});
app.use('/drug', bodyParser.json());
app.post("/drug", (req, res,next) => {
    console.log(res.body)
}
)